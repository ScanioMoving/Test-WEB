"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ArrowDown } from "lucide-react";

/**
 * VERSION A — "ATELIER"
 * Inspired by Loro Piana, The Row, Bottega Veneta
 *
 * Warm minimalism. Cashmere tones. Serif headlines.
 * The luxury is in the silence between elements.
 */

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

export default function VersionA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.background = "#F5F8FC";
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight - 160);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.body.style.background = "";
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
      window.removeEventListener("scroll", handleScroll);
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
        @keyframes lineGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
      `}</style>

      {/* ─── NAV — Large header, solid bg after hero ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          height: 150,
          background: scrolled ? "#F5F8FC" : "transparent",
          mixBlendMode: scrolled ? "normal" : "difference",
          boxShadow: scrolled ? "0 1px 0 #D6E0ED" : "none",
        }}
      >
        <div className="w-full px-10 md:px-12 h-full flex items-center justify-between">
          <Link href="/" className="flex flex-col shrink-0 items-start">
            <span
              className="text-[56px] md:text-[72px] font-semibold tracking-[0.02em] uppercase leading-none transition-colors duration-500"
              style={{ color: scrolled ? "#0B5DB5" : "white" }}
            >
              Scanio
            </span>
            <span
              className="text-[13px] tracking-[0.02em] uppercase font-normal transition-colors duration-500 mt-1"
              style={{ color: scrolled ? "#4A5568" : "rgba(255,255,255,0.65)" }}
            >
              Moving &amp; Storage &mdash; Since 1941
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-12">
            {["Services", "About", "Contact"].map((item) => (
              <span
                key={item}
                className="text-[16px] tracking-[0.15em] uppercase font-medium cursor-pointer hover:opacity-100 transition-all duration-500"
                style={{ color: scrolled ? "#0B5DB5" : "white", opacity: scrolled ? 0.85 : 0.6 }}
              >
                {item}
              </span>
            ))}
            <span
              className="text-[16px] tracking-[0.1em] uppercase font-medium cursor-pointer hover:opacity-100 transition-all duration-500"
              style={{ color: scrolled ? "#0B5DB5" : "white", opacity: scrolled ? 0.85 : 0.6 }}
            >
              Inquire
            </span>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/slides/slide-1.jpg"
            alt="New York City"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full">
          <Reveal>
            <h1 className="text-[clamp(48px,8vw,120px)] text-white font-light leading-[0.95] tracking-[-0.02em] mb-8">
              The Art of
              <br />
              Moving
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex items-center gap-8">
              <Link
                href="/quote"
                className="text-white text-[12px] tracking-[0.3em] uppercase font-sans border-b border-white/40 pb-1 hover:border-white transition-colors"
              >
                Request Consultation
              </Link>
              <a
                href="tel:6468638070"
                className="text-white/50 text-[12px] tracking-[0.2em] font-sans hover:text-white transition-colors"
              >
                646.863.8070
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-[fadeIn_1s_1.5s_forwards]">
          <ArrowDown size={16} className="text-white/30" />
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-36 md:py-48" style={{ background: "#F5F8FC" }}>
        <div className="max-w-[900px] mx-auto px-8 text-center relative">
          {/* Open quote — left side */}
          <span
            className="absolute left-4 md:left-[-10px] top-0 text-[100px] md:text-[160px] font-light leading-none select-none"
            style={{ color: "#0B5DB5", opacity: 0.12 }}
          >
            &ldquo;
          </span>
          {/* Close quote — right side */}
          <span
            className="absolute right-4 md:right-[-10px] top-0 text-[100px] md:text-[160px] font-light leading-none select-none"
            style={{ color: "#0B5DB5", opacity: 0.12 }}
          >
            &rdquo;
          </span>

          <h2 className="text-[clamp(28px,4vw,52px)] font-light leading-[1.25] tracking-[-0.01em] mb-6" style={{ color: "#0A1628" }}>
            How something is moved
            says everything about how it is valued.
          </h2>

          <p className="text-[15px] font-medium tracking-[0.1em] uppercase text-right pr-4 md:pr-16" style={{ color: "#0B5DB5" }}>
            &mdash; Nir Shuminer
          </p>

          <p className="text-[17px] font-sans leading-relaxed max-w-xl mx-auto mt-10" style={{ color: "#6B7B8D" }}>
            For over eighty years, Scanio Moving &amp; Storage has understood
            that every object carries meaning beyond its material. Our work
            is to honor that meaning with care, precision, and quiet expertise.
          </p>
        </div>
      </section>

      {/* ─── SERVICES — Image blocks from Version E ─── */}
      <section style={{ background: "#F5F8FC" }}>
        <div className="px-10 md:px-12 py-10 border-b text-center" style={{ borderColor: "#D6E0ED" }}>
          <h2 className="text-[13px] uppercase font-bold tracking-[0.1em]" style={{ color: "#0B5DB5" }}>
            Our Services
          </h2>
        </div>

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

      {/* ─── HERITAGE — From Version E ─── */}
      <section className="py-24 md:py-32" style={{ background: "#F5F8FC" }}>
        <div className="max-w-[1200px] mx-auto px-10 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <Reveal>
              <div>
                <p className="text-[11px] uppercase font-bold tracking-[0.15em] mb-6" style={{ color: "#0B5DB5" }}>
                  Since 1941
                </p>
                <h2 className="text-[clamp(26px,3vw,42px)] font-bold leading-[1.2] tracking-[-0.02em] mb-6" style={{ color: "#0A1628" }}>
                  Three Generations
                  of New York Expertise
                </h2>
                <p className="text-[15px] font-light leading-[1.85] mb-6" style={{ color: "#6B7B8D" }}>
                  Founded in 1941, Scanio is a premier and highly reputable
                  New York City based moving and storage company. We handle
                  each and every move with care, planning and executing the
                  transport of your belongings so that your transition from
                  one space to the next is seamless.
                </p>
                <p className="text-[15px] font-light leading-[1.85]" style={{ color: "#6B7B8D" }}>
                  With over seven decades of operational experience in the
                  New York metropolitan area, our expertise in detailed
                  logistics is unmatched.
                </p>
                <div className="flex gap-10 pt-8 mt-8 border-t" style={{ borderColor: "#D6E0ED" }}>
                  {[
                    { val: "80+", label: "Years" },
                    { val: "75%", label: "Biodiesel" },
                    { val: "NYC", label: "Based" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-[32px] font-bold tracking-[-0.02em]" style={{ color: "#0A1628" }}>
                        {s.val}
                      </p>
                      <p className="text-[10px] uppercase font-semibold tracking-[0.15em] mt-1" style={{ color: "#A3B3C6" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-sm h-full min-h-[350px]" style={{ background: "#F0ECE6" }}>
                <Image
                  src="/vintage-trucks.jpg"
                  alt="Vintage Scanio Moving trucks"
                  fill
                  className="object-cover mix-blend-multiply"
                  style={{ objectPosition: "center 52%", transform: "scaleX(1.02) scaleY(1.15)" }}
                  sizes="50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-36 md:py-48 border-t" style={{ borderColor: "#D6E0ED", background: "#EBF1F8" }}>
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] font-light leading-[1.2] tracking-[-0.01em] mb-8" style={{ color: "#0A1628" }}>
            Every exceptional move
            <br />
            begins with a conversation.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link
              href="/quote"
              className="text-[12px] tracking-[0.3em] uppercase font-sans px-10 py-4 border transition-all"
              style={{ color: "#0A1628", borderColor: "#0F1D2F" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0F1D2F"; e.currentTarget.style.color = "#F5F8FC"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0F1D2F"; }}
            >
              Request Consultation
            </Link>
            <a
              href="tel:6468638070"
              className="flex items-center gap-2 text-[13px] tracking-[0.2em] font-sans transition-opacity hover:opacity-60"
              style={{ color: "#6B7B8D" }}
            >
              <Phone size={14} />
              646.863.8070
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="pt-16 pb-10 border-t" style={{ borderColor: "#D6E0ED", background: "#0A1628" }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 mb-14">
            {/* Brand + Licensed */}
            <div>
              <p className="text-white text-[28px] font-semibold tracking-[0.02em] uppercase leading-none mb-1">
                Scanio
              </p>
              <p className="text-white/50 text-[13px] font-light mb-4">
                Moving &amp; Storage
              </p>
              <p className="text-[15px] font-medium leading-[1.8] text-white/50 mt-6">
                NY DOT T11495<br />
                ICC MC93512<br />
                NJ 39PC00099002
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] uppercase font-bold tracking-[0.15em] mb-5" style={{ color: "#0B5DB5" }}>
                Services
              </p>
              <ul className="space-y-2">
                {["Residential Moving", "Commercial Moving", "Long Distance", "White Glove", "Packing", "Storage"].map((item) => (
                  <li key={item} className="text-[13px] font-light text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[11px] uppercase font-bold tracking-[0.15em] mb-5" style={{ color: "#0B5DB5" }}>
                Company
              </p>
              <ul className="space-y-2">
                {["About", "Testimonials", "Free Estimate", "Contact"].map((item) => (
                  <li key={item} className="text-[13px] font-light text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] uppercase font-bold tracking-[0.15em] mb-5" style={{ color: "#0B5DB5" }}>
                Contact
              </p>
              <ul className="space-y-2 text-[13px] font-light text-white/40">
                <li><a href="tel:6468638070" className="hover:text-white/70 transition-colors">646.863.8070</a></li>
                <li><a href="mailto:info@scaniomoving.com" className="hover:text-white/70 transition-colors">info@scaniomoving.com</a></li>
                <li>222 West 37th Street</li>
                <li>New York, NY 10018</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[11px] font-light text-white/20">
              &copy; {new Date().getFullYear()} Scanio Moving &amp; Storage. All rights reserved.
            </span>
            <span className="text-[11px] font-light text-white/20">
              NY DOT T11495 &middot; ICC MC93512 &middot; NJ 39PC00099002
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
