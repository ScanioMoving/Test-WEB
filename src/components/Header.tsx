"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { COMPANY, TEL_HREF } from "@/lib/contact";

const serviceItems = [
  { name: "Residential", href: "/services/residential" },
  { name: "Commercial", href: "/services/commercial" },
  { name: "Long Distance", href: "/services/long-distance" },
  { name: "International", href: "/services/international" },
  { name: "Storage", href: "/storage" },
  { name: "FF&E / Designer", href: "/services/ffe-designer" },
];

const HEADER_BG = "#0B5DB5";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

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
      {/* Main nav bar — always solid brand blue, never swaps */}
      <div
        className="relative"
        style={{
          height: 150,
          background: HEADER_BG,
        }}
      >
        <div className="relative z-10 w-full px-10 md:px-12 h-full flex items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-4 relative z-10">
            <div
              className="block shrink-0 h-[60px] md:h-[75px] aspect-[1217/1561] translate-y-[1px] md:translate-y-[2px]"
              style={{
                background: "white",
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
                className="block text-[56px] md:text-[72px] font-semibold tracking-[0.02em] uppercase"
                style={{
                  fontFamily: "'Manrope', 'Inter', 'Helvetica Neue', sans-serif",
                  color: "white",
                  lineHeight: "0.85",
                  margin: 0,
                  marginLeft: "-3px",
                  padding: 0,
                }}
              >
                Scanio
              </span>
              <span
                className="block text-[13px] md:text-[17px] tracking-[0.02em] uppercase font-normal"
                style={{
                  fontFamily: "'Manrope', 'Inter', 'Helvetica Neue', sans-serif",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: "1",
                  marginTop: "6px",
                }}
              >
                Moving &amp; Storage &mdash; Since 1941
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/about"
              className="text-[17px] tracking-[0.15em] uppercase font-bold hover:opacity-80 transition-opacity duration-300"
              style={{
                fontFamily: "'Manrope', 'Inter', 'Helvetica Neue', sans-serif",
                color: "white",
              }}
            >
              About Us
            </Link>

            <a
              href="https://designers.scaniomoving.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[17px] tracking-[0.15em] uppercase font-bold hover:opacity-80 transition-opacity duration-300"
              style={{
                fontFamily: "'Manrope', 'Inter', 'Helvetica Neue', sans-serif",
                color: "white",
              }}
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
                className="flex items-center gap-1.5 text-[17px] tracking-[0.15em] uppercase font-bold hover:opacity-80 transition-opacity duration-300"
                style={{
                  fontFamily: "'Manrope', 'Inter', 'Helvetica Neue', sans-serif",
                  color: "white",
                }}
                onClick={() => setServicesOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="header-services-menu"
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
                id="header-services-menu"
                className="absolute top-full pt-3 transition-all duration-300"
                style={{
                  left: "50%",
                  opacity: servicesOpen ? 1 : 0,
                  transform: servicesOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-6px)",
                  pointerEvents: servicesOpen ? "auto" : "none",
                  // visibility:hidden (not just opacity) removes the links from
                  // the tab order when the menu is closed, so keyboard users
                  // don't focus invisible items. transition-all defers the flip
                  // to hidden until the fade-out finishes.
                  visibility: servicesOpen ? "visible" : "hidden",
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
                      className="block py-2.5 text-[14px] tracking-[0.1em] uppercase font-medium text-center transition-all duration-300"
                      style={{ color: "rgba(11,93,181,0.6)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = HEADER_BG; }}
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
              className="text-[17px] tracking-[0.15em] uppercase font-bold hover:opacity-80 transition-opacity duration-300"
              style={{
                fontFamily: "'Manrope', 'Inter', 'Helvetica Neue', sans-serif",
                color: "white",
              }}
            >
              Contact
            </Link>
          </div>

          <button
            className="lg:hidden p-2 relative z-10"
            style={{ color: "white" }}
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setServicesOpen(false);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile nav panel — same blue as the header */}
      {mobileOpen && (
        <div
          className="lg:hidden overflow-y-auto"
          style={{
            background: HEADER_BG,
            height: "calc(100vh - 150px)",
          }}
        >
          <div className="px-10 py-8 space-y-1 flex flex-col h-full">
            <Link
              href="/about"
              className="block py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
              style={{ color: "white" }}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <a
              href="https://designers.scaniomoving.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
              style={{ color: "white" }}
              onClick={() => setMobileOpen(false)}
            >
              Designer Portal
              <ExternalLink size={13} className="opacity-60" />
            </a>

            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
                style={{ color: "white" }}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
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
                    style={{ color: "rgba(255,255,255,0.75)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    All Services
                  </Link>
                  {serviceItems.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2.5 text-[13px] tracking-[0.05em] font-light"
                      style={{ color: "rgba(255,255,255,0.75)" }}
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
              style={{ color: "white" }}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 mt-auto border-t" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <Link
                href="/quote"
                className="block text-center text-[12px] tracking-[0.3em] uppercase font-medium px-8 py-4 border transition-all"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.6)" }}
                onClick={() => setMobileOpen(false)}
              >
                Request Consultation
              </Link>
              <a
                href={TEL_HREF}
                className="flex items-center justify-center gap-2 mt-4 text-[13px] tracking-[0.15em]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {COMPANY.phone.display}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
