"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

/**
 * VERSION B — "GALERIE"
 * Gagosian gallery aesthetic meets Patek Philippe precision.
 *
 * Art-first hierarchy. Achromatic interface (navy/white).
 * Exhibition-listing service layout. Extreme whitespace.
 * The images provide color — the interface stays silent.
 */

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function EntryReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div
      className={`opacity-0 translate-y-8 animate-[fadeUp_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function VersionB() {
  useEffect(() => {
    document.body.style.background = "#FFFFFF";
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    return () => {
      document.body.style.background = "";
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>

      {/* ─── NAV — Gagosian-style minimal ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
          <span className="text-white text-[13px] tracking-[0.6em] uppercase font-medium">
            Scanio
          </span>
          <div className="hidden md:flex items-center gap-12">
            {["Services", "About", "Contact"].map((item) => (
              <span key={item} className="text-white text-[11px] tracking-[0.2em] uppercase cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                {item}
              </span>
            ))}
          </div>
          <Link
            href="/quote"
            className="text-white text-[11px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity"
          >
            Inquire
          </Link>
        </div>
      </nav>

      {/* ─── HERO — Full-viewport image, Gagosian Ken Burns ─── */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 animate-[slowZoom_20s_ease-out_forwards]">
          <Image
            src="/slides/slide-1.jpg"
            alt="New York City"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-20 md:pb-28">
          <div className="max-w-[1600px] mx-auto px-8 md:px-12">
            <EntryReveal delay={300}>
              <p className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-5 font-light">
                New York &mdash; Since 1941
              </p>
            </EntryReveal>
            <EntryReveal delay={500}>
              <h1 className="text-[clamp(48px,8vw,130px)] text-white font-light leading-[0.92] tracking-[-0.03em]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Scanio
              </h1>
            </EntryReveal>
            <EntryReveal delay={700}>
              <p className="text-[15px] text-white/40 mt-6 max-w-md leading-relaxed font-light">
                Eight decades of precision, care, and unmatched
                expertise in the art of relocation.
              </p>
            </EntryReveal>
          </div>
        </div>
      </section>

      {/* ─── BRAND STATEMENT — Gallery-style centered block ─── */}
      <section className="py-40 md:py-56 bg-white">
        <div className="max-w-[680px] mx-auto px-8 text-center">
          <Reveal>
            <h2
              className="text-[clamp(26px,3.5vw,44px)] font-normal leading-[1.45] tracking-[-0.01em]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0A1628" }}
            >
              How something is moved reveals
              how deeply it is valued.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[15px] leading-[1.9] mt-10 font-light" style={{ color: "#6B7280" }}>
              For over eighty years, Scanio Moving &amp; Storage has understood
              that every object carries meaning beyond its material worth. Our work
              is to honor that meaning with care, precision, and quiet expertise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE — Gallery divider ─── */}
      <section className="relative h-[75vh] overflow-hidden">
        <Image
          src="/slides/slide-3.jpg"
          alt="Interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ─── SERVICES — Exhibition-listing style (Gagosian) ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="flex items-center justify-between mb-20">
              <h2 className="text-[11px] tracking-[0.5em] uppercase font-medium" style={{ color: "#0A1628" }}>
                Services
              </h2>
              <div className="hidden md:block h-px flex-1 ml-8" style={{ background: "#E5E7EB" }} />
            </div>
          </Reveal>

          <div>
            {[
              { title: "Residential Moving", desc: "From Park Avenue penthouses to Brooklyn brownstones. Every home move handled with museum-grade care." },
              { title: "Commercial Moving", desc: "Corporate relocations executed with precision, discretion, and minimal disruption to operations." },
              { title: "White Glove", desc: "Fine art, antiques, Steinway concert grands, and irreplaceable collector's items." },
              { title: "Long Distance", desc: "ICC-licensed coast-to-coast relocations with dedicated trucks and full insurance coverage." },
              { title: "Packing & Crating", desc: "Archival-quality materials and custom crating for your most valuable possessions." },
              { title: "Private Storage", desc: "Climate-controlled facility. Secure, accessible, flexible month-to-month terms." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div
                  className="group py-8 border-b cursor-pointer flex items-start md:items-center justify-between gap-8 transition-colors"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span className="text-[11px] font-light tabular-nums shrink-0 mt-1 md:mt-0" style={{ color: "#D1D5DB" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-[20px] md:text-[24px] font-normal tracking-[-0.01em] group-hover:opacity-50 transition-opacity duration-500"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0A1628" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-[13px] font-light leading-relaxed mt-2 max-w-lg hidden md:block" style={{ color: "#9CA3AF" }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="shrink-0 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-500"
                    style={{ color: "#0A1628" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROVENANCE — Heritage as museum provenance ─── */}
      <section className="py-32 md:py-44" style={{ background: "#0A1628" }}>
        <div className="max-w-[1100px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-start">
            <Reveal>
              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase mb-8 font-light" style={{ color: "#4A8FE7" }}>
                  Provenance
                </p>
                <h2
                  className="text-[clamp(28px,4vw,48px)] font-normal text-white leading-[1.2] tracking-[-0.02em] mb-8"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Since 1941
                </h2>
                <p className="text-[15px] leading-[1.9] font-light text-white/35">
                  Three generations of New York moving expertise.
                  From our first truck to a fleet that runs 75% on biodiesel —
                  we&apos;ve never stopped refining the standard.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-10 pt-4">
                {[
                  { year: "1941", text: "Founded in Manhattan. First generation of the Scanio family begins operations with a single truck." },
                  { year: "1970s", text: "Expansion to full-service moving and storage. Second generation takes the helm." },
                  { year: "2000s", text: "Biodiesel fleet initiative. Pioneer of green moving in New York City." },
                  { year: "Today", text: "Three generations strong. Licensed coast-to-coast. NYC's premier moving service." },
                ].map((item) => (
                  <div key={item.year} className="flex gap-6">
                    <span className="text-[13px] font-light shrink-0 w-16" style={{ color: "#4A8FE7" }}>
                      {item.year}
                    </span>
                    <p className="text-[14px] font-light leading-[1.8] text-white/40">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE 2 ─── */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/slides/slide-2.jpg"
          alt="Luxury interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ─── CREDENTIALS ─── */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {[
              { val: "80+", label: "Years" },
              { val: "75%", label: "Biodiesel" },
              { val: "NYC", label: "Based" },
              { val: "Full", label: "Insurance" },
            ].map((s) => (
              <Reveal key={s.label}>
                <div className="text-center">
                  <p
                    className="text-[clamp(36px,5vw,60px)] font-light tracking-[-0.03em]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0A1628" }}
                  >
                    {s.val}
                  </p>
                  <p className="text-[10px] tracking-[0.4em] uppercase mt-3 font-light" style={{ color: "#9CA3AF" }}>
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — Sparse, authoritative ─── */}
      <section className="py-40 md:py-52 border-t" style={{ borderColor: "#E5E7EB", background: "#FAFAFA" }}>
        <div className="max-w-[600px] mx-auto px-8 text-center">
          <Reveal>
            <h2
              className="text-[clamp(28px,4vw,48px)] font-normal leading-[1.3] tracking-[-0.02em] mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0A1628" }}
            >
              Begin with a
              conversation.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/quote"
                className="text-[11px] tracking-[0.3em] uppercase px-10 py-4 border transition-all hover:bg-[#0A1628] hover:text-white hover:border-[#0A1628]"
                style={{ color: "#0A1628", borderColor: "#0A1628" }}
              >
                Request Consultation
              </Link>
              <a
                href="tel:6468638070"
                className="flex items-center gap-2 text-[12px] tracking-[0.15em] font-light transition-opacity hover:opacity-60"
                style={{ color: "#9CA3AF" }}
              >
                <Phone size={13} />
                646.863.8070
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER — Gagosian minimal ─── */}
      <footer className="py-8 bg-white border-t" style={{ borderColor: "#E5E7EB" }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: "#0A1628" }}>
            Scanio Moving &amp; Storage
          </span>
          <span className="text-[11px] font-light" style={{ color: "#D1D5DB" }}>
            &copy; {new Date().getFullYear()} &middot; 222 West 37th Street, New York &middot; NY DOT T11495
          </span>
        </div>
      </footer>
    </div>
  );
}
