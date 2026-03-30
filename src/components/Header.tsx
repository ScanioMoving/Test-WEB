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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const [servicesBtnCenter, setServicesBtnCenter] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  useEffect(() => {
    if (servicesOpen && servicesBtnRef.current) {
      const rect = servicesBtnRef.current.getBoundingClientRect();
      setServicesBtnCenter(rect.left + rect.width / 2);
    }
  }, [servicesOpen]);

  const solid = scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      onMouseLeave={() => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setServicesOpen(false);
      }}
    >
      {/* Main nav bar */}
      <div
        className="transition-all duration-500"
        style={{
          height: 150,
          background: solid ? "#F5F8FC" : "transparent",
          boxShadow: solid && !servicesOpen ? "0 1px 0 #D6E0ED" : "none",
        }}
      >
        <div className="w-full px-10 md:px-12 h-full flex items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-4 relative z-10">
            <div
              className="block shrink-0 transition-all duration-500 h-[60px] md:h-[75px] aspect-[1217/1561] translate-y-[1px] md:translate-y-[2px]"
              style={{
                background: solid ? "#0B5DB5" : "white",
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
                style={{ color: solid ? "#0B5DB5" : "white", lineHeight: "0.85", margin: 0, marginLeft: "-3px", padding: 0 }}
              >
                Scanio
              </span>
              <span
                className="block text-[13px] tracking-[0.02em] uppercase font-normal transition-colors duration-500"
                style={{ color: solid ? "#4A5568" : "rgba(255,255,255,0.65)", lineHeight: "1", marginTop: "4px" }}
              >
                Moving &amp; Storage &mdash; Since 1941
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/about"
              className="text-[14px] tracking-[0.15em] uppercase font-medium hover:opacity-100 transition-all duration-500"
              style={{ color: solid ? "#0B5DB5" : "white", opacity: solid ? 0.85 : 0.6 }}
            >
              About Us
            </Link>

            <a
              href="https://designers.scaniomoving.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[14px] tracking-[0.15em] uppercase font-medium hover:opacity-100 transition-all duration-500"
              style={{ color: solid ? "#0B5DB5" : "white", opacity: solid ? 0.85 : 0.6 }}
            >
              Designer Portal
              <ExternalLink size={12} className="opacity-50" />
            </a>

            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                ref={servicesBtnRef}
                className="flex items-center gap-1.5 text-[14px] tracking-[0.15em] uppercase font-medium hover:opacity-100 transition-all duration-500"
                style={{ color: solid ? "#0B5DB5" : "white", opacity: solid ? 0.85 : 0.6 }}
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
                  style={{ background: "#F5F8FC" }}
                >
                  {serviceItems.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-[12px] tracking-[0.1em] uppercase font-medium text-center transition-all duration-300"
                      style={{ color: "rgba(11,93,181,0.5)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#0B5DB5"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(11,93,181,0.5)"; }}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            <Link
              href="/contact"
              className="text-[14px] tracking-[0.15em] uppercase font-medium hover:opacity-100 transition-all duration-500"
              style={{ color: solid ? "#0B5DB5" : "white", opacity: solid ? 0.85 : 0.6 }}
            >
              Contact
            </Link>
          </div>

          <button
            className="lg:hidden p-2 relative z-10 transition-colors duration-500"
            style={{ color: solid ? "#0B5DB5" : "white" }}
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

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t overflow-y-auto"
          style={{
            background: "#F5F8FC",
            borderColor: "#D6E0ED",
            height: "calc(100vh - 150px)",
          }}
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

            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
                style={{ color: "#0A1628" }}
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
                    style={{ color: "#6B7B8D" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    All Services
                  </Link>
                  {serviceItems.map((s) => (
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

            <Link
              href="/testimonials"
              className="block py-3 text-[15px] tracking-[0.1em] uppercase font-medium"
              style={{ color: "#0A1628" }}
              onClick={() => setMobileOpen(false)}
            >
              Testimonials
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
                646.863.8070
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
