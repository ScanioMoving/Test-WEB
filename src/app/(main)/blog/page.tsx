import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostMeta, formatDate } from "@/lib/blog";
import { pageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: "Moving Tips & Guides",
  description:
    "Expert NYC moving advice from Scanio Moving & Storage — costs, checklists, packing, storage, and commercial move planning, from movers serving New York since 1941.",
});

export default function BlogIndex() {
  const posts = getAllPostMeta();
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <div className="h-[150px] w-full bg-white" />
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10 py-8 md:py-16">
          <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-3" style={{ color: "#0B5DB5" }}>
            Resources
          </p>
          <h1
            className="text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em] mb-4"
            style={{ color: "#0B5DB5" }}
          >
            Moving Tips &amp; Guides
          </h1>
          <p className="text-[16px] leading-[1.8] mb-12 max-w-2xl" style={{ color: "#2D3748" }}>
            Practical advice for moving in and out of New York City — from a family-run mover since 1941.
          </p>

          <div className="grid gap-8">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block group border-b pb-8"
                style={{ borderColor: "#E5ECF4" }}
              >
                <p className="text-[12px] tracking-[0.1em] uppercase mb-2" style={{ color: "#4A5568" }}>
                  {formatDate(p.date)}
                </p>
                <h2
                  className="text-[clamp(20px,2.6vw,28px)] font-semibold leading-[1.2] mb-2 group-hover:opacity-70 transition-opacity"
                  style={{ color: "#0A1628" }}
                >
                  {p.title}
                </h2>
                <p className="text-[15px] leading-[1.7]" style={{ color: "#2D3748" }}>
                  {p.description}
                </p>
                <span className="inline-block mt-3 text-[12px] tracking-[0.2em] uppercase font-medium" style={{ color: "#0B5DB5" }}>
                  Read more →
                </span>
              </Link>
            ))}
            {posts.length === 0 && (
              <p style={{ color: "#2D3748" }}>New articles coming soon.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
