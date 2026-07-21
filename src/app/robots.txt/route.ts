import { SITE_URL } from "@/lib/seo";

export const runtime = "nodejs";
export const dynamic = "force-static";

/**
 * robots.txt served as a route handler (not the metadata `robots.ts`) so we
 * can emit a `Content-Signal:` line — the metadata API has no field for it.
 *
 * Behaviour is otherwise identical to before: allow all standard crawlers and
 * explicitly welcome the major AI / LLM crawlers by name, then advertise the
 * sitemap and canonical host.
 *
 * Content Signals (contentsignals.org) declare how AI systems may use the
 * content once fetched. Scanio *wants* to be found and cited, so all three are
 * "yes":
 *   search   = yes  -> index for (AI) search results
 *   ai-input = yes  -> allowed as grounding/context in AI answers (drives leads)
 *   ai-train = yes  -> allowed as model training data
 * To stop model-training use of the copy later, change `ai-train=yes` to
 * `ai-train=no` below — search and AI-answer visibility stay unaffected.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=yes";

export function GET() {
  const lines: string[] = [
    "# Scanio Moving & Storage",
    "",
    "User-agent: *",
    "Allow: /",
    `Content-Signal: ${CONTENT_SIGNAL}`,
    "",
    "# AI / LLM crawlers explicitly welcomed",
  ];

  for (const ua of AI_CRAWLERS) {
    lines.push(`User-agent: ${ua}`, "Allow: /", `Content-Signal: ${CONTENT_SIGNAL}`, "");
  }

  lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`, `Host: ${SITE_URL}`, "");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
