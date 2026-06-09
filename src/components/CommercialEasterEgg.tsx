"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Easter egg: after 45 seconds on the page, a LEGO-brick Scanio crew pops up.
 * Dismiss by clicking the backdrop or the close button. Fires once per visit.
 */
export default function CommercialEasterEgg() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 45000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      onClick={() => setShow(false)}
      role="dialog"
      aria-label="Scanio Movers — brick crew"
      className="fixed inset-0 z-[200] flex items-center justify-center p-5 cursor-pointer"
      style={{ background: "rgba(10,22,40,0.82)", backdropFilter: "blur(4px)", animation: "eggFade 0.45s ease both" }}
    >
      <style>{`
        @keyframes eggFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes eggPop { from { opacity: 0; transform: scale(0.92) translateY(14px) } to { opacity: 1; transform: scale(1) translateY(0) } }
      `}</style>
      <div
        className="relative w-full max-w-[640px]"
        style={{ animation: "eggPop 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src="/scanio-lego.webp"
          alt="Scanio Movers crew, built from LEGO bricks"
          width={1400}
          height={1050}
          className="w-full h-auto rounded-xl shadow-2xl"
          priority
        />
        <p className="mt-4 text-center text-white/90 text-[12px] md:text-[13px] tracking-[0.22em] uppercase font-medium">
          You found the brick crew 🧱 Moving NYC since 1941.
        </p>
        <button
          onClick={() => setShow(false)}
          aria-label="Close"
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center text-white text-[15px] shadow-lg transition-transform hover:scale-110"
          style={{ background: "#0B5DB5" }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
