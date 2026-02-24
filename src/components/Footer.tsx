import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#0B5DB5" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Licensing */}
          <div>
            <span className="text-[28px] font-bold tracking-tight">SCANIO</span>
            <span className="block text-[11px] text-white/80 tracking-[0.35em] uppercase mt-0.5">
              Moving &amp; Storage
            </span>
            <div className="mt-6 border border-white/40 rounded-sm p-5 space-y-1">
              <p className="text-[10px] uppercase font-semibold tracking-[0.15em] text-white/50 mb-3">Licensed &amp; Insured</p>
              <p className="text-[18px] font-semibold text-white">NY DOT T11495</p>
              <p className="text-[18px] font-semibold text-white">ICC MC93512</p>
              <p className="text-[18px] font-semibold text-white">NJ 39PC00099002</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                ["Residential Moving", "/services/residential"],
                ["Commercial Moving", "/services/commercial"],
                ["Long Distance", "/services/long-distance"],
                ["White Glove", "/services/white-glove"],
                ["Packing", "/services/packing"],
                ["Storage", "/storage"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80 mb-5">
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
                    className="text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6468638070"
                  className="flex items-center gap-3 text-[14px] text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={15} className="shrink-0" />
                  646.863.8070
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@scaniomoving.com"
                  className="flex items-center gap-3 text-[14px] text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={15} className="shrink-0" />
                  info@scaniomoving.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[14px] text-white/50">
                  <MapPin size={15} className="shrink-0 mt-0.5" />
                  <span>
                    222 West 37th Street
                    <br />
                    New York, NY 10018
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/60">
            &copy; {new Date().getFullYear()} Scanio Moving &amp; Storage. All rights reserved.
          </p>
          <p className="text-[12px] text-white/60">
            NY DOT T11495 &middot; ICC MC93512 &middot; NJ 39PC00099002
          </p>
        </div>
      </div>
    </footer>
  );
}
