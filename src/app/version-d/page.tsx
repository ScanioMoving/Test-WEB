"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

/**
 * VERSION D — "NOIR"
 * UOVO art storage meets haute horlogerie dark cinema.
 *
 * Full dark mode. Cinematic full-viewport imagery.
 * Ultra-minimal text — every word earns its place.
 * Stacked immersive panels. Contemplative pacing.
 * The most dramatic and visually striking version.
 */

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

function ServicePanel({ title, desc, num, img }: { title: string; desc: string; num: string; img: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-screen flex items-center overflow-hidden">
      <div className={`absolute inset-0 transition-transform duration-[2000ms] ${visible ? "scale-100" : "scale-110"}`} style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 w-full">
        <div className={`transition-all duration-[1200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "300ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="text-[11px] tracking-[0.3em] font-light block mb-4" style={{ color: "#4A8FE7" }}>
            {num}
          </span>
          <h3
            className="text-[clamp(32px,5vw,64px)] text-white font-light leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "'Cormorant', Georgia, serif" }}
          >
            {title}
          </h3>
          <p className="text-[15px] font-light leading-[1.8] text-white/35 max-w-md">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VersionD() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.body.style.background = "#08111E";
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.body.style.background = "";
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", background: "#08111E" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@200;300;400&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }
      `}</style>

      {/* ─── NAV — Minimal wordmark only ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
          <span
            className="text-[12px] tracking-[0.7em] uppercase font-light transition-colors"
            style={{ color: scrollY > 100 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.8)" }}
          >
            Scanio
          </span>
          <Link
            href="/quote"
            className="text-[10px] tracking-[0.3em] uppercase font-light transition-colors"
            style={{ color: scrollY > 100 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.5)" }}
          >
            Inquire
          </Link>
        </div>
      </nav>

      {/* ─── HERO — Full viewport cinematic (UOVO-inspired) ─── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 animate-[slowZoom_25s_ease-out_forwards]">
          <Image
            src="/slides/slide-4.jpg"
            alt="New York"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,17,30,0.9) 0%, rgba(8,17,30,0.2) 40%, rgba(8,17,30,0.3) 100%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 w-full pb-24 md:pb-32">
          <div
            className="opacity-0 translate-y-8 animate-[fadeUp_1.5s_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          >
            <h1
              className="text-[clamp(52px,10vw,160px)] text-white font-light leading-[0.88] tracking-[-0.04em]"
              style={{ fontFamily: "'Cormorant', Georgia, serif" }}
            >
              Moving
              <br />
              <span className="text-white/30">is an art.</span>
            </h1>
          </div>
          <div
            className="opacity-0 animate-[fadeUp_1s_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] mt-8"
          >
            <p className="text-[13px] font-light tracking-[0.1em] text-white/25">
              New York &mdash; Since 1941
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 animate-[breathe_3s_ease-in-out_infinite]" style={{ background: "linear-gradient(to bottom, rgba(74,143,231,0.5), transparent)" }} />
        </div>
      </section>

      {/* ─── STATEMENT — Sparse, cinematic ─── */}
      <section className="py-44 md:py-64" style={{ background: "#08111E" }}>
        <div className="max-w-[700px] mx-auto px-8 md:px-16 text-center">
          <Reveal>
            <h2
              className="text-[clamp(28px,4vw,52px)] font-light leading-[1.35] tracking-[-0.02em] text-white/90"
              style={{ fontFamily: "'Cormorant', Georgia, serif" }}
            >
              How something is moved
              <br />
              reveals how deeply
              <br />
              it is valued.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="w-10 h-px mx-auto mt-12" style={{ background: "#4A8FE740" }} />
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICE PANELS — Full-screen stacked immersion ─── */}
      <ServicePanel
        num="01"
        title="Residential"
        desc="From Park Avenue penthouses to Brooklyn brownstones. Every home move handled with museum-grade care and attention to detail."
        img="/slides/slide-1.jpg"
      />
      <ServicePanel
        num="02"
        title="White Glove"
        desc="Fine art, antiques, Steinway concert grands, and irreplaceable collector's items. Museum-quality handling for the extraordinary."
        img="/slides/slide-2.jpg"
      />
      <ServicePanel
        num="03"
        title="Commercial"
        desc="Corporate and office relocations executed with precision, discretion, and minimal disruption to your operations."
        img="/services/commercial.jpg"
      />

      {/* ─── REMAINING SERVICES — Minimal list ─── */}
      <section className="py-32 md:py-44" style={{ background: "#08111E" }}>
        <div className="max-w-[800px] mx-auto px-8 md:px-16">
          <Reveal>
            <p className="text-[10px] tracking-[0.5em] uppercase font-light mb-16" style={{ color: "#4A8FE7" }}>
              Also
            </p>
          </Reveal>
          {[
            { title: "Long Distance", desc: "Coast-to-coast. ICC-licensed. Full insurance." },
            { title: "Packing & Crating", desc: "Archival materials. Custom solutions." },
            { title: "Private Storage", desc: "Climate-controlled. Secure. Flexible terms." },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="py-6 border-b border-white/[0.06] flex items-start justify-between gap-8 group cursor-pointer">
                <div>
                  <h3
                    className="text-[20px] font-light text-white/70 group-hover:text-white/40 transition-colors duration-500"
                    style={{ fontFamily: "'Cormorant', Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="text-[12px] font-light text-white/20 shrink-0">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE — Cinematic break ─── */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/slides/slide-3.jpg"
          alt="Cinematic"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,17,30,0.4) 0%, rgba(8,17,30,0.7) 100%)" }} />
        <div className="absolute inset-0 flex items-end pb-20 md:pb-28">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full">
            <Reveal>
              <p className="text-[13px] font-light tracking-[0.1em] text-white/30 mb-3">
                Established 1941
              </p>
              <p
                className="text-[clamp(24px,3vw,40px)] font-light text-white/60 leading-[1.3]"
                style={{ fontFamily: "'Cormorant', Georgia, serif" }}
              >
                Three generations of quiet expertise.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PROVENANCE — Dark, sparse ─── */}
      <section className="py-36 md:py-48" style={{ background: "#08111E" }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32">
            <Reveal>
              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase font-light mb-8" style={{ color: "#4A8FE7" }}>
                  Provenance
                </p>
                <p className="text-[15px] font-light leading-[2] text-white/30">
                  Founded in 1941, Scanio is one of New York&apos;s
                  longest-running family-operated moving companies.
                  Three generations have refined the standard. Our fleet
                  runs 75% on biodiesel — 90% less toxic than petroleum.
                  We recycle 100% of our packing materials.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-y-14 gap-x-10 pt-2">
                {[
                  { val: "1941", label: "Founded" },
                  { val: "80+", label: "Years" },
                  { val: "75%", label: "Biodiesel" },
                  { val: "NYC", label: "Headquartered" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-[clamp(28px,3.5vw,48px)] font-light tracking-[-0.03em] text-white/80"
                      style={{ fontFamily: "'Cormorant', Georgia, serif" }}
                    >
                      {s.val}
                    </p>
                    <p className="text-[9px] tracking-[0.4em] uppercase font-light mt-2 text-white/20">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA — Cinematic, dark ─── */}
      <section className="py-44 md:py-56 border-t border-white/[0.04]" style={{ background: "#0B1525" }}>
        <div className="max-w-[600px] mx-auto px-8 text-center">
          <Reveal>
            <h2
              className="text-[clamp(32px,5vw,56px)] font-light text-white/90 leading-[1.2] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "'Cormorant', Georgia, serif" }}
            >
              Begin.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[14px] font-light leading-[1.8] text-white/25 mb-12">
              A complimentary consultation — the first step
              toward an exceptional experience.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col items-center gap-6">
              <Link
                href="/quote"
                className="text-[10px] tracking-[0.35em] uppercase font-light px-12 py-4 border border-white/15 text-white/70 hover:bg-white hover:text-[#08111E] hover:border-white transition-all duration-500"
              >
                Request Consultation
              </Link>
              <a
                href="tel:6468638070"
                className="flex items-center gap-2 text-[11px] tracking-[0.15em] font-light text-white/15 hover:text-white/40 transition-colors"
              >
                <Phone size={12} />
                646.863.8070
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER — Ultra-minimal ─── */}
      <footer className="py-8 border-t border-white/[0.04]" style={{ background: "#08111E" }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] tracking-[0.5em] uppercase font-light text-white/20">
            Scanio Moving &amp; Storage
          </span>
          <span className="text-[10px] font-light text-white/10">
            &copy; {new Date().getFullYear()} &middot; 222 West 37th Street, New York &middot; NY DOT T11495
          </span>
        </div>
      </footer>
    </div>
  );
}
