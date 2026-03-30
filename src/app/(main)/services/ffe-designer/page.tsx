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

export default function FFEDesignerPage() {
  return (
    <>
      {/* Dark header background */}
      <div className="h-[150px] w-full" style={{ background: "#0A1628" }} />

      {/* Split: Image + Content */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-150px)]">
          {/* Left: Image */}
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-0">
            <Image
              src="/services/ffe-vase.jpg"
              alt="Blue and white porcelain vase in Scanio staging area"
              fill
              priority
              quality={95}
              className="object-cover"
              style={{ objectPosition: "center bottom" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 py-20 px-10 md:px-16 lg:px-20 flex flex-col justify-center items-center text-center">
            <h2
              className="text-[clamp(26px,3vw,36px)] font-light leading-[1.25] tracking-[-0.01em] mb-8"
              style={{ color: "#0A1628" }}
            >
              Full-Service FF&amp;E
              <br />
              Project Management
            </h2>
            <p
              className="text-[16px] font-light leading-[1.85] mb-6 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              Scanio understands that every piece tells a story — and we
              handle each one with the care it deserves. From receiving and
              inspecting deliveries at our warehouse to final placement in
              the home, we manage every step of your FF&amp;E project with
              white-glove precision.
            </p>
            <p
              className="text-[16px] font-light leading-[1.85] mb-10 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              Our climate-controlled Secaucus facility is just 3 miles from
              the Lincoln Tunnel — ideal for staging, storage, and
              coordinated deliveries into Manhattan.
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
