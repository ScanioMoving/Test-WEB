"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const rotatingPhotos = [
  {
    src: "/services/residential-truck.jpg",
    alt: "Scanio Moving truck parked on a brownstone-lined NYC street",
  },
  {
    src: "/services/residential-house.jpg",
    alt: "Scanio truck at a residential home",
  },
];

const features = [
  "Full-service packing & unpacking",
  "Furniture disassembly & reassembly",
  "Elevator & stairwell navigation",
  "Co-op & condo regulation compliance",
  "Parking permit coordination",
  "Floor & wall protection",
  "Organized labeling & inventory",
  "Same-day & next-day availability",
];

export default function ResidentialPage() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % rotatingPhotos.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + rotatingPhotos.length) % rotatingPhotos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <>
      {/* Header background */}
      <div className="h-[150px] w-full" style={{ background: "#0B5DB5" }} />

      {/* Split: Cycling Images + Content */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-150px)]">
          {/* Left: Rotating images */}
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-0">
            {rotatingPhotos.map((photo, i) => (
              <div
                key={photo.src}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-opacity hover:opacity-100"
              style={{ color: "white", opacity: 0.6 }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-opacity hover:opacity-100"
              style={{ color: "white", opacity: 0.6 }}
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
              {rotatingPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === current ? "white" : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 py-20 px-10 md:px-16 lg:px-20 flex flex-col justify-center items-center text-center">
            <h2
              className="text-[clamp(26px,3vw,36px)] font-light leading-[1.25] tracking-[-0.01em] mb-8"
              style={{ color: "#0A1628" }}
            >
              Your Home Move,
              <br />
              Handled with Expert Care
            </h2>
            <p
              className="text-[16px] font-light leading-[1.85] mb-6 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              Moving in NYC is unlike anywhere else. Narrow hallways, strict
              building rules, elevator reservations, and Manhattan traffic
              &mdash; we know it all and handle it all.
            </p>
            <p
              className="text-[16px] font-light leading-[1.85] mb-10 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              With over 80 years of moving New Yorkers, we understand the
              unique challenges of residential moves in the city. From a
              cozy studio walkup to a Park Avenue penthouse, every home
              receives the same level of care and professionalism.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-12 max-w-lg text-left">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle className="shrink-0 mt-0.5" size={16} style={{ color: "#0B5DB5" }} />
                  <span className="text-[13px]" style={{ color: "#6B7B8D" }}>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/quote"
                className="text-[12px] tracking-[0.3em] uppercase font-medium px-8 py-4 border transition-all"
                style={{ color: "#0A1628", borderColor: "#0A1628" }}
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:6468638070"
                className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-60"
                style={{ color: "#0B5DB5" }}
              >
                <Phone size={14} />
                646.863.8070
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#0A1628" }}>
        <div className="max-w-4xl mx-auto px-10 text-center">
          <h2
            className="text-[clamp(24px,3vw,36px)] font-light leading-[1.3] mb-4"
            style={{ color: "white" }}
          >
            Ready to move?
          </h2>
          <p className="text-[15px] font-light mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Get a free in-home estimate and see why thousands trust Scanio
            with their residential moves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 border transition-all"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Get an Estimate
            </Link>
            <a
              href="tel:6468638070"
              className="flex items-center justify-center gap-2 text-[13px] tracking-[0.2em] font-light transition-opacity hover:opacity-60"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <Phone size={14} />
              646.863.8070
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
