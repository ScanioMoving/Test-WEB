import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";
import { COMPANY, TEL_HREF } from "@/lib/contact";

export const metadata = {
  title: "NYC Commercial Movers",
  description:
    "Office, warehouse, and retail relocation across NYC with minimal downtime. Trusted commercial movers since 1941. Call 212.722.6850.",
  alternates: { canonical: "/services/commercial" },
};

const features = [
  "Office, retail, warehouse, and institutional relocations",
  "Free on-site surveys and detailed move planning",
  "After-hours and weekend moves to minimize downtime",
  "Phased and floor-by-floor moves for larger operations",
  "Professional packing, labeling, and inventory tracking",
  "Furniture, cubicle, and workstation disassembly and reassembly",
  "Specialized handling for IT equipment, servers, and electronics",
  "Custom crating for sensitive, oversized, and high value items",
  "Records and file management with secure handling",
  "Short and long term storage in our secure warehouse",
  "Coordination with building management for COIs, freight elevators, and loading dock scheduling",
  "Full value protection options",
];

export default function CommercialPage() {
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
              src="/services/commercial-office.png"
              alt="Scanio movers in branded gear carrying boxes and clearing workstations during an office relocation"
              fill
              priority
              quality={100}
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
                Commercial Moving
              </h1>
              <p
                className="text-[clamp(18px,2.4vw,28px)] font-light leading-[1.3] tracking-[-0.01em] mb-6 md:mb-8"
                style={{ color: "#0A1628" }}
              >
                Keeping your business moving
              </p>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-5 md:mb-6"
                style={{ color: "#2D3748" }}
              >
                When a business relocates, the stakes are different. Every
                hour an office, store, or facility sits between locations is
                an hour of lost productivity. At Scanio Movers, we have been
                handling moves since 1941, and we understand that a
                commercial move is measured not just in boxes packed, but in
                how quickly and smoothly your team gets back to work. Our
                job is to make the transition seamless, so your business
                barely skips a beat.
              </p>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                From a single office suite to a multi-floor headquarters, a
                retail location, or a warehouse, we plan and execute
                commercial moves with the precision that keeps operations on
                schedule and budgets intact.
              </p>

              {/* Why businesses choose Scanio */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Why businesses choose Scanio
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-10 md:mb-12"
                style={{ color: "#2D3748" }}
              >
                A commercial move has more moving parts than a home, and it
                leaves no room for guesswork. That is where our experience
                shows. Many of our crews, coordinators, and warehouse staff
                have been with Scanio for decades, which means the people
                managing your relocation have done this work countless times
                before. They know how to sequence a move so your business is
                never fully offline, how to protect sensitive equipment, and
                how to work within the access rules of commercial buildings.
                That depth of experience is the difference between a move
                that disrupts your business and one that hardly registers.
              </p>

              {/* Services list */}
              <h4
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Our commercial services include
              </h4>
              <div className="grid grid-cols-1 gap-y-2.5 md:gap-y-3 mb-10 md:mb-14">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="shrink-0 mt-0.5" size={15} style={{ color: "#0B5DB5" }} />
                    <span className="text-[14px] font-medium leading-[1.65] md:leading-[1.6]" style={{ color: "#2D3748" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Planning that protects your timeline */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Planning that protects your timeline
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Every commercial move starts with a plan built around one
                goal: keeping your downtime to a minimum. A Scanio
                coordinator surveys your space, maps out what moves and in
                what order, and works around your operating hours, whether
                that means evenings, weekends, or a phased schedule that
                lets part of your team keep working while another part
                relocates. We handle the logistics behind the scenes, from
                certificates of insurance to elevator and dock reservations,
                so your staff can stay focused on their jobs instead of the
                move.
              </p>

              {/* Set up and ready to work */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Set up and ready to work
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85]"
                style={{ color: "#2D3748" }}
              >
                Getting your business out the door is only half the job. Our
                team places furniture, reassembles workstations, and sets
                everything where it belongs at the new location, so your
                people walk in and get straight back to work. We label and
                track items throughout the move so nothing goes missing and
                everything lands where it should.
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
            Plan your business move.
          </h2>
          <p className="text-[15px] md:text-[16px] font-normal leading-[1.75] mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "#2D3748" }}>
            Get a customized moving plan and free estimate for your
            commercial relocation.
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
