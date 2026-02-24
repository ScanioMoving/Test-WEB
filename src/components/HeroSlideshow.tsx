"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  {
    src: "/slides/slide-1.jpg",
    alt: "New York City skyline at dusk",
  },
  {
    src: "/slides/slide-2.jpg",
    alt: "Luxury home interior",
  },
  {
    src: "/slides/slide-3.jpg",
    alt: "Modern architectural interior",
  },
  {
    src: "/slides/slide-4.jpg",
    alt: "Manhattan cityscape",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]));

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  useEffect(() => {
    const next = (current + 1) % slides.length;
    if (!loaded.has(next)) {
      setLoaded((prev) => new Set(prev).add(next));
    }
  }, [current, loaded]);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {(i === current || loaded.has(i)) && (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover scale-105 transition-transform duration-[8000ms] ease-out"
              style={{
                transform: i === current ? "scale(1.05)" : "scale(1)",
              }}
              sizes="100vw"
            />
          )}
        </div>
      ))}

      {/* Multi-layer gradient for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060E1A]/95 via-[#060E1A]/60 to-[#060E1A]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A]/60 via-transparent to-[#060E1A]/20" />

      {/* Slide indicators — minimal pills */}
      <div className="absolute bottom-10 right-8 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? "bg-white w-8"
                : "bg-white/25 w-3 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
