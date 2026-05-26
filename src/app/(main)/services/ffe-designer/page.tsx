import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Designer Services NYC | Scanio Moving & Storage",
  description:
    "FF&E and designer moving services in NYC. Receiving, inspection, temperature-controlled staging, and white-glove installation for interior designers and architects. Trusted since 1941.",
};

const features = [
  "Fine furniture and fixture handling",
  "Antique and fine art transport",
  "Custom crating and packaging",
  "Temperature-controlled storage",
  "Receiving and inspection services, with condition documentation",
  "Warehouse staging and consolidated delivery",
  "Building access and COI coordination",
  "Dedicated designer project management",
];

export default function FFEDesignerPage() {
  return (
    <>
      {/* Spacer behind the fixed header */}
      <div className="h-[150px] w-full bg-white" />

      {/* Split: Sticky image left + scrollable content right */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left: Sticky image */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-[150px] lg:self-start relative min-h-[42vh] md:min-h-[55vh] lg:min-h-0 lg:h-[calc(100vh-150px)]">
            <Image
              src="/services/ffe-vase.jpg"
              alt="Blue and white porcelain vase flanked by studio lamps in Scanio staging area"
              fill
              priority
              quality={95}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Scrollable content */}
          <div className="lg:w-1/2 w-full relative bg-white">
            <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
              <h1
                className="text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em] mb-3 md:mb-4"
                style={{ color: "#0B5DB5" }}
              >
                Designer Services
              </h1>
              <p
                className="text-[clamp(18px,2.4vw,28px)] font-light leading-[1.3] tracking-[-0.01em] mb-6 md:mb-8"
                style={{ color: "#0A1628" }}
              >
                The trusted partner behind a flawless install
              </p>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Behind every beautifully finished room is a logistics
                operation most clients never see. Furniture arrives from a
                dozen vendors on a dozen timelines, every piece needs to be
                inspected, nothing can be damaged, and it all has to come
                together on install day exactly when and where you say.
                That is the part we handle. Scanio works alongside interior
                designers, architects, and their teams as the dependable
                engine behind the scenes, so you can focus on the vision
                while we manage the freight, the floor, and the final
                placement.
              </p>

              {/* Full-service FF&E project management */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Full-service FF&amp;E project management
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Scanio understands that every piece tells a story, and we
                handle each one with the care it deserves. From the moment
                a delivery arrives at our warehouse to the moment it is set
                in place in the home, we manage every step of your
                FF&amp;E project with white glove precision. We receive
                and inspect each shipment against your specifications, flag
                and document any issues before they become problems, and
                keep everything organized and accounted for until the day
                it is needed.
              </p>

              {/* Built for the way designers work */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Built for the way designers work
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Our temperature-controlled Secaucus facility sits just
                three miles from the Lincoln Tunnel, making it an ideal
                base for receiving, staging, and coordinated deliveries
                into Manhattan and across the metro area. Pieces can
                arrive early and wait safely, full rooms can be staged and
                consolidated ahead of an install, and deliveries can be
                scheduled to land precisely when the site is ready. No
                clutter on the job site, no vendors arriving at the wrong
                time, no surprises.
              </p>

              {/* What we handle for designers */}
              <h4
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                What we handle for designers
              </h4>
              <div className="grid grid-cols-1 gap-y-2.5 md:gap-y-3 mb-10 md:mb-14">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="shrink-0 mt-0.5" size={15} style={{ color: "#0B5DB5" }} />
                    <span className="text-[13px] md:text-[14px] font-medium leading-[1.6]" style={{ color: "#2D3748" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* One point of contact */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                One point of contact, start to finish
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Every designer project at Scanio is managed by a dedicated
                point of contact who knows your project, your pieces, and
                your timeline. You always know what has arrived, what
                condition it is in, and what is scheduled next, with the
                same digital inventory and documentation we provide on
                every job. When install day comes, our crews deliver,
                place, and set everything according to your plan, then
                clear away all packaging, leaving the space ready for the
                reveal.
              </p>

              {/* Let's plan your next project */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Let&apos;s plan your next project
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85]"
                style={{ color: "#2D3748" }}
              >
                Whether it is a single signature piece or a full residence,
                Scanio gives your project the receiving, storage, and
                installation partner it deserves. Reach out to discuss your
                project, or log in to your designer portal to manage active
                deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — light blue band */}
      <section className="py-16 md:py-24 border-t border-b" style={{ background: "#EBF1F8", borderColor: "#D6E0ED" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "#0B5DB5" }}>
            Designer services
          </p>
          <h2
            className="text-[clamp(24px,3vw,38px)] font-light leading-[1.25] tracking-[-0.01em] mb-4"
            style={{ color: "#0A1628" }}
          >
            Let&apos;s plan your next project.
          </h2>
          <p className="text-[15px] md:text-[16px] font-normal leading-[1.75] mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "#2D3748" }}>
            Contact us to discuss your project, or log in to your designer
            portal to manage active deliveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all hover:opacity-90"
              style={{ background: "#0A1628", color: "white" }}
            >
              Request a Consultation
            </Link>
            <a
              href="https://designers.scaniomoving.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 border transition-all hover:opacity-80"
              style={{ color: "#0A1628", borderColor: "#0A1628" }}
            >
              Designer Portal
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
