"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";

const rotatingPhotos = [
  {
    src: "/about/crew-blue-truck.jpg",
    alt: "Scanio crew posing with blue moving truck",
  },
  {
    src: "/about/crew-truck.jpg",
    alt: "Scanio crew posing by a moving truck",
  },
  {
    src: "/about/packing-room.jpg",
    alt: "Scanio team carefully packing items in an elegant room",
  },
  {
    src: "/about/group-photo.jpg",
    alt: "Scanio team carrying an architectural model",
  },
  {
    src: "/about/crew-portrait.jpg",
    alt: "Scanio Moving crew portrait",
  },
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

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
      {/* Dark header background */}
      <div className="h-[150px] w-full" style={{ background: "#0A1628" }} />

      {/* Split: Rotating Photos (left) + Text & Truck (right) */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-150px)]">
          {/* Left: Rotating team photos */}
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
                  onClick={() => goTo(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === current ? "white" : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Text + Vintage truck photo */}
          <div className="lg:w-1/2 py-20 px-10 md:px-16 lg:px-20 flex flex-col justify-center items-center text-center">
            <p
              className="text-[11px] tracking-[0.3em] uppercase font-medium mb-6"
              style={{ color: "#0B5DB5" }}
            >
              Since 1941
            </p>
            <h2
              className="text-[clamp(26px,3vw,36px)] font-light leading-[1.25] tracking-[-0.01em] mb-8"
              style={{ color: "#0A1628" }}
            >
              Moving New York
              <br />
              for Over 80 Years
            </h2>
            <p
              className="text-[16px] font-light leading-[1.85] mb-5 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              Founded in New York City in 1941, Scanio Moving &amp; Storage
              began as a small, family-operated moving company with a simple
              promise: to handle every move with care, precision, and respect.
            </p>
            <p
              className="text-[16px] font-light leading-[1.85] mb-5 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              Over eight decades later, that promise still drives everything
              we do. We&apos;ve grown from a single truck to a full fleet, but
              our commitment to personal service and attention to detail has
              never wavered.
            </p>
            <p
              className="text-[16px] font-light leading-[1.85] mb-10 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              No locale, building, or set of circumstances is too much for
              our professional movers. Whether you&apos;re moving across the
              street or across the country, Scanio brings the same level of
              care and expertise to every job.
            </p>

            {/* Vintage truck — standalone, smaller */}
            <div className="relative w-full max-w-sm aspect-[4/3] overflow-hidden mb-8">
              <Image
                src="/hero-trucks.jpg"
                alt="Vintage Scanio Moving & Storage trucks in New York City"
                fill
                priority
                quality={95}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
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

      {/* Values + Licenses + CTA */}
      <section className="py-20" style={{ background: "#F5F8FC" }}>
        <div className="max-w-5xl mx-auto px-10 text-center">

          {/* What We Stand For */}
          <h2
            className="text-[clamp(24px,3vw,32px)] font-light leading-[1.3] mb-4"
            style={{ color: "#0A1628" }}
          >
            What We Stand For
          </h2>
          <p
            className="text-[15px] font-light mb-14 max-w-2xl mx-auto"
            style={{ color: "#6B7B8D" }}
          >
            Our values have guided us since 1941 and continue to define every
            move we make today.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { stat: "80+", label: "Years of Service", desc: "Trusted by generations of New Yorkers since 1941." },
              { stat: "NYC", label: "Based & Operated", desc: "We know every building, block, and borough." },
              { stat: "5 Star", label: "Rated Service", desc: "Consistently top-rated by our customers." },
              { stat: "24hr", label: "Response Time", desc: "We get back to you within one business day." },
            ].map((v) => (
              <div key={v.label} className="text-center">
                <p className="text-[36px] font-light mb-1" style={{ color: "#0B5DB5" }}>{v.stat}</p>
                <p className="text-[13px] tracking-[0.1em] uppercase font-medium mb-3" style={{ color: "#0A1628" }}>{v.label}</p>
                <p className="text-[14px] font-light leading-[1.7]" style={{ color: "#6B7B8D" }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Licensed & Insured */}
          <div className="border-t pt-16 mb-16" style={{ borderColor: "#D6E0ED" }}>
            <h2
              className="text-[clamp(20px,2.5vw,28px)] font-light mb-10"
              style={{ color: "#0A1628" }}
            >
              Licensed &amp; Insured
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: "New York DOT", value: "T11495" },
                { label: "ICC Interstate", value: "MC93512" },
                { label: "New Jersey", value: "39PC00099002" },
                { label: "US DOT", value: "537054" },
              ].map((l) => (
                <div key={l.value} className="bg-white px-8 py-6 text-center">
                  <p className="text-[11px] tracking-[0.1em] uppercase font-light mb-1" style={{ color: "#6B7B8D" }}>{l.label}</p>
                  <p className="text-[18px] font-medium" style={{ color: "#0A1628" }}>{l.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t pt-16" style={{ borderColor: "#D6E0ED" }}>
            <h2
              className="text-[clamp(24px,3vw,36px)] font-light leading-[1.3] mb-4"
              style={{ color: "#0A1628" }}
            >
              Experience the Scanio difference.
            </h2>
            <p className="text-[15px] font-light mb-10" style={{ color: "#6B7B8D" }}>
              Join thousands of satisfied customers who trust their moves to NYC&apos;s finest moving company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 border transition-all"
                style={{ color: "#0A1628", borderColor: "#0A1628" }}
              >
                Get an Estimate
              </Link>
              <a
                href="tel:6468638070"
                className="flex items-center justify-center gap-2 text-[13px] tracking-[0.2em] font-light transition-opacity hover:opacity-60"
                style={{ color: "#0B5DB5" }}
              >
                <Phone size={14} />
                646.863.8070
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
