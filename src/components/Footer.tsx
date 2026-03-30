import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#0A1628" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Licensing */}
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
                <span className="text-[28px] font-bold tracking-tight block">SCANIO</span>
                <span className="block text-[11px] text-white/40 tracking-[0.35em] uppercase mt-0.5">
                  Moving &amp; Storage
                </span>
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
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0B5DB5] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                ["Residential", "/services/residential"],
                ["Commercial", "/services/commercial"],
                ["Long Distance", "/services/long-distance"],
                ["International", "/services/international"],
                ["Storage", "/storage"],
                ["FF&E / Designer", "/services/ffe-designer"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[14px] text-white/40 hover:text-white/70 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0B5DB5] mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                ["About", "/about"],
                ["Testimonials", "/testimonials"],
                ["Free Estimate", "/quote"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[14px] text-white/40 hover:text-white/70 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0B5DB5] mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6468638070"
                  className="flex items-center gap-3 text-[14px] text-white/40 hover:text-white/70 transition-colors"
                >
                  <Phone size={15} className="shrink-0" />
                  646.863.8070
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@scaniomoving.com"
                  className="flex items-center gap-3 text-[14px] text-white/40 hover:text-white/70 transition-colors"
                >
                  <Mail size={15} className="shrink-0" />
                  info@scaniomoving.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[14px] text-white/40">
                  <MapPin size={15} className="shrink-0 mt-0.5" />
                  <span>
                    222 West 37th Street, 3rd Floor
                    <br />
                    New York, NY 10018
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} Scanio Moving &amp; Storage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
