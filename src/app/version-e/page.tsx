"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

/**
 * VERSION E — "UOVO"
 * Direct UOVO.art copy. Big solid-color header using Scanio truck blue.
 *
 * 105px fixed header in Scanio's heritage blue (#0B5DB5).
 * Hero fills remaining viewport. Bottom-left text at 4vw.
 * Full-width content blocks. Manrope/sans-serif. All-caps nav.
 * Institutional confidence. The header IS the brand.
 */

const HEADER_H = 130;
const SCANIO_BLUE = "#0B5DB5";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
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

export default function VersionE() {
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
    <div style={{ fontFamily: "'Manrope', 'Inter', 'Helvetica Neue', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');

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

      {/* ─── BIG HEADER — UOVO direct copy, Scanio truck blue ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center"
        style={{ height: HEADER_H, background: SCANIO_BLUE }}
      >
        <div className="w-full px-10 md:px-12 flex items-center justify-between">
          {/* Logo — left, large like UOVO */}
          <Link href="/" className="flex items-center gap-4 shrink-0">
            <span className="text-white text-[52px] md:text-[68px] font-bold tracking-[0.06em] uppercase leading-none">
              Scanio
            </span>
            <span className="hidden lg:block text-white/65 text-[24px] tracking-[0.06em] uppercase font-bold leading-none">
              1941
            </span>
          </Link>

          {/* Nav — right, uppercase, white, UOVO-style */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {["Services", "About", "Storage", "Contact"].map((item) => (
              <span
                key={item}
                className="text-white text-[14px] lg:text-[16px] uppercase font-medium cursor-pointer hover:text-white/60 transition-colors tracking-[0.02em]"
              >
                {item}
              </span>
            ))}
            <a
              href="tel:6468638070"
              className="text-white text-[14px] lg:text-[16px] uppercase font-medium hover:text-white/60 transition-colors tracking-[0.02em]"
            >
              646.863.8070
            </a>
          </div>

          {/* Mobile hamburger placeholder */}
          <div className="md:hidden flex flex-col gap-[5px] cursor-pointer">
            <div className="w-[22px] h-[2px] bg-white" />
            <div className="w-[22px] h-[2px] bg-white" />
            <div className="w-[16px] h-[2px] bg-white" />
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: HEADER_H }} />

      {/* ─── HERO — fills viewport minus header, UOVO layout ─── */}
      <section
        className="relative overflow-hidden"
        style={{ height: `calc(100svh - ${HEADER_H}px)` }}
      >
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
        {/* Bottom gradient — UOVO style: transparent to 50% black on bottom 70% */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)" }}
        />

        {/* Bottom-left text — UOVO positioning */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-10 md:p-12">
          <div className="max-w-[40%] min-w-[300px]">
            <div className="opacity-0 translate-y-6 animate-[fadeUp_1s_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              <h1
                className="text-white font-bold leading-[1.15] tracking-[-0.02em] mb-5"
                style={{ fontSize: "clamp(28px, 4vw, 64px)" }}
              >
                New York&apos;s Premier
                Moving &amp; Storage
              </h1>
            </div>
            <div className="opacity-0 animate-[fadeUp_1s_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              <p className="text-white/50 text-[15px] md:text-[17px] font-light leading-relaxed mb-8 max-w-md">
                Over eighty years of precision, care, and unmatched
                expertise in the art of relocation.
              </p>
            </div>
            <div className="opacity-0 animate-[fadeUp_1s_1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              <Link
                href="/quote"
                className="inline-block text-[13px] uppercase font-semibold tracking-[0.05em] text-white border-b-2 border-white pb-1 hover:text-white/60 hover:border-white/60 transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES — Full-width blocks like UOVO categories ─── */}
      <section className="bg-white">
        {/* Section header */}
        <div className="px-10 md:px-12 py-10 border-b" style={{ borderColor: "#E8E8E8" }}>
          <h2 className="text-[13px] uppercase font-bold tracking-[0.1em]" style={{ color: "#0B5DB5" }}>
            Our Services
          </h2>
        </div>

        {/* Large image service cards — UOVO exhibition style */}
        <div className="grid md:grid-cols-2">
          {[
            { title: "Residential Moving", desc: "From Park Avenue penthouses to Brooklyn brownstones. Every home move handled with museum-grade care.", img: "/slides/slide-2.jpg" },
            { title: "Commercial Moving", desc: "Corporate and office relocations executed with precision, discretion, and minimal disruption.", img: "/services/commercial.jpg" },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link href="/services" className="group block relative overflow-hidden cursor-pointer">
                <div className="relative h-[45vh] md:h-[55vh]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-[1000ms] group-hover:scale-[1.04]"
                    sizes="50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <h3 className="text-white text-[22px] md:text-[28px] font-bold tracking-[-0.01em] mb-2 uppercase">
                      {s.title}
                    </h3>
                    <p className="text-white/50 text-[14px] font-light leading-relaxed max-w-sm">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Smaller service row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { title: "White Glove", desc: "Fine art, antiques, pianos. Museum-quality care.", img: "/services/white-glove-v2.jpg" },
            { title: "Long Distance", desc: "Coast-to-coast. ICC-licensed. Fully insured.", img: "/services/long-distance.jpg" },
            { title: "Packing", desc: "Archival materials. Custom crating.", img: "/slides/slide-3.jpg" },
            { title: "Storage", desc: "Climate-controlled. Secure. Flexible.", img: "/services/storage.jpg" },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative overflow-hidden cursor-pointer">
                <div className="relative h-[30vh] md:h-[35vh]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.05]"
                    sizes="25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-white text-[15px] md:text-[18px] font-bold tracking-[0.01em] uppercase mb-1">
                      {s.title}
                    </h3>
                    <p className="text-white/40 text-[12px] font-light leading-relaxed hidden md:block">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── ABOUT / HERITAGE + GREEN — Full-width, no image ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-10 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Heritage */}
            <Reveal>
              <div>
                <p className="text-[11px] uppercase font-bold tracking-[0.15em] mb-6" style={{ color: SCANIO_BLUE }}>
                  Since 1941
                </p>
                <h2 className="text-[clamp(26px,3vw,42px)] font-bold leading-[1.2] tracking-[-0.02em] mb-6" style={{ color: "#1A1A1A" }}>
                  Three Generations
                  of New York Expertise
                </h2>
                <p className="text-[15px] font-light leading-[1.85] mb-6" style={{ color: "#6B6B6B" }}>
                  Founded in 1941, Scanio is a premier and highly reputable
                  New York City based moving and storage company. We handle
                  each and every move with care, planning and executing the
                  transport of your belongings so that your transition from
                  one space to the next is seamless.
                </p>
                <p className="text-[15px] font-light leading-[1.85]" style={{ color: "#6B6B6B" }}>
                  With over seven decades of operational experience in the
                  New York metropolitan area, our expertise in detailed
                  logistics is unmatched.
                </p>
                <div className="flex gap-10 pt-8 mt-8 border-t" style={{ borderColor: "#E8E8E8" }}>
                  {[
                    { val: "80+", label: "Years" },
                    { val: "75%", label: "Biodiesel" },
                    { val: "NYC", label: "Based" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-[32px] font-bold tracking-[-0.02em]" style={{ color: "#1A1A1A" }}>
                        {s.val}
                      </p>
                      <p className="text-[10px] uppercase font-semibold tracking-[0.15em] mt-1" style={{ color: "#ABABAB" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: Green Initiative + Licenses */}
            <div className="flex flex-col gap-12">
              <Reveal delay={150}>
                <div className="p-8 md:p-10" style={{ background: "#F5F8F5", borderLeft: `3px solid ${SCANIO_BLUE}` }}>
                  <p className="text-[11px] uppercase font-bold tracking-[0.15em] mb-4" style={{ color: SCANIO_BLUE }}>
                    Green Initiative
                  </p>
                  <p className="text-[15px] font-light leading-[1.85] mb-4" style={{ color: "#6B6B6B" }}>
                    Biodiesel fuel is approximately 90% less toxic than petroleum
                    diesel. We use it in 75% of our fleet. We also use recycled
                    cardboard boxes, biodegradable packing materials, and offer
                    free e-waste recycling for NYC residents.
                  </p>
                  <p className="text-[13px] font-medium" style={{ color: "#1A1A1A" }}>
                    We care deeply about our impact on our community
                    and on the world at large.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="p-8 md:p-10 border" style={{ borderColor: "#E8E8E8" }}>
                  <p className="text-[11px] uppercase font-bold tracking-[0.15em] mb-5" style={{ color: SCANIO_BLUE }}>
                    Licensed &amp; Insured
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "NY DOT", val: "T11495" },
                      { label: "ICC", val: "MC93512" },
                      { label: "Address", val: "222 W 37th St, NYC" },
                      { label: "Phone", val: "646.863.8070" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="text-[10px] uppercase font-semibold tracking-[0.15em] mb-1" style={{ color: "#ABABAB" }}>
                          {s.label}
                        </p>
                        <p className="text-[15px] font-medium" style={{ color: "#1A1A1A" }}>
                          {s.val}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS BAR — Scanio blue background ─── */}
      <section className="py-16 md:py-20" style={{ background: SCANIO_BLUE }}>
        <div className="max-w-[1200px] mx-auto px-10 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { val: "1941", label: "Established" },
              { val: "Full", label: "Insurance" },
              { val: "Free", label: "E-Waste Recycling" },
              { val: "ICC", label: "MC93512" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-[-0.02em] text-white">
                  {s.val}
                </p>
                <p className="text-[10px] uppercase font-semibold tracking-[0.2em] text-white/40 mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — Clean, direct ─── */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[700px] mx-auto px-10 md:px-12 text-center">
          <Reveal>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ color: "#1A1A1A" }}>
              Ready to Move?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-[16px] font-light leading-relaxed mb-10" style={{ color: "#6B6B6B" }}>
              Get a complimentary, no-obligation estimate.
              We&apos;ll take care of everything.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/quote"
                className="text-[14px] uppercase font-bold tracking-[0.05em] px-10 py-4 text-white transition-all hover:opacity-90"
                style={{ background: SCANIO_BLUE }}
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:6468638070"
                className="flex items-center gap-2 text-[14px] font-medium hover:opacity-60 transition-opacity"
                style={{ color: "#1A1A1A" }}
              >
                <Phone size={16} />
                646.863.8070
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER — UOVO-style dark ─── */}
      <footer className="py-12 md:py-16" style={{ background: "#1A1A1A" }}>
        <div className="px-10 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
            <span className="text-white text-[22px] font-bold tracking-[0.08em] uppercase">
              Scanio
            </span>
            <div className="flex flex-wrap gap-6 md:gap-8">
              {["Services", "About", "Storage", "Contact", "Estimate"].map((item) => (
                <span key={item} className="text-white/50 text-[13px] uppercase font-medium cursor-pointer hover:text-white transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-white/30">
              &copy; {new Date().getFullYear()} Scanio Moving &amp; Storage. All rights reserved.
            </p>
            <p className="text-[12px] text-white/30">
              222 West 37th Street, New York &middot; NY DOT T11495 &middot; ICC MC93512
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
