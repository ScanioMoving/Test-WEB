"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <div className="max-w-4xl mx-auto px-8 text-center">
        <Image
          src="/scanio-logo.png"
          alt="Scanio Moving & Storage"
          width={240}
          height={167}
          priority
          className="mx-auto mb-14 opacity-70"
        />
        <h2 className="text-[clamp(20px,3vw,32px)] font-light tracking-[-0.01em] mb-3" style={{ color: "#1A1A1A" }}>
          Choose a Direction
        </h2>
        <p className="text-[14px] font-light mb-14" style={{ color: "#9CA3AF" }}>
          Five design concepts for the new Scanio experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/version-a", label: "Version A", sub: "Atelier", desc: "Loro Piana warmth. Serif elegance. Quiet luxury." },
            { href: "/version-b", label: "Version B", sub: "Galerie", desc: "Gagosian gallery meets Patek precision." },
            { href: "/version-c", label: "Version C", sub: "Pavilion", desc: "Guggenheim institutional. Modular blocks." },
            { href: "/version-d", label: "Version D", sub: "Noir", desc: "UOVO cinema. Full dark. Immersive." },
            { href: "/version-e", label: "Version E", sub: "Institution", desc: "UOVO big header. Scanio truck blue." },
          ].map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="group block p-6 md:p-8 border text-left transition-all duration-300 hover:shadow-lg hover:border-[#0B5DB5]"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-[18px] font-semibold tracking-[-0.01em]" style={{ color: "#1A1A1A" }}>
                  {v.label}
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] font-medium" style={{ color: "#0B5DB5" }}>
                  {v.sub}
                </span>
              </div>
              <p className="text-[13px] font-light leading-relaxed" style={{ color: "#9CA3AF" }}>
                {v.desc}
              </p>
            </Link>
          ))}
        </div>

        <p className="text-[12px] font-light mt-12" style={{ color: "#D1D5DB" }}>
          222 West 37th Street, New York &middot; 646.863.8070
        </p>
      </div>
    </div>
  );
}
