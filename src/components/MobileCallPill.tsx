"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { COMPANY, TEL_HREF } from "@/lib/contact";

/**
 * Floating tap-to-call pill anchored to the bottom of the mobile viewport.
 *
 * On the home page: hidden until the user scrolls past the truck hero
 * animation, then it slides in. (The hero is 300vh; we trigger at ~270vh
 * so the pill is in place by the time the next section is in view.)
 *
 * On every other page: appears after a tiny scroll so it doesn't sit
 * directly under the page header while the user is still at the top.
 *
 * Hidden entirely on lg+ where the desktop nav already exposes the
 * phone number.
 */
export default function MobileCallPill() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const thresholdFor = () =>
      isHome ? window.innerHeight * 2.7 : 120;

    const onScroll = () => {
      setVisible(window.scrollY > thresholdFor());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  return (
    <div
      aria-hidden={!visible}
      className="lg:hidden fixed left-1/2 z-40 transition-all duration-300 ease-out"
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom))",
        transform: `translateX(-50%) translateY(${visible ? "0" : "24px"})`,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href={TEL_HREF}
        aria-label={`Call ${COMPANY.phone.display}`}
        // When the pill is hidden it's aria-hidden; take the link out of the
        // tab order too, so focus never lands on an invisible control and the
        // aria-hidden container has no focusable descendants.
        tabIndex={visible ? undefined : -1}
        className="flex items-center gap-2.5 px-6 py-3.5 rounded-full"
        style={{
          background: "#0B5DB5",
          color: "white",
          boxShadow:
            "0 10px 28px -8px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.20)",
        }}
      >
        <Phone size={18} strokeWidth={2.5} />
        <span className="text-[15px] tracking-[0.06em] font-bold">
          {COMPANY.phone.display}
        </span>
      </a>
    </div>
  );
}
