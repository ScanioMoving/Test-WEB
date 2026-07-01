import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllPostMeta } from "@/lib/blog";

/**
 * Only real, indexable routes belong here. Deliberately excluded:
 *   /quote            → redirects to /contact
 *   /services/packing → redirects to /services/ffe-designer (duplicate content)
 *   /testimonials     → noindex (not being featured yet)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/residential", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/commercial", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/long-distance", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/international", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/ffe-designer", priority: 0.8, changeFrequency: "monthly" },
    { path: "/storage", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = entries.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPostMeta().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.date ? new Date(`${p.date}T00:00:00`) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
