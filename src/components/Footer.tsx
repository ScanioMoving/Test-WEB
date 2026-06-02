import Link from "next/link";
import Image from "next/image";
import { COMPANY, TEL_HREF, MAILTO_HREF } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="pt-16 pb-10 border-t" style={{ borderColor: "#D6E0ED", background: "#0A1628" }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 mb-14">
          {/* Brand + Licensed */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/scanio-s-navy.png"
                alt="Scanio S logo"
                width={52}
                height={66}
                className="w-[52px]"
              />
              <div>
                <p className="text-white text-[36px] font-semibold tracking-[0.02em] uppercase leading-none mb-2">
                  Scanio
                </p>
                <p className="text-white/85 text-[15px] font-normal">
                  Moving &amp; Storage
                </p>
              </div>
            </div>
            <div className="mt-6 border border-white/10 p-5 space-y-1">
              <p className="text-[12px] uppercase font-semibold tracking-[0.18em] text-white/75 mb-4">
                Licensed &amp; Insured
              </p>
              <p className="text-[18px] font-semibold text-white/95">NY DOT T11495</p>
              <p className="text-[18px] font-semibold text-white/95">ICC MC93512</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[13px] uppercase font-bold tracking-[0.18em] mb-6" style={{ color: "#0B5DB5" }}>
              Services
            </p>
            <ul className="space-y-3">
              {[
                { label: "Residential", href: "/services/residential" },
                { label: "Commercial", href: "/services/commercial" },
                { label: "Long Distance", href: "/services/long-distance" },
                { label: "International", href: "/services/international" },
                { label: "Storage", href: "/storage" },
                { label: "FF&E / Designer", href: "/services/ffe-designer" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[16px] font-normal text-white/85 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[13px] uppercase font-bold tracking-[0.18em] mb-6" style={{ color: "#0B5DB5" }}>
              Company
            </p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Free Estimate", href: "/contact" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[16px] font-normal text-white/85 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[13px] uppercase font-bold tracking-[0.18em] mb-6" style={{ color: "#0B5DB5" }}>
              Contact
            </p>
            <ul className="space-y-3 text-[16px] font-normal text-white/85">
              <li><a href={TEL_HREF} className="hover:text-white transition-colors">{COMPANY.phone.display}</a></li>
              <li><a href={MAILTO_HREF} className="hover:text-white transition-colors">{COMPANY.email}</a></li>
              <li>{COMPANY.address.line1}</li>
              <li>{COMPANY.address.line2}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex justify-center" style={{ opacity: 1 }}>
          <span className="text-[13px] font-normal" style={{ color: "rgba(255,255,255,0.75)" }}>
            &copy; {new Date().getFullYear()} Scanio Movers Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
