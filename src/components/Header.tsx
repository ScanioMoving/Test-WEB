"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Residential Moving", href: "/services/residential" },
  { name: "Commercial Moving", href: "/services/commercial" },
  { name: "Long Distance Moving", href: "/services/long-distance" },
  { name: "White Glove Moving", href: "/services/white-glove" },
  { name: "Packing & Unpacking", href: "/services/packing" },
  { name: "Storage", href: "/storage" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col relative z-10">
          <span
            className={`text-[28px] font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            SCANIO
          </span>
          <span
            className={`text-[11px] tracking-[0.35em] uppercase -mt-1 transition-colors duration-500 ${
              scrolled ? "text-text-secondary" : "text-white/70"
            }`}
          >
            Moving & Storage
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: "About", href: "/about" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-500 ${
                scrolled
                  ? "text-text-secondary hover:text-navy"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors duration-500 ${
                scrolled
                  ? "text-text-secondary hover:text-navy"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Services <ChevronDown size={14} />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3">
                <div className="bg-white rounded-xl shadow-xl border border-border py-3 min-w-[240px]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-2.5 text-[13px] text-text-secondary hover:bg-cream hover:text-navy transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className={`w-px h-5 transition-colors duration-500 ${
              scrolled ? "bg-border" : "bg-white/20"
            }`}
          />

          <a
            href="tel:6468638070"
            className={`flex items-center gap-2 text-[13px] font-medium tracking-wide transition-colors duration-500 ${
              scrolled
                ? "text-text-secondary hover:text-navy"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Phone size={14} />
            646.863.8070
          </a>

          <Link
            href="/quote"
            className={`text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-navy text-white hover:bg-navy-light"
                : "bg-white text-navy hover:bg-white/90"
            }`}
          >
            Get Estimate
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 relative z-10 transition-colors duration-500 ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-6 space-y-1">
            {[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              ...services.map((s) => ({ label: s.name, href: s.href, indent: true })),
              { label: "Storage", href: "/storage" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2.5 text-[15px] transition-colors ${
                  "indent" in item && item.indent
                    ? "pl-5 text-text-light text-[13px]"
                    : "text-text-primary font-medium"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/quote"
                className="block bg-navy text-white text-center font-semibold px-6 py-3.5 rounded-full text-[14px]"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
