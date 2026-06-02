import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import { COMPANY, TEL_HREF } from "@/lib/contact";
import { SITE_URL } from "@/lib/seo";
import { FAQ_INTRO, FAQ_SECTIONS, FAQ_GLOSSARY } from "./faq-data";

export const metadata: Metadata = {
  title: "Moving FAQs & Glossary",
  description:
    "Answers to common NYC moving questions — pianos, estimates, COIs, storage, packing, licensing, and a plain-language glossary of moving terms. Scanio Moving & Storage, since 1941.",
  alternates: { canonical: "/faqs" },
};

// Flatten an answer (lead + any bullets/steps) into plain text for schema.org.
function answerText(it: { a: string; bullets?: string[]; steps?: string[] }): string {
  return [it.a, ...(it.bullets ?? []), ...(it.steps ?? [])].join(" ");
}

// FAQPage structured data, built from the same content the page renders.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faqs#faq`,
  mainEntity: FAQ_SECTIONS.flatMap((s) =>
    s.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: answerText(it) },
    })),
  ),
};

const quickLinks = [
  ...FAQ_SECTIONS.map((s) => ({ label: s.title, anchor: s.anchor })),
  { label: "Glossary", anchor: "glossary" },
];

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Spacer behind the fixed header */}
      <div className="h-[150px] w-full bg-white" />

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-8 md:pb-12 text-center">
          <p
            className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-medium mb-4"
            style={{ color: "#0B5DB5" }}
          >
            Help Center
          </p>
          <h1
            className="text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ color: "#0B5DB5" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-[15px] md:text-[17px] font-normal leading-[1.8] mb-8"
            style={{ color: "#2D3748" }}
          >
            {FAQ_INTRO}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="text-[12px] tracking-[0.3em] uppercase font-medium px-8 py-4 transition-all hover:opacity-90"
              style={{ background: "#0A1628", color: "white" }}
            >
              Get a Free Estimate
            </Link>
            <a
              href={TEL_HREF}
              className="flex items-center justify-center gap-2 text-[13px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-60"
              style={{ color: "#0A1628" }}
            >
              <Phone size={14} />
              {COMPANY.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* Sticky quick-link nav (anchors). No JS — pure CSS sticky + scroll. */}
      <nav
        aria-label="FAQ sections"
        className="sticky top-[150px] z-30 border-y"
        style={{
          background: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          borderColor: "#E5ECF4",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 md:px-10">
          <ul className="flex gap-2 md:gap-3 overflow-x-auto py-3 md:flex-wrap md:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {quickLinks.map((l) => (
              <li key={l.anchor} className="shrink-0">
                <a
                  href={`#${l.anchor}`}
                  className="block whitespace-nowrap text-[12px] md:text-[13px] tracking-[0.04em] font-medium px-3.5 py-2 rounded-full border transition-colors hover:bg-[#0B5DB5] hover:text-white hover:border-[#0B5DB5]"
                  style={{ color: "#2D3748", borderColor: "#D6E0ED" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-12 md:py-16">
          {FAQ_SECTIONS.map((section, si) => (
            <div
              key={section.anchor}
              id={section.anchor}
              className="scroll-mt-[230px] md:scroll-mt-[220px] mb-14 md:mb-20"
            >
              {section.image ? (
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm mb-7 md:mb-9">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              ) : null}

              <h2
                className="text-[clamp(22px,2.8vw,32px)] font-light leading-[1.2] tracking-[-0.01em] mb-2"
                style={{ color: "#0A1628" }}
              >
                {section.title}
              </h2>
              <p
                className="text-[14px] md:text-[15px] font-normal leading-[1.7] mb-6 md:mb-8"
                style={{ color: "#4A5568" }}
              >
                {section.blurb}
              </p>

              <div className="border-t" style={{ borderColor: "#E5ECF4" }}>
                {section.items.map((item, ii) => (
                  <details
                    key={ii}
                    className="group border-b"
                    style={{ borderColor: "#E5ECF4" }}
                    {...(si === 0 && ii === 0 ? { open: true } : {})}
                  >
                    <summary className="flex items-start justify-between gap-4 cursor-pointer list-none py-4 md:py-5 [&::-webkit-details-marker]:hidden">
                      <span
                        className="text-[15px] md:text-[17px] font-medium leading-[1.5]"
                        style={{ color: "#0A1628" }}
                      >
                        {item.q}
                      </span>
                      <ChevronDown
                        size={20}
                        className="shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180"
                        style={{ color: "#0B5DB5" }}
                      />
                    </summary>
                    <div className="pb-5 pr-2 md:pr-8">
                      <p
                        className="text-[15px] md:text-[16px] font-normal leading-[1.8]"
                        style={{ color: "#2D3748" }}
                      >
                        {item.a}
                      </p>
                      {item.bullets ? (
                        <ul className="mt-3 space-y-2">
                          {item.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2.5">
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: "#0B5DB5" }}
                              />
                              <span
                                className="text-[15px] md:text-[16px] font-normal leading-[1.75]"
                                style={{ color: "#2D3748" }}
                              >
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {item.steps ? (
                        <ol className="mt-3 space-y-2.5">
                          {item.steps.map((s, sI) => (
                            <li key={sI} className="flex items-start gap-3">
                              <span
                                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold"
                                style={{ background: "#0B5DB5", color: "white" }}
                              >
                                {sI + 1}
                              </span>
                              <span
                                className="text-[15px] md:text-[16px] font-normal leading-[1.7] pt-0.5"
                                style={{ color: "#2D3748" }}
                              >
                                {s}
                              </span>
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Glossary */}
          <div id="glossary" className="scroll-mt-[230px] md:scroll-mt-[220px]">
            <h2
              className="text-[clamp(22px,2.8vw,32px)] font-light leading-[1.2] tracking-[-0.01em] mb-2"
              style={{ color: "#0A1628" }}
            >
              Glossary of Moving Terms
            </h2>
            <p
              className="text-[14px] md:text-[15px] font-normal leading-[1.7] mb-7 md:mb-9"
              style={{ color: "#4A5568" }}
            >
              A plain-language guide to the moving and storage terms you may run into.
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              {FAQ_GLOSSARY.map((g) => (
                <div key={g.term}>
                  <dt className="text-[14px] md:text-[15px] font-semibold mb-1" style={{ color: "#0A1628" }}>
                    {g.term}
                  </dt>
                  <dd className="text-[14px] font-normal leading-[1.7]" style={{ color: "#4A5568" }}>
                    {g.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA — light blue band */}
      <section className="py-16 md:py-24 border-t border-b" style={{ background: "#EBF1F8", borderColor: "#D6E0ED" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "#0B5DB5" }}>
            Still have questions?
          </p>
          <h2
            className="text-[clamp(24px,3vw,38px)] font-light leading-[1.25] tracking-[-0.01em] mb-4"
            style={{ color: "#0A1628" }}
          >
            We're happy to help.
          </h2>
          <p className="text-[15px] md:text-[16px] font-normal leading-[1.75] mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "#2D3748" }}>
            Call us, send a note, or request a free, no-obligation estimate and a
            coordinator will walk you through your move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all hover:opacity-90"
              style={{ background: "#0A1628", color: "white" }}
            >
              Get a Free Estimate
            </Link>
            <a
              href={TEL_HREF}
              className="flex items-center justify-center gap-2 text-[13px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-60"
              style={{ color: "#0A1628" }}
            >
              <Phone size={14} />
              {COMPANY.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
