import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Allow all standard crawlers AND explicitly welcome the major AI / LLM
 * crawlers so Scanio can surface in AI assistants and AI search. Listing
 * them by name is a clear opt-in signal (some respect Google-Extended /
 * Applebot-Extended only when explicitly allowed). /llms.txt gives those
 * crawlers a curated, machine-readable summary of the business.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // OpenAI / ChatGPT search
  "ChatGPT-User", // ChatGPT browsing on a user's behalf
  "ClaudeBot", // Anthropic
  "anthropic-ai", // Anthropic (legacy)
  "Claude-Web", // Anthropic
  "PerplexityBot", // Perplexity
  "Perplexity-User", // Perplexity on a user's behalf
  "Google-Extended", // Google Gemini / Vertex
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot", // Amazon
  "Bytespider", // ByteDance
  "CCBot", // Common Crawl (feeds many models)
  "cohere-ai", // Cohere
  "Meta-ExternalAgent", // Meta AI
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
