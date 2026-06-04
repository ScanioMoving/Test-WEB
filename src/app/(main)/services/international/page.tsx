import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";
import { COMPANY, TEL_HREF } from "@/lib/contact";

export const metadata = {
  title: "International Movers NYC",
  description:
    "International relocation from NYC with full logistics, customs, and door-to-door coordination. Experienced and trusted since 1941.",
  alternates: { canonical: "/services/international" },
};

const features = [
  "Door-to-door international delivery",
  "Customs documentation and coordination",
  "Ocean and air freight options",
  "Custom crating for overseas transit",
  "Climate-controlled storage in transit",
  "Insurance and valuation coverage",
  "Destination unpacking and setup",
  "Corporate and diplomatic relocations",
];

export default function InternationalPage() {
  return (
    <>
      {/* Spacer behind the fixed header */}
      <div className="h-[150px] w-full bg-white" />

      {/* Split: Scrollable content left + sticky image right */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row-reverse items-start">
          {/* Right (desktop) / Top (mobile): Sticky image */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-[150px] lg:self-start relative min-h-[42vh] md:min-h-[55vh] lg:min-h-0 lg:h-[calc(100vh-150px)]">
            <Image
              src="/services/international.webp"
              alt="International shipping and global relocations"
              fill
              priority
              quality={95}
              className="object-cover"
              style={{ objectPosition: "center center" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Left (desktop) / Below image (mobile): Scrollable content */}
          <div className="lg:w-1/2 w-full relative bg-white">
            <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
              <h1
                className="text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em] mb-3 md:mb-4"
                style={{ color: "#0B5DB5" }}
              >
                International Moving
              </h1>
              <p
                className="text-[clamp(18px,2.4vw,28px)] font-light leading-[1.3] tracking-[-0.01em] mb-6 md:mb-8"
                style={{ color: "#0A1628" }}
              >
                Global relocations, handled door to door
              </p>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-5 md:mb-6"
                style={{ color: "#2D3748" }}
              >
                Moving across borders is its own kind of logistics. Customs
                rules, freight schedules, port handling, and destination
                services all have to line up before your belongings can
                arrive safely on the other side. Scanio coordinates the
                entire process — together with our sister company,{" "}
                <span className="font-medium" style={{ color: "#0A1628" }}>
                  Sea &amp; Air International
                </span>{" "}
                — so you get one accountable team from your first call
                through final delivery overseas.
              </p>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-8 md:mb-10"
                style={{ color: "#2D3748" }}
              >
                Whether you are relocating to London, Tel Aviv, Tokyo, or
                anywhere in between, start with a conversation with our
                team. We will scope the move, recommend the right shipping
                approach, and handle the logistics, customs, and
                destination services end to end.
              </p>

              {/* Primary CTA — contact Scanio first */}
              <div className="flex flex-wrap items-center gap-4 mb-12 md:mb-14">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[12px] tracking-[0.3em] uppercase font-medium px-8 py-4 transition-all hover:opacity-90"
                  style={{ background: "#0B5DB5", color: "white" }}
                >
                  Request a Consultation
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

              {/* What's included */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                What an international move includes
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-8 md:mb-10"
                style={{ color: "#2D3748" }}
              >
                Every overseas move is coordinated end to end. From the
                first inventory at your home to the moment your belongings
                are placed in your new residence abroad, your Scanio
                coordinator manages each step so you are never left
                wondering where things stand.
              </p>

              <h4
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Included services
              </h4>
              <div className="grid grid-cols-1 gap-y-2.5 md:gap-y-3 mb-12 md:mb-14">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="shrink-0 mt-0.5" size={15} style={{ color: "#0B5DB5" }} />
                    <span className="text-[14px] font-medium leading-[1.65] md:leading-[1.6]" style={{ color: "#2D3748" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Customs and documentation */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Customs and documentation
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-10 md:mb-12"
                style={{ color: "#2D3748" }}
              >
                Every country has its own paperwork, duties, and inspection
                process. We prepare the documentation your destination
                requires, coordinate with customs brokers on both ends, and
                keep you informed at each clearance milestone. The goal is
                simple: no surprise holds at the port and no last-minute
                paperwork on your end.
              </p>

              {/* Ocean and air freight */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Ocean and air, sized to your move
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-10 md:mb-12"
                style={{ color: "#2D3748" }}
              >
                A full container, a shared shipment, or air freight when
                the calendar is tight — we recommend the option that fits
                your timeline and budget, then book and manage the
                shipment under one point of contact. Storage in transit is
                available on either end if your dates do not line up.
              </p>

              {/* Settling in at your destination */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Settling in at your destination
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85]"
                style={{ color: "#2D3748" }}
              >
                A vetted partner network handles the final mile in
                country, so your belongings are unloaded, unpacked, and
                placed where they belong by people who know the local
                buildings and access rules. You arrive to a home that is
                ready, not a stack of crates to sort through alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — matches the Residential bottom CTA. No links to sea-air.net. */}
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
          <p className="text-[15px] md:text-[16px] font-normal leading-[1.75] mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "#2D3748" }}>
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
