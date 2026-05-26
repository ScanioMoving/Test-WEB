"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";

const serviceItems = [
  { name: "Residential", href: "/services/residential" },
  { name: "Commercial", href: "/services/commercial" },
  { name: "Long Distance", href: "/services/long-distance" },
  { name: "International", href: "/services/international" },
  { name: "Storage", href: "/storage" },
  { name: "FF&E / Designer", href: "/services/ffe-designer" },
];

const BRAND_BLUE = "#0B5DB5";
const SCROLLED_CREAM = "#F5F8FC";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleDropdownEnter() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  }

  function handleDropdownLeave() {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 200);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      onMouseLeave={() => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setServicesOpen(false);
      }}
    >
      {/* Main nav bar — single fully-opaque bg that smoothly transitions
          its color from brand blue to cream. No opacity layers, so it can
          never become transparent mid-swap. */}
      <div
        className="relative transition-[background-color,box-shadow] duration-500"
        style={{
          height: 150,
          backgroundColor: scrolled ? SCROLLED_CREAM : BRAND_BLUE,
          boxShadow: scrolled && !servicesOpen ? "0 1px 0 #D6E0ED" : "none",
        }}
      >
        <div className="relative z-10 w-full px-10 md:px-12 h-full flex items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-4 relative z-10">
            <div
              className="block shrink-0 transition-all duration-500 h-[60px] md:h-[75px] aspect-[1217/1561] translate-y-[1px] md:translate-y-[2px]"
              style={{
                background: scrolled ? BRAND_BLUE : "white",
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
                style={{ color: scrolled ? BRAND_BLUE : "white", lineHeight: "0.85", margin: 0, marginLeft: "-3px", padding: 0 }}
              >
                Scanio
              </span>
              <span
                className="block text-[13px] tracking-[0.02em] uppercase font-normal transition-colors duration-500"
                style={{ color: scrolled ? "#4A5568" : "rgba(255,255,255,0.75)", lineHeight: "1", marginTop: "4px" }}
              >
                Moving &amp; Storage &mdash; Since 1941
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/about"
              className="text-[14px] tracking-[0.15em] uppercase font-medium transition-all duration-500"
              style={{ color: scrolled ? BRAND_BLUE : "white", opacity: scrolled ? 0.85 : 0.9 }}
            >
              About Us
            </Link>

            <a
              href="https://designers.scaniomoving.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[14px] tracking-[0.15em] uppercase font-medium transition-all duration-500"
              style={{ color: scrolled ? BRAND_BLUE : "white", opacity: scrolled ? 0.85 : 0.9 }}
            >
              Designer Portal
              <ExternalLink size={12} className="opacity-60" />
            </a>

            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="flex items-center gap-1.5 text-[14px] tracking-[0.15em] uppercase font-medium transition-all duration-500"
                style={{ color: scrolled ? BRAND_BLUE : "white", opacity: scrolled ? 0.85 : 0.9 }}
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
                  zIndex: 60,
                }}
              >
                <div
                  className="min-w-[200px] py-3 px-6"
                  style={{ background: "white", boxShadow: "0 8px 24px -12px rgba(0,0,0,0.2)" }}
                >
                  {serviceItems.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-[12px] tracking-[0.1em] uppercase font-medium text-center transition-all duration-300"
                      style={{ color: "rgba(11,93,181,0.6)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = BRAND_BLUE; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(11,93,181,0.6)"; }}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            <Link
              href="/contact"
              className="text-[14px] tracking-[0.15em] uppercase font-medium transition-all duration-500"
              style={{ color: scrolled ? BRAND_BLUE : "white", opacity: scrolled ? 0.85 : 0.9 }}
            >
              Contact
            </Link>
          </div>

          <button
            className="lg:hidden p-2 relative z-10 transition-colors duration-500"
            style={{ color: scrolled ? BRAND_BLUE : "white" }}
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setServicesOpen(false);
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile nav panel — mirrors the header's current state */}
      {mobileOpen && (
        <div
          className="lg:hidden overflow-y-auto transition-colors duration-500"
          style={{
            background: scrolled ? SCROLLED_CREAM : BRAND_BLUE,
            height: "calc(100vh - 150px)",
          }}
        >
          <div className="px-10 py-8 space-y-1 flex flex-col h-full">
            <Link
              href="/about"
              className="block py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
              style={{ color: scrolled ? "#0A1628" : "white" }}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <a
              href="https://designers.scaniomoving.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
              style={{ color: scrolled ? "#0A1628" : "white" }}
              onClick={() => setMobileOpen(false)}
            >
              Designer Portal
              <ExternalLink size={13} className="opacity-60" />
            </a>

            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
                style={{ color: scrolled ? "#0A1628" : "white" }}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300"
                  style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-5 pb-2 space-y-0.5">
                  <Link
                    href="/services"
                    className="block py-2.5 text-[13px] tracking-[0.05em] font-light"
                    style={{ color: scrolled ? "#6B7B8D" : "rgba(255,255,255,0.75)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    All Services
                  </Link>
                  {serviceItems.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2.5 text-[13px] tracking-[0.05em] font-light"
                      style={{ color: scrolled ? "#6B7B8D" : "rgba(255,255,255,0.75)" }}
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
              style={{ color: scrolled ? "#0A1628" : "white" }}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/testimonials"
              className="block py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
              style={{ color: scrolled ? "#0A1628" : "white" }}
              onClick={() => setMobileOpen(false)}
            >
              Testimonials
            </Link>

            <div className="pt-4 mt-auto border-t" style={{ borderColor: scrolled ? "#D6E0ED" : "rgba(255,255,255,0.2)" }}>
              <Link
                href="/quote"
                className="block text-center text-[12px] tracking-[0.3em] uppercase font-medium px-8 py-4 border transition-all"
                style={{ color: scrolled ? "#0A1628" : "white", borderColor: scrolled ? "#0F1D2F" : "rgba(255,255,255,0.6)" }}
                onClick={() => setMobileOpen(false)}
              >
                Request Consultation
              </Link>
              <a
                href="tel:2127226850"
                className="flex items-center justify-center gap-2 mt-4 text-[13px] tracking-[0.15em]"
                style={{ color: scrolled ? "#6B7B8D" : "rgba(255,255,255,0.85)" }}
              >
                212.722.6850
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
