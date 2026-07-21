import { NextResponse } from "next/server";
import { COMPANY, TEL_HREF, MAILTO_HREF } from "@/lib/contact";
import { SITE_URL, TELEPHONE } from "@/lib/seo";

export const runtime = "nodejs";
// Contact info rarely changes; let CloudFront cache it hard.
export const revalidate = 86400;

/**
 * Public, read-only contact endpoint for AI agents and integrations.
 *
 * This is the single "API" the site advertises through /.well-known/api-catalog,
 * the OpenAPI spec, the MCP server, and WebMCP. It exposes exactly what a
 * caller needs to reach the business: phone, email, address, and hours. There
 * is nothing sensitive here and no authentication — it's the same information
 * printed in the footer, just in a machine-readable shape.
 *
 * GET  /api/contact-info   -> JSON contact card
 * OPTIONS                  -> CORS preflight (agents call cross-origin)
 */

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function contactCard() {
  return {
    name: COMPANY.name,
    description: "Full-service moving and storage company serving New York City since 1941.",
    url: SITE_URL,
    telephone: TELEPHONE, // E.164-style, e.g. +1-212-722-6850
    phoneDisplay: COMPANY.phone.display,
    telHref: TEL_HREF,
    email: COMPANY.email,
    emailHref: MAILTO_HREF,
    address: {
      streetAddress: COMPANY.address.line1,
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10123",
      addressCountry: "US",
      formatted: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
    },
    hours: COMPANY.hours,
    contactPage: `${SITE_URL}/contact`,
  } as const;
}

export async function GET() {
  return NextResponse.json(contactCard(), {
    headers: {
      ...CORS,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}
