"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowDown, ChevronDown, ChevronLeft, ChevronRight, Menu, X, ExternalLink } from "lucide-react";

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

const testimonials = [
  {
    quote: "How something is moved says everything about how it is valued.",
    author: "Nir Shuminer",
  },
  {
    quote: "The team accomplished the job with amazing efficiency. Zero damage, and all furniture was properly reassembled. I couldn't have asked for a better experience.",
    author: "Bruce Bogart",
  },
  {
    quote: "Everyone knew what they were doing and maintained a sense of good humor throughout. We couldn't be happier.",
    author: "Nina Hennessey & Ellen Saland",
  },
  {
    quote: "We do not have a single horror story concerning our move. That alone says volumes. Everything arrived in perfect condition.",
    author: "Louis Stamm",
  },
  {
    quote: "From start to finish, the move was a total success. The team's professional approach made what could have been stressful into a pleasant experience.",
    author: "Steven N. Gordon",
  },
  {
    quote: "Having used Scanio both personally and as a vendor, I give them my highest recommendation. The consistency of their service quality is truly impressive.",
    author: "David L. Reni",
  },
];

const TRUCK_FRAME_COUNT = 240;

function TruckScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Preload frames
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let done = 0;

    for (let i = 0; i < TRUCK_FRAME_COUNT; i++) {
      const img = new window.Image();
      const n = String(i + 1).padStart(3, "0");
      const finish = () => {
        done++;
        if (!cancelled) setLoaded(done);
      };
      img.onload = finish;
      img.onerror = finish;
      img.src = `/truck-sequence/ezgif-frame-${n}.jpg`;
      // if cached, onload may have fired before we attached — handle synchronously
      if (img.complete && img.naturalWidth > 0) {
        done++;
      }
      images.push(img);
    }
    imagesRef.current = images;
    if (done > 0) setLoaded(done);

    return () => { cancelled = true; };
  }, []);

  // Redraw whenever a new frame has loaded (so first frame shows without scrolling)
  useEffect(() => {
    if (loaded > 0) draw(scrollProgress);
  }, [loaded, draw, scrollProgress]);

  // Draw frame based on scroll progress
  const draw = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const target = Math.min(
      TRUCK_FRAME_COUNT - 1,
      Math.max(0, Math.floor(progress * (TRUCK_FRAME_COUNT - 1)))
    );
    // If target frame isn't loaded yet, walk outward to nearest ready frame
    let img = imagesRef.current[target];
    if (!img || !img.complete || img.naturalWidth === 0) {
      let found: HTMLImageElement | null = null;
      for (let d = 1; d < TRUCK_FRAME_COUNT; d++) {
        const a = imagesRef.current[target - d];
        if (a && a.complete && a.naturalWidth > 0) { found = a; break; }
        const b = imagesRef.current[target + d];
        if (b && b.complete && b.naturalWidth > 0) { found = b; break; }
      }
      if (!found) return;
      img = found;
    }

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Size canvas to viewport (and redraw)
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      draw(scrollProgress);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [draw, scrollProgress]);

  // Scroll handler
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -rect.top / total));
        setScrollProgress(progress);
        draw(progress);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [draw]);

  const loadPct = Math.round((loaded / TRUCK_FRAME_COUNT) * 100);
  const ready = loaded >= Math.min(20, TRUCK_FRAME_COUNT); // need at least first ~20 frames to start
  const textOpacity = Math.max(0, (scrollProgress - 0.7) / 0.3); // reveal in last 30%

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden" style={{ background: "#0A1628" }}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Loading overlay */}
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#0A1628" }}>
            <div className="text-center">
              <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase mb-3">Loading</p>
              <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-white/60 transition-all duration-200"
                  style={{ width: `${loadPct}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Dark gradient at bottom for text */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

        {/* Hero text — reveals near end of scroll */}
        <div
          className="absolute inset-x-0 bottom-[18vh] md:bottom-24 z-10 px-8 md:px-16 transition-opacity duration-500"
          style={{ opacity: textOpacity }}
        >
          <div className="flex flex-col gap-5">
            <a
              href="tel:6468638070"
              className="text-white/50 text-[clamp(14px,2vw,18px)] tracking-[0.2em] font-light hover:text-white transition-colors"
            >
              646.863.8070
            </a>
            <Link
              href="/quote"
              className="text-white text-[clamp(16px,2.5vw,22px)] tracking-[0.3em] uppercase font-semibold border-t border-white/30 pt-5 hover:border-white transition-all w-fit"
            >
              Request Consultation
            </Link>
          </div>
        </div>

        {/* Scroll hint — hides once scrolled past 10% */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500"
          style={{ opacity: scrollProgress < 0.1 ? 1 : 0 }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </div>
      </div>
    </section>
  );
}

const heroSlides = [
  { src: "/slides/slide-2-cycle.jpg", alt: "NYC skyline" },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  function goTo(index: number) {
    setFade(false);
    setTimeout(() => { setCurrent(index); setFade(true); }, 300);
  }

  function goPrev() {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }

  function goNext() {
    goTo((current + 1) % testimonials.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-36 md:py-48" style={{ background: "#F5F8FC" }}>
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 text-center relative">
        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="absolute left-0 md:left-[-20px] top-1/2 -translate-y-1/2 p-2 transition-opacity hover:opacity-60"
          style={{ color: "#0B5DB5" }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="absolute right-0 md:right-[-20px] top-1/2 -translate-y-1/2 p-2 transition-opacity hover:opacity-60"
          style={{ color: "#0B5DB5" }}
          aria-label="Next testimonial"
        >
          <ChevronRight size={28} />
        </button>

        <div className="max-w-[900px] mx-auto relative">
          <span
            className="absolute left-4 md:left-[-10px] top-0 text-[100px] md:text-[160px] font-light leading-none select-none"
            style={{ color: "#0B5DB5", opacity: 0.12 }}
          >
            &ldquo;
          </span>
          <span
            className="absolute right-4 md:right-[-10px] top-0 text-[100px] md:text-[160px] font-light leading-none select-none"
            style={{ color: "#0B5DB5", opacity: 0.12 }}
          >
            &rdquo;
          </span>

          {/* Fixed height container so quotes don't shift layout */}
          <div className="min-h-[220px] md:min-h-[200px] flex flex-col justify-center">
            <div
              className="transition-opacity duration-400"
              style={{ opacity: fade ? 1 : 0.15 }}
            >
              <h2
                className="text-[clamp(24px,3.5vw,44px)] font-light leading-[1.3] tracking-[-0.01em] mb-6"
                style={{ color: "#0A1628" }}
              >
                {testimonials[current].quote}
              </h2>

              <p
                className="text-[15px] font-medium tracking-[0.1em] uppercase text-right pr-4 md:pr-16"
                style={{ color: "#0B5DB5" }}
              >
                &mdash; {testimonials[current].author}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === current ? "#0B5DB5" : "#D6E0ED",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const [servicesBtnCenter, setServicesBtnCenter] = useState(0);

  function handleServiceEnter() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  }

  function handleServiceLeave() {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 200);
  }

  useEffect(() => {
    if (servicesOpen && servicesBtnRef.current) {
      const rect = servicesBtnRef.current.getBoundingClientRect();
      setServicesBtnCenter(rect.left + rect.width / 2);
    }
  }, [servicesOpen]);

  useEffect(() => {
    document.body.style.background = "#F5F8FC";

    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 2 - 160);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.body.style.background = "";
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
        className="fixed top-0 left-0 right-0 z-50"
        style={{ mixBlendMode: (!scrolled && !mobileOpen) ? "difference" : "normal" }}
        onMouseLeave={handleServiceLeave}
      >
        <div
          className="transition-all duration-500"
          style={{
            height: 150,
            background: scrolled ? "#F5F8FC" : "transparent",
            boxShadow: scrolled && !servicesOpen ? "0 1px 0 #D6E0ED" : "none",
          }}
        >
          <div className="w-full px-10 md:px-12 h-full flex items-center justify-between">
            <Link href="/" className="flex shrink-0 items-center gap-4">
              <div
                className="block shrink-0 transition-all duration-500 h-[60px] md:h-[75px] aspect-[1217/1561] translate-y-[1px] md:translate-y-[2px]"
                style={{
                  background: scrolled ? "#0B5DB5" : "white",
                  WebkitMaskImage: "url(/scanio-s-knockout-white.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url(/scanio-s-knockout-white.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
              <div className="flex flex-col justify-center items-start" style={{ transform: "translateY(var(--logoTextOffsetY, 0px))" }}>
                <span
                  className="block text-[56px] md:text-[72px] font-semibold tracking-[0.02em] uppercase transition-colors duration-500"
                  style={{ color: scrolled ? "#0B5DB5" : "white", lineHeight: "0.85", margin: 0, marginLeft: "-3px", padding: 0 }}
                >
                  Scanio
                </span>
                <span
                  className="block text-[13px] tracking-[0.02em] uppercase font-normal transition-colors duration-500"
                  style={{ color: scrolled ? "#4A5568" : "rgba(255,255,255,0.65)", lineHeight: "1", marginTop: "4px" }}
                >
                  Moving &amp; Storage &mdash; Since 1941
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              <Link
                href="/about"
                className="text-[16px] tracking-[0.15em] uppercase font-semibold hover:opacity-100 transition-all duration-500"
                style={{ color: scrolled ? "#0B5DB5" : "white", opacity: scrolled ? 0.85 : 1 }}
              >
                About Us
              </Link>

              <a
                href="https://designers.scaniomoving.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[16px] tracking-[0.15em] uppercase font-semibold hover:opacity-100 transition-all duration-500"
                style={{ color: scrolled ? "#0B5DB5" : "white", opacity: scrolled ? 0.85 : 1 }}
              >
                Designer Portal
                <ExternalLink size={12} className="opacity-50" />
              </a>

              <div
                className="relative"
                onMouseEnter={handleServiceEnter}
                onMouseLeave={handleServiceLeave}
              >
                <button
                  ref={servicesBtnRef}
                  className="flex items-center gap-1.5 text-[16px] tracking-[0.15em] uppercase font-semibold hover:opacity-100 transition-all duration-500"
                  style={{ color: scrolled ? "#0B5DB5" : "white", opacity: scrolled ? 0.85 : 1 }}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300"
                    style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {/* Services dropdown */}
                <div
                  className="absolute top-full pt-3 transition-all duration-300"
                  style={{
                    left: "50%",
                    opacity: servicesOpen ? 1 : 0,
                    transform: servicesOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-6px)",
                    pointerEvents: servicesOpen ? "auto" : "none",
                  }}
                >
                  <div
                    className="min-w-[200px] py-3 px-6"
                    style={scrolled ? {
                      background: "#F5F8FC",
                    } : {}}
                  >
                    {[
                      { name: "Residential", href: "/services/residential" },
                      { name: "Commercial", href: "/services/commercial" },
                      { name: "Long Distance", href: "/services/long-distance" },
                      { name: "International", href: "/services/international" },
                      { name: "Storage", href: "/storage" },
                      { name: "FF&E / Designer", href: "/services/ffe-designer" },
                    ].map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block py-2 text-[12px] tracking-[0.1em] uppercase font-medium text-center transition-all duration-300"
                        style={{ color: scrolled ? "rgba(11,93,181,0.5)" : "rgba(255,255,255,0.5)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = scrolled ? "#0B5DB5" : "rgba(255,255,255,1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = scrolled ? "rgba(11,93,181,0.5)" : "rgba(255,255,255,0.5)"; }}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

              <Link
                href="/contact"
                className="text-[16px] tracking-[0.15em] uppercase font-semibold hover:opacity-100 transition-all duration-500"
                style={{ color: scrolled ? "#0B5DB5" : "white", opacity: scrolled ? 0.85 : 1 }}
              >
                Contact
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 transition-colors duration-500"
              style={{ color: scrolled ? "#0B5DB5" : "white" }}
              onClick={() => { setMobileOpen(!mobileOpen); setServicesOpen(false); }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t overflow-y-auto"
            style={{ background: "#F5F8FC", borderColor: "#D6E0ED", height: "calc(100vh - 150px)" }}
          >
            <div className="px-10 py-8 space-y-1 flex flex-col h-full">
              <Link
                href="/about"
                className="block py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
                style={{ color: "#0A1628" }}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
              <a
                href="https://designers.scaniomoving.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
                style={{ color: "#0A1628" }}
                onClick={() => setMobileOpen(false)}
              >
                Designer Portal
                <ExternalLink size={13} className="opacity-40" />
              </a>

              {/* Mobile services accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
                  style={{ color: "#0A1628" }}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300"
                    style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-5 pb-2 space-y-0.5">
                    {[
                      { name: "Residential", href: "/services/residential" },
                      { name: "Commercial", href: "/services/commercial" },
                      { name: "Long Distance", href: "/services/long-distance" },
                      { name: "International", href: "/services/international" },
                      { name: "Storage", href: "/storage" },
                      { name: "FF&E / Designer", href: "/services/ffe-designer" },
                    ].map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block py-2.5 text-[13px] tracking-[0.05em] font-light"
                        style={{ color: "#6B7B8D" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
                style={{ color: "#0A1628" }}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 mt-auto border-t" style={{ borderColor: "#D6E0ED" }}>
                <Link
                  href="/quote"
                  className="block text-center text-[12px] tracking-[0.3em] uppercase font-medium px-8 py-4 border transition-all"
                  style={{ color: "#0A1628", borderColor: "#0F1D2F" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Request Consultation
                </Link>
                <a
                  href="tel:6468638070"
                  className="flex items-center justify-center gap-2 mt-4 text-[13px] tracking-[0.15em]"
                  style={{ color: "#6B7B8D" }}
                >
                  <Phone size={14} />
                  646.863.8070
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO — Scroll-driven truck sequence ─── */}
      <TruckScrollHero />

      {/* ─── TESTIMONIALS ─── */}
      <TestimonialCarousel />

      {/* ─── SERVICES — Image blocks from Version E ─── */}
      <section style={{ background: "#F5F8FC" }}>
        <div className="px-10 md:px-12 py-10 border-b text-center" style={{ borderColor: "#D6E0ED" }}>
          <h2 className="text-[13px] uppercase font-bold tracking-[0.1em]" style={{ color: "#0B5DB5" }}>
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          {[
            { title: "Residential Moving", desc: "From Park Avenue penthouses to Brooklyn brownstones. Every home move handled with museum-grade care.", img: "/services/residential-truck.jpg", href: "/services/residential" },
            { title: "Storage", desc: "Climate-controlled. Secure. Flexible terms for any timeline.", img: "/services/storage.jpg", href: "/storage" },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link href={s.href} className="group block relative overflow-hidden cursor-pointer">
                <div className="relative h-[45vh] md:h-[55vh]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    quality={95}
                    className="object-cover transition-transform duration-[1000ms] group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <h3 className="text-white text-[22px] md:text-[28px] font-bold tracking-[-0.01em] uppercase">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { title: "FF&E / Designer", desc: "Fine art, antiques, pianos. Museum-quality care.", img: "/services/ffe-vase.jpg", href: "/services/ffe-designer" },
            { title: "Long Distance", desc: "Coast-to-coast. ICC-licensed. Fully insured.", img: "/services/long-distance.jpg", href: "/services/long-distance" },
            { title: "International", desc: "Global relocations. Customs handled. Door to door.", img: "/services/international.jpg", href: "/services/international" },
            { title: "Commercial", desc: "Corporate and office relocations with precision.", img: "/services/commercial-lobby.jpg", href: "/services/commercial" },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link href={s.href} className="group block relative overflow-hidden cursor-pointer">
                <div className="relative h-[30vh] md:h-[35vh]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    quality={95}
                    className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-white text-[15px] md:text-[18px] font-bold tracking-[0.01em] uppercase">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </Link>
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
                  quality={95}
                  className="object-cover mix-blend-multiply"
                  style={{ objectPosition: "center 52%", transform: "scaleX(1.02) scaleY(1.15)" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
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
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/scanio-s-navy.png"
                  alt="Scanio S logo"
                  width={40}
                  height={51}
                  className="w-[40px]"
                />
                <div>
                  <p className="text-white text-[28px] font-semibold tracking-[0.02em] uppercase leading-none mb-1">
                    Scanio
                  </p>
                  <p className="text-white/50 text-[13px] font-light">
                    Moving &amp; Storage
                  </p>
                </div>
              </div>
              <div className="mt-6 border border-white/10 p-5 space-y-1">
                <p className="text-[10px] uppercase font-semibold tracking-[0.15em] text-white/30 mb-3">
                  Licensed &amp; Insured
                </p>
                <p className="text-[16px] font-semibold text-white/70">NY DOT T11495</p>
                <p className="text-[16px] font-semibold text-white/70">ICC MC93512</p>
                <p className="text-[16px] font-semibold text-white/70">NJ 39PC00099002</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] uppercase font-bold tracking-[0.15em] mb-5" style={{ color: "#0B5DB5" }}>
                Services
              </p>
              <ul className="space-y-2">
                {["Residential", "Commercial", "Long Distance", "International", "Storage", "FF&E / Designer"].map((item) => (
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
                <li>222 West 37th Street, 3rd Floor</li>
                <li>New York, NY 10018</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex justify-center" style={{ opacity: 1 }}>
            <span className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.2)" }}>
              &copy; {new Date().getFullYear()} Scanio Moving &amp; Storage. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
