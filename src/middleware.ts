import { NextResponse, type NextRequest } from "next/server";

/**
 * Markdown for Agents.
 *
 * When a client explicitly asks for `text/markdown` (an agent, not a browser —
 * browsers send `Accept: text/html...`), serve a compact markdown version of
 * the homepage instead of the full HTML app. HTML stays the default for
 * everyone else, so this is invisible to normal visitors.
 *
 * Scope is deliberately narrow (the homepage only) to keep behaviour correct
 * and predictable; the full machine-readable reference already lives at
 * /llms-full.txt, which the markdown body links to. Extend HOMEPAGE_MARKDOWN /
 * add more paths here if per-page markdown is wanted later.
 */

const HOMEPAGE_MARKDOWN = `# Scanio Moving & Storage

Family-owned New York City moving and storage company, operating since 1941.
Residential, commercial, long-distance, international, and FF&E / designer
moving, plus temperature-controlled storage across the NYC metro area.

## Contact
- Phone: 212.722.6850
- Email: info@scaniomoving.com
- Office: 450 Fashion Ave, New York, NY 10123
- Hours: Monday–Friday, 9:00 AM – 5:00 PM
- Contact form: https://www.scaniomoving.com/contact

## Services
- Residential moving — https://www.scaniomoving.com/services/residential
- Commercial moving — https://www.scaniomoving.com/services/commercial
- Long-distance moving — https://www.scaniomoving.com/services/long-distance
- International moving — https://www.scaniomoving.com/services/international
- FF&E / Designer — https://www.scaniomoving.com/services/ffe-designer
- Storage — https://www.scaniomoving.com/storage

## Machine-readable resources
- Full reference: https://www.scaniomoving.com/llms-full.txt
- Contact API (JSON): https://www.scaniomoving.com/api/contact-info
- API catalog: https://www.scaniomoving.com/.well-known/api-catalog
`;

function wantsMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  // Only when markdown is explicitly requested. Browsers never send this.
  return accept.split(",").some((part) => part.trim().toLowerCase().startsWith("text/markdown"));
}

export function middleware(request: NextRequest) {
  if (wantsMarkdown(request.headers.get("accept"))) {
    return new NextResponse(HOMEPAGE_MARKDOWN, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Markdown-Tokens": String(Math.ceil(HOMEPAGE_MARKDOWN.length / 4)),
        Vary: "Accept",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  }
  return NextResponse.next();
}

// Homepage only — keep the markdown path tightly scoped.
export const config = {
  matcher: ["/"],
};
