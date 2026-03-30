import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "FF&E & Designer Services NYC | Scanio Moving & Storage",
  description:
    "Specialized FF&E and designer moving services in NYC. White-glove handling for fine furniture, fixtures, antiques, and art. Trusted by top designers since 1941.",
};

const features = [
  "Fine furniture & fixture handling",
  "Antique & art transport",
  "Custom crating & packaging",
  "Climate-controlled storage",
  "Receiving & inspection services",
  "Warehouse staging & delivery",
  "Building & COI coordination",
  "Designer project management",
];

export default function PackingPage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left: Content */}
        <div className="lg:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-20 pt-[180px] pb-16 lg:py-0">
          <p
            className="text-[11px] uppercase font-bold tracking-[0.15em] mb-6"
            style={{ color: "#0B5DB5" }}
          >
            FF&E / Designer Services
          </p>
          <h1
            className="text-[clamp(32px,4vw,52px)] font-light leading-[1.15] tracking-[-0.02em] mb-8"
            style={{ color: "#0A1628" }}
          >
            Where Design Meets
            <br />
            Precision Logistics
          </h1>
          <p
            className="text-[16px] font-light leading-[1.85] mb-6 max-w-lg"
            style={{ color: "#6B7B8D" }}
          >
            Scanio is the trusted moving partner for New York&apos;s leading
            interior designers and architects. We understand that every piece
            tells a story — and we handle each one with the care it deserves.
          </p>
          <p
            className="text-[16px] font-light leading-[1.85] mb-10 max-w-lg"
            style={{ color: "#6B7B8D" }}
          >
            From receiving and inspecting deliveries at our warehouse to
            final placement in the home, we manage every step of your
            FF&amp;E project with white-glove precision.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-12 max-w-lg">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2">
                <CheckCircle className="shrink-0 mt-0.5" size={16} style={{ color: "#0B5DB5" }} />
                <span className="text-[13px]" style={{ color: "#6B7B8D" }}>{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/quote"
              className="text-[12px] tracking-[0.3em] uppercase font-medium px-8 py-4 border transition-all"
              style={{ color: "#0A1628", borderColor: "#0A1628" }}
            >
              Request Consultation
            </Link>
            <a
              href="https://designers.scaniomoving.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-60"
              style={{ color: "#0B5DB5" }}
            >
              Designer Portal
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
          <Image
            src="/services/ffe-vase.jpg"
            alt="Blue and white porcelain vase in Scanio staging area"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 70%" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#0A1628" }}>
        <div className="max-w-4xl mx-auto px-10 text-center">
          <h2
            className="text-[clamp(24px,3vw,36px)] font-light leading-[1.3] mb-4"
            style={{ color: "white" }}
          >
            Let&apos;s discuss your next project.
          </h2>
          <p className="text-[15px] font-light mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Contact us for a personalized consultation or access the Designer
            Portal for project management tools.
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
