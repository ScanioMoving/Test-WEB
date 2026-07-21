import { NextResponse } from "next/server";
import { contactCard } from "../contact-info/route";
import { COMPANY } from "@/lib/contact";

export const runtime = "nodejs";

/**
 * Minimal Model Context Protocol (MCP) server over the Streamable-HTTP
 * transport, exposing one read-only tool: `get_contact_info`.
 *
 * This is intentionally small — the whole point is to let an MCP-capable
 * agent pull Scanio's phone/email/address in a standard way. It implements
 * the request/response subset of the transport (a single JSON reply per POST,
 * no server-initiated streaming), which is all a stateless read tool needs.
 *
 * Advertised to agents via /.well-known/mcp/server-card.json.
 */

const PROTOCOL_VERSION = "2025-06-18";
const SERVER_INFO = { name: "scanio-moving", title: "Scanio Moving & Storage", version: "1.0.0" };

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Mcp-Session-Id, Mcp-Protocol-Version",
};

const CONTACT_TOOL = {
  name: "get_contact_info",
  title: "Get Scanio contact info",
  description:
    "Returns Scanio Moving & Storage's phone number, email address, mailing address, and business hours. Use this to help a user contact the company or request a moving quote.",
  inputSchema: { type: "object", properties: {}, additionalProperties: false },
};

type JsonRpcId = string | number | null;
interface JsonRpcRequest {
  jsonrpc: "2.0";
  id?: JsonRpcId;
  method: string;
  params?: unknown;
}

function result(id: JsonRpcId, res: unknown) {
  return { jsonrpc: "2.0" as const, id, result: res };
}
function error(id: JsonRpcId, code: number, message: string) {
  return { jsonrpc: "2.0" as const, id, error: { code, message } };
}

function handle(req: JsonRpcRequest) {
  const id = req.id ?? null;
  switch (req.method) {
    case "initialize":
      return result(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions:
          "Use get_contact_info to retrieve how to reach Scanio Moving & Storage.",
      });
    case "ping":
      return result(id, {});
    case "tools/list":
      return result(id, { tools: [CONTACT_TOOL] });
    case "tools/call": {
      const params = (req.params ?? {}) as { name?: string };
      if (params.name !== CONTACT_TOOL.name) {
        return error(id, -32602, `Unknown tool: ${params.name}`);
      }
      const card = contactCard();
      const text =
        `${COMPANY.name}\n` +
        `Phone: ${card.phoneDisplay}\n` +
        `Email: ${card.email}\n` +
        `Address: ${card.address.formatted}\n` +
        `Hours: ${card.hours}`;
      return result(id, {
        content: [{ type: "text", text }],
        structuredContent: card,
        isError: false,
      });
    }
    default:
      return error(id, -32601, `Method not found: ${req.method}`);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(error(null, -32700, "Parse error"), {
      status: 400,
      headers: CORS,
    });
  }

  // Notifications (no `id`) get an empty 202 — nothing to return.
  const single = body as JsonRpcRequest;
  if (single && typeof single === "object" && single.id === undefined && typeof single.method === "string") {
    return new NextResponse(null, { status: 202, headers: CORS });
  }

  const payload = Array.isArray(body) ? body.map((r) => handle(r as JsonRpcRequest)) : handle(single);
  return NextResponse.json(payload, { headers: CORS });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function GET() {
  // This server doesn't open server-initiated SSE streams; tell clients so.
  return NextResponse.json(error(null, -32000, "This MCP endpoint accepts POST requests only."), {
    status: 405,
    headers: { ...CORS, Allow: "POST, OPTIONS" },
  });
}
