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
  "Full service local, long distance, and international moves",
  "Free in-home or virtual moving estimates and consultations",
  "Professional packing, wrapping, and unpacking",
  "Custom crating for fragile, oversized, and high value items",
  "Furniture disassembly, protection, and reassembly",
  "Piano and specialty item handling",
  "Short and long term storage in our secure warehouse",
  "Coordination with building management for COIs, elevator access, and move windows",
  "Full value protection options for your peace of mind",
];

const packingOptions: [string, string][] = [
  [
    "Full pack.",
    "We pack, wrap, and crate everything in your home, using quality materials and careful labeling so every item is protected for the move, right down to the most fragile pieces.",
  ],
  [
    "Fragile and partial packing.",
    "We handle the delicate, valuable, and unwieldy pieces and wrap all your furniture, while you take care of the simpler items at your own pace.",
  ],
  [
    "Self pack.",
    "You pack ahead of our arrival and we handle the wrapping, loading, transport, and furniture placement.",
  ],
];

const unpackingOptions: [string, string][] = [
  [
    "Surface unpack and debris removal.",
    "We unpack and set out the contents of every box onto flat surfaces such as countertops and tabletops, then clear away all boxes and packing materials, leaving you to put everything away in your own organized way.",
  ],
  [
    "Surface unpack with a professional organizer.",
    "Want everything put away for you, right down to the cabinets and drawers? We unpack onto flat surfaces and clear away all packing materials, then a professional organizer we arrange on your behalf puts everything in its place, exactly to your taste.",
  ],
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
      {/* Spacer behind the fixed header — matches the page so the header reads as one continuous surface */}
      <div className="h-[150px] w-full bg-white" />

      {/* Fade band just under the header. As content scrolls up it becomes invisible
          before it ever reaches the header. Full width on mobile (stacked layout);
          right half only on desktop so the sticky image isn't washed out. */}
      <div
        aria-hidden
        className="fixed z-40 pointer-events-none left-0 right-0 lg:left-1/2"
        style={{
          top: 150,
          height: 70,
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Split: Sticky image left + scrollable content right (CTA pinned at top) */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left: Sticky rotating images */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-[150px] lg:self-start relative min-h-[42vh] md:min-h-[55vh] lg:min-h-0 lg:h-[calc(100vh-150px)]">
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

          {/* Right: Scrollable content */}
          <div className="lg:w-1/2 w-full relative bg-white">
            <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
              <p
                className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0B5DB5" }}
              >
                Residential Moving
              </p>
              <h2
                className="text-[clamp(24px,3.2vw,42px)] font-light leading-[1.15] tracking-[-0.01em] mb-6 md:mb-8"
                style={{ color: "#0A1628" }}
              >
                Every move handled
                <br />
                like it&apos;s family
              </h2>
              <p
                className="text-[15px] md:text-[16px] font-light leading-[1.75] md:leading-[1.85] mb-5 md:mb-6"
                style={{ color: "#4A5568" }}
              >
                Moving your home is one of the most personal things you can
                trust a company to do. At Scanio Movers, we have been doing
                it since 1941, and in that time we have learned that a
                great move is not about trucks and boxes. It is about care,
                planning, and people who know what they are doing. From the
                first phone call to the moment the last item is set in
                place, our team is right beside you, taking the stress and
                uncertainty out of the day.
              </p>
              <p
                className="text-[15px] md:text-[16px] font-light leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#4A5568" }}
              >
                We handle moves of every size, from a single apartment to a
                full estate, and across every distance, whether you are
                relocating across town, across the country, or around the
                world. Whatever the move, the standard never changes: your
                belongings are treated with the same respect we would give
                our own.
              </p>

              {/* Why families choose Scanio */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Why families choose Scanio
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-light leading-[1.75] md:leading-[1.85] mb-10 md:mb-12"
                style={{ color: "#4A5568" }}
              >
                A move is only as good as the people who carry it out. That
                is where Scanio stands apart. Many of our crews,
                coordinators, and warehouse staff have been with the
                company for decades, in an industry known for constant
                turnover. When a Scanio team arrives at your door, they are
                not learning the job. They have packed the china, wrapped
                the heirlooms, and navigated the tight staircases hundreds
                of times before. That experience is something you can feel
                from the moment they walk in.
              </p>

              {/* Services list */}
              <h4
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Our residential services include
              </h4>
              <div className="grid grid-cols-1 gap-y-2.5 md:gap-y-3 mb-10 md:mb-14">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="shrink-0 mt-0.5" size={15} style={{ color: "#0B5DB5" }} />
                    <span className="text-[13px] md:text-[14px] leading-[1.6]" style={{ color: "#4A5568" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Planning your move */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Planning your move
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-light leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#4A5568" }}
              >
                Every successful move begins long before moving day. A
                Scanio coordinator works with you to take a careful
                inventory of your home, flag fragile and sentimental items
                that need special handling, and build a plan around your
                timeline and your building&apos;s rules. We confirm access
                times, prepare any certificates of insurance, and stay in
                touch in the days leading up to the move so nothing is left
                to chance. On the day itself, an experienced foreman leads
                a crew that already knows your plan inside and out.
              </p>

              {/* Packing and unpacking */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Packing and unpacking, your way
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-light leading-[1.75] md:leading-[1.85] mb-7 md:mb-9"
                style={{ color: "#4A5568" }}
              >
                Not every move calls for the same level of service, so we
                tailor each move to your needs.
              </p>

              <h4
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Packing options
              </h4>
              <div className="space-y-3.5 md:space-y-4 mb-8 md:mb-10">
                {packingOptions.map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle className="shrink-0 mt-1" size={15} style={{ color: "#0B5DB5" }} />
                    <p className="text-[14px] md:text-[15px] font-light leading-[1.7] md:leading-[1.75]" style={{ color: "#4A5568" }}>
                      <span className="font-medium" style={{ color: "#0A1628" }}>{title}</span> {desc}
                    </p>
                  </div>
                ))}
              </div>

              <h4
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Unpacking options
              </h4>
              <div className="space-y-3.5 md:space-y-4 mb-7 md:mb-9">
                {unpackingOptions.map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle className="shrink-0 mt-1" size={15} style={{ color: "#0B5DB5" }} />
                    <p className="text-[14px] md:text-[15px] font-light leading-[1.7] md:leading-[1.75]" style={{ color: "#4A5568" }}>
                      <span className="font-medium" style={{ color: "#0A1628" }}>{title}</span> {desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-[14px] md:text-[16px] font-light leading-[1.75] md:leading-[1.85] italic"
                style={{ color: "#4A5568" }}
              >
                Whatever you choose, our goal is the same: to deliver your
                home to your new address in move-in condition, with as
                little disruption to your life as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — light blue band that separates the page from the dark footer */}
      <section className="py-16 md:py-24 border-t border-b" style={{ background: "#EBF1F8", borderColor: "#D6E0ED" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "#0B5DB5" }}>
            Ready when you are
          </p>
          <h2
            className="text-[clamp(24px,3vw,38px)] font-light leading-[1.25] tracking-[-0.01em] mb-4"
            style={{ color: "#0A1628" }}
          >
            Ready to move?
          </h2>
          <p className="text-[15px] md:text-[16px] font-light leading-[1.75] mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "#4A5568" }}>
            Get a free in-home estimate and see why thousands trust Scanio
            with their residential moves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all hover:opacity-90"
              style={{ background: "#0A1628", color: "white" }}
            >
              Get an Estimate
            </Link>
            <a
              href="tel:2127226850"
              className="flex items-center justify-center gap-2 text-[13px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-60"
              style={{ color: "#0A1628" }}
            >
              <Phone size={14} />
              212.722.6850
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
