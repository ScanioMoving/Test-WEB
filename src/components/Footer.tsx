import Link from "next/link";
import Image from "next/image";

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
              {[
                { label: "Residential", href: "/services/residential" },
                { label: "Commercial", href: "/services/commercial" },
                { label: "Long Distance", href: "/services/long-distance" },
                { label: "International", href: "/services/international" },
                { label: "Storage", href: "/storage" },
                { label: "FF&E / Designer", href: "/services/ffe-designer" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[13px] font-light text-white/40 hover:text-white/70 transition-colors">
                    {item.label}
                  </Link>
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
              {[
                { label: "About", href: "/about" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Free Estimate", href: "/quote" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[13px] font-light text-white/40 hover:text-white/70 transition-colors">
                    {item.label}
                  </Link>
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
  );
}
