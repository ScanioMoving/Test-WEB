import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Long Distance Moving | Scanio Moving & Storage NYC",
  description:
    "ICC-licensed interstate moving from NYC to anywhere in the US. Scanio handles long distance relocations with dedicated trucks and expert logistics.",
};

const features = [
  "ICC-licensed interstate operations",
  "Dedicated trucks for your move",
  "Professional route planning",
  "Full packing & crating services",
  "Climate-controlled transport options",
  "Real-time move coordination",
  "Comprehensive insurance coverage",
  "International moves available",
];

export default function LongDistancePage() {
  return (
    <>
      {/* Header background — dark navy */}
      <div className="h-[150px] w-full" style={{ background: "#0A1628" }} />

      {/* Split: Image + Content */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-150px)]">
          {/* Left: Image */}
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-0">
            <Image
              src="/services/long-distance-truck.jpg"
              alt="Scanio Moving & Storage long distance truck on a NYC street"
              fill
              priority
              quality={95}
              className="object-cover"
              style={{ objectPosition: "20% center" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 py-20 px-10 md:px-16 lg:px-20 flex flex-col justify-center items-center text-center">
            <h2
              className="text-[clamp(26px,3vw,36px)] font-light leading-[1.25] tracking-[-0.01em] mb-8"
              style={{ color: "#0A1628" }}
            >
              Coast to Coast,
              <br />
              Handled with Care
            </h2>
            <p
              className="text-[16px] font-light leading-[1.85] mb-6 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              Moving long distance requires a different level of planning and
              care. Your belongings spend more time in transit, go through
              varied conditions, and need to arrive at the other end in the
              same condition they left.
            </p>
            <p
              className="text-[16px] font-light leading-[1.85] mb-10 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              With Scanio, you get a dedicated team that handles every aspect
              of your long-distance move &mdash; from professional packing and
              custom crating to route planning and final delivery. Whether
              you&apos;re moving to Philadelphia, Los Angeles, or anywhere in
              between, we have you covered.
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
            Planning a long distance move?
          </h2>
          <p className="text-[15px] font-light mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Contact us for a detailed estimate and personalized moving plan.
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
