"use client";

import { useEffect } from "react";
import { COMPANY } from "@/lib/contact";

/**
 * WebMCP — expose a `get_contact_info` tool to any in-browser AI agent that
 * implements the proposed navigator.modelContext API
 * (https://webmachinelearning.github.io/webmcp/).
 *
 * This is entirely feature-detected and wrapped in try/catch: in every browser
 * that doesn't implement WebMCP (all of them today) it does nothing and renders
 * nothing. It mirrors the server-side /api/mcp tool so an agent gets the same
 * answer whether it runs in the page or calls the endpoint.
 */

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: object;
  execute: (args: unknown) => Promise<{ content: { type: string; text: string }[] }>;
};

type ModelContext = {
  provideContext?: (ctx: { tools: WebMcpTool[] }) => void;
  registerTool?: (tool: WebMcpTool) => void;
};

export default function WebMCP() {
  useEffect(() => {
    const nav = navigator as Navigator & { modelContext?: ModelContext };
    const mc = nav.modelContext;
    if (!mc) return;

    const tool: WebMcpTool = {
      name: "get_contact_info",
      description:
        "Returns Scanio Moving & Storage's phone number, email address, mailing address, and business hours.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async () => ({
        content: [
          {
            type: "text",
            text:
              `${COMPANY.name}\n` +
              `Phone: ${COMPANY.phone.display}\n` +
              `Email: ${COMPANY.email}\n` +
              `Address: ${COMPANY.address.line1}, ${COMPANY.address.line2}\n` +
              `Hours: ${COMPANY.hours}`,
          },
        ],
      }),
    };

    try {
      if (typeof mc.provideContext === "function") {
        mc.provideContext({ tools: [tool] });
      } else if (typeof mc.registerTool === "function") {
        mc.registerTool(tool);
      }
    } catch {
      // WebMCP not usable in this browser — ignore silently.
    }
  }, []);

  return null;
}
