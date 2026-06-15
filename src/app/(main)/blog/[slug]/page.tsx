import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost, formatDate } from "@/lib/blog";
import { pageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return pageMetadata({ path: `/blog/${slug}`, title: post.title, description: post.description });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Scanio Moving & Storage",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/scanio-logo.png` },
    },
    mainEntityOfPage: url,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ])}
      />
      <div className="h-[150px] w-full bg-white" />
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-16">
          <Link href="/blog" className="text-[12px] tracking-[0.2em] uppercase font-medium" style={{ color: "#0B5DB5" }}>
            ← All articles
          </Link>
          <p className="text-[12px] tracking-[0.1em] uppercase mt-6 mb-3" style={{ color: "#4A5568" }}>
            {formatDate(post.date)}
          </p>
          <h1
            className="text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] mb-8"
            style={{ color: "#0B5DB5" }}
          >
            {post.title}
          </h1>
          <div className="article-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="mt-14 pt-8 border-t" style={{ borderColor: "#E5ECF4" }}>
            <p className="text-[16px] leading-[1.7] mb-5" style={{ color: "#2D3748" }}>
              Planning a move in or out of NYC? Scanio has handled it with care since 1941.
            </p>
            <Link
              href="/quote"
              className="inline-block text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all hover:opacity-90"
              style={{ background: "#0A1628", color: "white" }}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
