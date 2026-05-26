import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Long Distance Moving | Scanio Moving & Storage NYC",
  description:
    "ICC-licensed (MC93512) interstate moving from NYC to anywhere in the US. Scanio carries your shipment coast to coast under one accountable team — no mystery carriers.",
};

const features = [
  "Direct, dedicated transport with your shipment in our care the entire way",
  "Realistic delivery windows you can actually plan your life around",
  "A single point of contact who manages your move coast to coast",
  "Secure storage in transit if your new home is not quite ready",
  "Consolidated and shared-load options when you want to save on cost",
  "Full value protection for the miles ahead",
];

export default function LongDistancePage() {
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

          {/* Right: Scrollable content */}
          <div className="lg:w-1/2 w-full relative bg-white">
            <div className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
              <h1
                className="text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em] mb-3 md:mb-4"
                style={{ color: "#0B5DB5" }}
              >
                Long Distance Moving
              </h1>
              <p
                className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase font-medium mb-5 md:mb-6"
                style={{ color: "#4A5568" }}
              >
                ICC MC93512
              </p>
              <p
                className="text-[clamp(18px,2.4vw,28px)] font-light leading-[1.3] tracking-[-0.01em] mb-6 md:mb-8"
                style={{ color: "#0A1628" }}
              >
                From one coast to the other, in steady hands
              </p>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                A move across the country is a different kind of journey.
                The distance is greater, the timeline is longer, and the
                question that matters most is simple: can you trust the
                company that drives away with everything you own? Since
                1941, Scanio Movers has been earning that trust, one long
                haul at a time. When your belongings leave with us, they
                stay with us, from the moment we load the truck to the day
                we set the last box down in your new home.
              </p>

              {/* One company, the whole way there */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                One company, the whole way there
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-12"
                style={{ color: "#2D3748" }}
              >
                The biggest risk in a long distance move is how many hands
                your belongings pass through. Many companies hand your
                shipment off to a chain of unknown carriers and warehouses
                along the route, and that is where things get lost, damaged,
                or delayed. Scanio does it differently. We keep your move
                under our own management from start to finish, so there is
                always one accountable team that knows exactly where your
                belongings are and when they will arrive. No mystery
                carriers, no surprises.
              </p>

              {/* Features list */}
              <h4
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                What sets a Scanio long haul apart
              </h4>
              <div className="grid grid-cols-1 gap-y-2.5 md:gap-y-3 mb-10 md:mb-14">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="shrink-0 mt-0.5" size={15} style={{ color: "#0B5DB5" }} />
                    <span className="text-[13px] md:text-[14px] font-medium leading-[1.6]" style={{ color: "#2D3748" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Built around your calendar */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Built around your calendar
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                A cross country move touches everything: closing dates,
                lease starts, school calendars, work transfers. We build
                your move around those real-world dates, not around our
                convenience. Your coordinator works backward from the day
                you need to be settled, then plans the packing, pickup,
                transport, and delivery so the pieces line up. If your new
                place will not be ready in time, we hold your belongings
                safely in our warehouse until you are.
              </p>

              {/* Digital Inventory Management */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Digital inventory management
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Before anything leaves your home, our team builds a complete
                digital inventory of every item we pick up, each one logged
                with condition remarks and photos. You receive your own copy
                the moment the pickup is finished, so you know exactly what
                was loaded and the state it was in before it ever hit the
                road. When your belongings arrive, you can check each item
                against the list and see for yourself that everything made
                the journey just as it left. It is full transparency from
                start to finish, with no guesswork and nothing taken on
                faith.
              </p>

              {/* Know where your belongings are */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Know where your belongings are
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Distance should not mean uncertainty. We keep you informed
                throughout the journey so you always know the status of your
                shipment and when to expect it. That peace of mind is the
                whole point of hiring professionals for a move this big.
              </p>

              {/* Shuttle Transfers */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Shuttle transfers
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Not every destination can accommodate a full-size moving
                trailer. Steep driveways, narrow city streets, low branches,
                and restricted complexes can all stand between the truck and
                your front door. When that happens, we arrange a shuttle
                transfer, moving your belongings onto a smaller vehicle that
                can make the final approach. It is one more detail we handle
                so a tight street never turns into a problem on your moving
                day.
              </p>

              {/* Anywhere the road, the sea, or the sky reaches */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Anywhere the road, the sea, or the sky reaches
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.85] mb-6"
                style={{ color: "#2D3748" }}
              >
                Some moves go beyond the lower 48. Through our sister
                company, <a
                  href="https://sea-air.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
                  style={{ color: "#0B5DB5" }}
                >
                  Sea &amp; Air International
                </a>, Scanio carries households and businesses well past
                state lines, by land, by sea, and by air. Whether you are
                relocating to another state or another continent, we
                handle the logistics, customs documentation, and careful
                handling that an international move demands.
              </p>
              <a
                href="https://sea-air.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase font-medium px-7 py-3.5 border transition-all hover:bg-[#0B5DB5] hover:text-white"
                style={{ color: "#0B5DB5", borderColor: "#0B5DB5" }}
              >
                Visit Sea &amp; Air International
                <ExternalLink size={13} />
              </a>
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
            Planning a long distance move?
          </h2>
          <p className="text-[15px] md:text-[16px] font-normal leading-[1.75] mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "#2D3748" }}>
            Contact us for a detailed estimate and personalized moving plan.
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
