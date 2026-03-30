import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Commercial Moving NYC | Scanio Moving & Storage",
  description:
    "Professional commercial and office moving services in NYC. Minimize downtime with Scanio's expert team. Tradeshow, retail, and corporate relocations.",
};

const features = [
  "Office & corporate relocations",
  "Tradeshow & exhibit logistics",
  "Retail store transitions",
  "Warehouse & stockroom moves",
  "Furniture disassembly & reassembly",
  "File & equipment organization",
  "After-hours & weekend scheduling",
  "IT equipment handling",
];

export default function CommercialPage() {
  return (
    <>
      {/* Header background — dark navy */}
      <div className="h-[150px] w-full" style={{ background: "#0A1628" }} />

      {/* Split: Image + Content */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-150px)]">
          {/* Right: Image */}
          <div className="lg:w-1/2 lg:order-2 relative min-h-[50vh] lg:min-h-0">
            <Image
              src="/services/commercial-lobby.jpg"
              alt="Scanio crew setting up furniture in a modern commercial lobby"
              fill
              priority
              quality={95}
              className="object-cover"
              style={{ objectPosition: "center center" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Left: Content */}
          <div className="lg:w-1/2 lg:order-1 py-20 px-10 md:px-16 lg:px-20 flex flex-col justify-center items-center text-center">
            <h2
              className="text-[clamp(26px,3vw,36px)] font-light leading-[1.25] tracking-[-0.01em] mb-8"
              style={{ color: "#0A1628" }}
            >
              Seamless Office &amp;
              <br />
              Business Relocations
            </h2>
            <p
              className="text-[16px] font-light leading-[1.85] mb-6 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              A commercial move involves more than just transporting
              furniture. It requires careful planning, coordination with
              building management, and execution that minimizes impact on
              your operations.
            </p>
            <p
              className="text-[16px] font-light leading-[1.85] mb-10 max-w-lg"
              style={{ color: "#6B7B8D" }}
            >
              Our experienced team works with you to create a detailed move
              plan that accounts for every workstation, server, filing
              cabinet, and piece of equipment. We offer after-hours and
              weekend moves to keep your business running without interruption.
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
            Plan your business move.
          </h2>
          <p className="text-[15px] font-light mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Get a customized moving plan and free estimate for your
            commercial relocation.
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
