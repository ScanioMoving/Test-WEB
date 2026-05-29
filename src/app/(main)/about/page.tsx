"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { COMPANY, TEL_HREF } from "@/lib/contact";

const rotatingPhotos = [
  {
    src: "/about/handshake-client.png",
    alt: "A Scanio mover shaking hands with a longtime client after a careful packing job",
  },
  {
    src: "/about/warehouse-crew.jpg",
    alt: "A Scanio team member at our warehouse, organizing client belongings on managed shelving",
  },
  {
    src: "/about/scanio-truck-crew.jpg",
    alt: "Scanio crew in front of the company truck on a New York City street",
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
      {/* Spacer behind the fixed header */}
      <div className="h-[150px] w-full bg-white" />

      {/* Split: Sticky photo carousel left + scrolling story right */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left: Sticky rotating team photos */}
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
                  // The first photo (handshake-client.png) has a thin white
                  // border baked into the source — zoom slightly so it
                  // crops out beyond the visible area.
                  style={i === 0 ? { transform: "scale(1.05)" } : undefined}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-opacity hover:opacity-100"
              style={{ color: "white", opacity: 0.7 }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-opacity hover:opacity-100"
              style={{ color: "white", opacity: 0.7 }}
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

          {/* Right: Scrolling story */}
          <div className="lg:w-1/2 w-full relative bg-white">
            <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
              <p
                className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: "#0B5DB5" }}
              >
                Since 1941
              </p>
              <h1
                className="text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em] mb-8 md:mb-10"
                style={{ color: "#0B5DB5" }}
              >
                The Scanio Story
              </h1>

              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-6"
                style={{ color: "#2D3748" }}
              >
                Scanio Movers was founded in 1941 by Frank Scanio, in an era
                when a moving company&apos;s reputation was built one
                handshake and one carefully carried piece of furniture at a
                time. From the start, Scanio earned its name the way the
                best companies do, through honest work, dependable service,
                and treating every customer&apos;s belongings as if they
                were its own. For more than eight decades, that reputation
                has endured.
              </p>

              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-6"
                style={{ color: "#2D3748" }}
              >
                In 1999, Nir Shuminer purchased Scanio Movers, taking the
                helm of a company with a proud history and a name that
                already meant something in the moving business. Rather than
                start something new, Nir chose to become the steward of an
                established legacy. He preserved the values that had carried
                Scanio through the decades while bringing fresh energy,
                modern systems, and a vision for growth. Under his
                leadership, Scanio expanded its capabilities and its reach,
                building the foundation of the company customers rely on
                today.
              </p>

              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-6"
                style={{ color: "#2D3748" }}
              >
                In 2012, Nir&apos;s son, Idan Shuminer, joined the business,
                and what had been one man&apos;s stewardship became a true
                family enterprise. Together, the father and son duo run
                Scanio Movers as a hands-on team. Nir brings decades of
                experience and hard-earned instinct, while Idan brings a
                forward-looking approach to technology, logistics, and
                customer service. It&apos;s a partnership that blends the
                wisdom of experience with the drive to keep improving.
              </p>

              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-6"
                style={{ color: "#2D3748" }}
              >
                That same sense of family extends to our entire team. Many
                of our people, from the crews who pack and deliver, to the
                staff who coordinate every move in our operations office,
                to the team who care for your belongings in our warehouse,
                have been with Scanio for decades. That kind of loyalty is
                rare in this industry, and it makes all the difference. It
                means the people handling your move at every stage are not
                temporary hires learning on the job. They are seasoned
                professionals who know this work inside and out and take
                pride in doing it right. Experience like that cannot be
                rushed or taught overnight, and it shows in everything we
                do.
              </p>

              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-6"
                style={{ color: "#2D3748" }}
              >
                Today, Scanio Movers handles far more than local moves.
                Through its work in international shipping and long-distance
                relocation, the company moves households and belongings
                across the country and around the world, by land, by sea,
                and by air. Yet for all that growth, what defines Scanio
                hasn&apos;t changed since 1941: a family-owned commitment
                to care, reliability, and doing right by every customer.
              </p>

              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-10 md:mb-12"
                style={{ color: "#2D3748" }}
              >
                More than eighty years after Frank Scanio first opened the
                doors, Scanio Movers continues that legacy, now in the
                hands of a father and son team who treat every move as a
                matter of trust.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/quote"
                  className="text-[12px] tracking-[0.3em] uppercase font-medium px-8 py-4 border transition-all hover:bg-[#0A1628] hover:text-white"
                  style={{ color: "#0A1628", borderColor: "#0A1628" }}
                >
                  Get Free Estimate
                </Link>
                <a
                  href={TEL_HREF}
                  className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-60"
                  style={{ color: "#0A1628" }}
                >
                  <Phone size={14} />
                  {COMPANY.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values + Licenses */}
      <section className="py-20" style={{ background: "#F5F8FC" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">

          {/* What We Stand For */}
          <h2
            className="text-[clamp(24px,3vw,32px)] font-light leading-[1.3] mb-4"
            style={{ color: "#0A1628" }}
          >
            What We Stand For
          </h2>
          <p
            className="text-[15px] md:text-[16px] font-normal leading-[1.75] mb-14 max-w-2xl mx-auto"
            style={{ color: "#2D3748" }}
          >
            Our values have guided us since 1941 and continue to define every
            move we make today.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { stat: "80+", label: "Years of Service", desc: "Trusted by generations of New Yorkers since 1941." },
              { stat: "NYC", label: "Based & Operated", desc: "We know every building, block, and borough." },
              { stat: "Family", label: "Owned & Run", desc: "A father and son team handling every move as a matter of trust." },
              { stat: "365", label: "Days a Year", desc: "Same crews, same care, every day of the year." },
            ].map((v) => (
              <div key={v.label} className="text-center">
                <p className="text-[32px] md:text-[36px] font-light mb-1" style={{ color: "#0B5DB5" }}>{v.stat}</p>
                <p className="text-[13px] tracking-[0.1em] uppercase font-medium mb-3" style={{ color: "#0A1628" }}>{v.label}</p>
                <p className="text-[14px] md:text-[15px] font-normal leading-[1.7]" style={{ color: "#2D3748" }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Licensed & Insured */}
          <div className="border-t pt-16" style={{ borderColor: "#D6E0ED" }}>
            <h2
              className="text-[clamp(20px,2.5vw,28px)] font-light mb-10"
              style={{ color: "#0A1628" }}
            >
              Licensed &amp; Insured
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {COMPANY.licenses.map((l) => (
                <div key={l.value} className="bg-white px-8 py-6 text-center">
                  <p className="text-[11px] tracking-[0.1em] uppercase font-light mb-1" style={{ color: "#4A5568" }}>{l.label}</p>
                  <p className="text-[18px] font-medium" style={{ color: "#0A1628" }}>{l.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — light blue band */}
      <section className="py-16 md:py-24 border-t border-b" style={{ background: "#EBF1F8", borderColor: "#D6E0ED" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "#0B5DB5" }}>
            Ready when you are
          </p>
          <h2
            className="text-[clamp(24px,3vw,38px)] font-light leading-[1.25] tracking-[-0.01em] mb-4"
            style={{ color: "#0A1628" }}
          >
            Experience the Scanio difference.
          </h2>
          <p className="text-[15px] md:text-[16px] font-normal leading-[1.75] mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "#2D3748" }}>
            Join thousands of satisfied customers who trust their moves to
            NYC&apos;s finest moving company.
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
              href={TEL_HREF}
              className="flex items-center justify-center gap-2 text-[13px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-60"
              style={{ color: "#0A1628" }}
            >
              <Phone size={14} />
              {COMPANY.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
