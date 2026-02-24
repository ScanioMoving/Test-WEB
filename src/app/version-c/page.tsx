"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";

/**
 * VERSION C — "PAVILION"
 * Guggenheim institutional meets Audemars Piguet precision.
 *
 * Asymmetric split-screen compositions. Modular blocks.
 * Bold architectural structure. Sans-serif dominant.
 * The museum as metaphor — every service is an exhibition.
 */

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

export default function VersionC() {
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ─── NAV — Institutional, structured ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b" style={{ borderColor: "#E5E7EB" }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-semibold tracking-[0.3em] uppercase" style={{ color: "#0A1628" }}>
              Scanio
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase font-light" style={{ color: "#9CA3AF" }}>
              Moving &amp; Storage
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Services", "About", "Contact"].map((item) => (
              <span key={item} className="text-[11px] tracking-[0.15em] uppercase cursor-pointer font-medium hover:opacity-50 transition-opacity" style={{ color: "#0A1628" }}>
                {item}
              </span>
            ))}
            <Link
              href="/quote"
              className="text-[10px] tracking-[0.2em] uppercase font-medium px-6 py-2.5 transition-all hover:opacity-80"
              style={{ background: "#0A1628", color: "#FFFFFF" }}
            >
              Get Estimate
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO — Split-screen asymmetric (Guggenheim) ─── */}
      <section className="min-h-screen grid md:grid-cols-[1fr_1.2fr] pt-16">
        {/* Left: Text block */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-0" style={{ background: "#FAFAFA" }}>
          <div
            className="opacity-0 translate-y-8 animate-[fadeUp_1s_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase font-medium mb-8" style={{ color: "#4A8FE7" }}>
              Est. 1941
            </p>
            <h1
              className="text-[clamp(40px,6vw,80px)] leading-[1.05] tracking-[-0.03em] mb-8"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: "#0A1628" }}
            >
              The precision
              <br />
              of care.
            </h1>
            <p className="text-[15px] leading-[1.85] font-light max-w-sm mb-10" style={{ color: "#6B7280" }}>
              For over eighty years, Scanio has set the standard for
              moving in New York City. Every object, every detail,
              every time.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/quote"
                className="text-[11px] tracking-[0.25em] uppercase font-medium px-8 py-4 border-2 transition-all hover:bg-[#0A1628] hover:text-white hover:border-[#0A1628]"
                style={{ color: "#0A1628", borderColor: "#0A1628" }}
              >
                Free Estimate
              </Link>
              <a
                href="tel:6468638070"
                className="text-[12px] tracking-[0.1em] font-light hover:opacity-50 transition-opacity"
                style={{ color: "#9CA3AF" }}
              >
                646.863.8070
              </a>
            </div>
          </div>
        </div>

        {/* Right: Full image */}
        <div
          className="relative min-h-[50vh] md:min-h-0 opacity-0 animate-[fadeUp_1.2s_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        >
          <Image
            src="/slides/slide-1.jpg"
            alt="New York City"
            fill
            priority
            className="object-cover"
            sizes="60vw"
          />
        </div>
      </section>

      {/* ─── TICKER BAR — Institutional horizontal ─── */}
      <section className="py-6 border-y" style={{ borderColor: "#E5E7EB", background: "#0A1628" }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between overflow-hidden">
          {["80+ Years", "NYC Based", "75% Biodiesel", "Fully Insured", "Coast to Coast"].map((item, i) => (
            <span key={item} className="text-[10px] tracking-[0.35em] uppercase font-medium text-white/40 shrink-0 px-4 md:px-0">
              {item}
              {i < 4 && <span className="hidden md:inline text-white/15 ml-8">/</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── SERVICES — Modular exhibition blocks (Guggenheim) ─── */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase font-medium mb-4" style={{ color: "#4A8FE7" }}>
                  What We Do
                </p>
                <h2
                  className="text-[clamp(28px,4vw,48px)] tracking-[-0.02em]"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: "#0A1628" }}
                >
                  Services
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium hover:opacity-50 transition-opacity pb-2"
                style={{ color: "#0A1628" }}
              >
                View All <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>

          {/* Top row: 3 columns */}
          <div className="grid md:grid-cols-3 gap-px" style={{ background: "#E5E7EB" }}>
            {[
              { title: "Residential", desc: "Expert home moves throughout New York City and the tri-state area.", img: "/slides/slide-2.jpg" },
              { title: "Commercial", desc: "Seamless office and corporate relocations with minimal downtime.", img: "/services/commercial.jpg" },
              { title: "White Glove", desc: "Museum-grade handling for fine art, antiques, and pianos.", img: "/services/white-glove.jpg" },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="group bg-white cursor-pointer">
                  <div className="relative h-56 md:h-72 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-[18px] font-medium tracking-[-0.01em]" style={{ color: "#0A1628" }}>
                        {s.title}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "#4A8FE7" }}
                      />
                    </div>
                    <p className="text-[13px] font-light leading-relaxed" style={{ color: "#9CA3AF" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom row: 3 columns, text only */}
          <div className="grid md:grid-cols-3 gap-px mt-px" style={{ background: "#E5E7EB" }}>
            {[
              { title: "Long Distance", desc: "ICC-licensed coast-to-coast relocations with dedicated logistics and full coverage." },
              { title: "Packing & Crating", desc: "Archival-quality materials and custom crating for maximum protection." },
              { title: "Storage Solutions", desc: "Climate-controlled, secure facility with flexible month-to-month terms." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div
                  className="group bg-white p-8 md:p-10 cursor-pointer transition-colors duration-300 hover:bg-[#FAFAFA]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[18px] font-medium tracking-[-0.01em]" style={{ color: "#0A1628" }}>
                      {s.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: "#4A8FE7" }}
                    />
                  </div>
                  <p className="text-[13px] font-light leading-relaxed" style={{ color: "#9CA3AF" }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPLIT IMAGE + TEXT — Asymmetric (Guggenheim) ─── */}
      <section className="grid md:grid-cols-[1.3fr_1fr]" style={{ background: "#FAFAFA" }}>
        <div className="relative h-[50vh] md:h-auto">
          <Image
            src="/slides/slide-4.jpg"
            alt="Heritage"
            fill
            className="object-cover"
            sizes="55vw"
          />
        </div>
        <div className="flex items-center px-8 md:px-16 py-20 md:py-32">
          <Reveal>
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase font-medium mb-6" style={{ color: "#4A8FE7" }}>
                Heritage
              </p>
              <h2
                className="text-[clamp(28px,3.5vw,44px)] leading-[1.2] tracking-[-0.02em] mb-8"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: "#0A1628" }}
              >
                Three generations.
                <br />
                One standard.
              </h2>
              <p className="text-[15px] font-light leading-[1.85] mb-10" style={{ color: "#6B7280" }}>
                Founded in 1941, Scanio Moving &amp; Storage is one of
                New York&apos;s longest-running family-operated moving companies.
                Our fleet runs 75% on biodiesel, and we recycle 100% of our
                packing materials.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t" style={{ borderColor: "#E5E7EB" }}>
                {[
                  { val: "1941", label: "Founded" },
                  { val: "75%", label: "Biodiesel" },
                  { val: "NYC", label: "Based" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[28px] font-light tracking-[-0.02em]" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: "#0A1628" }}>
                      {s.val}
                    </p>
                    <p className="text-[9px] tracking-[0.3em] uppercase font-medium mt-1" style={{ color: "#9CA3AF" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CREDENTIALS BAR ─── */}
      <section className="py-20 md:py-28 bg-white border-t" style={{ borderColor: "#E5E7EB" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { val: "80+", sub: "Years of Service" },
                { val: "75%", sub: "Biodiesel Fleet" },
                { val: "90%", sub: "Less Toxic" },
                { val: "Free", sub: "E-Waste Recycling" },
              ].map((s) => (
                <div key={s.sub}>
                  <p
                    className="text-[clamp(32px,4vw,52px)] font-light tracking-[-0.02em]"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: "#0A1628" }}
                  >
                    {s.val}
                  </p>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-medium mt-3" style={{ color: "#9CA3AF" }}>
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA — Modular block ─── */}
      <section style={{ background: "#0A1628" }}>
        <div className="grid md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-[40vh] md:h-auto">
            <Image
              src="/slides/slide-3.jpg"
              alt="Moving"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          {/* Right: CTA */}
          <div className="flex items-center justify-center px-8 md:px-16 py-20 md:py-32">
            <Reveal>
              <div className="text-center md:text-left max-w-md">
                <p className="text-[10px] tracking-[0.5em] uppercase font-medium mb-8" style={{ color: "#4A8FE7" }}>
                  Start Here
                </p>
                <h2
                  className="text-[clamp(28px,3.5vw,44px)] text-white leading-[1.2] tracking-[-0.02em] mb-6"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  Ready to move?
                </h2>
                <p className="text-[15px] font-light leading-[1.85] text-white/35 mb-10">
                  A complimentary consultation is the first step.
                  Tell us about your move and we&apos;ll handle the rest.
                </p>
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-5">
                  <Link
                    href="/quote"
                    className="text-[11px] tracking-[0.25em] uppercase font-medium px-8 py-4 bg-white transition-all hover:bg-white/90"
                    style={{ color: "#0A1628" }}
                  >
                    Get Free Estimate
                  </Link>
                  <a
                    href="tel:6468638070"
                    className="flex items-center gap-2 text-[12px] tracking-[0.1em] font-light text-white/30 hover:text-white/60 transition-colors"
                  >
                    <Phone size={13} />
                    646.863.8070
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 bg-white border-t" style={{ borderColor: "#E5E7EB" }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[12px] tracking-[0.3em] uppercase font-semibold" style={{ color: "#0A1628" }}>
              Scanio
            </span>
            <span className="text-[9px] tracking-[0.15em] uppercase font-light" style={{ color: "#D1D5DB" }}>
              Moving &amp; Storage
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-light" style={{ color: "#D1D5DB" }}>
              &copy; {new Date().getFullYear()} &middot; 222 West 37th Street, New York
            </span>
            <span className="text-[10px] font-light" style={{ color: "#D1D5DB" }}>
              NY DOT T11495 &middot; ICC MC93512
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
