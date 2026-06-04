import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";
import { COMPANY, TEL_HREF } from "@/lib/contact";

export const metadata = {
  title: "NYC Storage Services",
  description:
    "Secure, temperature-controlled storage in the NYC metro area, 3 miles from the Lincoln Tunnel. Flexible terms — pay only for the space you use.",
  alternates: { canonical: "/storage" },
};

const features = [
  "Temperature-controlled environment that protects against extreme heat and cold",
  "Secure facility monitored 24/7",
  "Month-to-month flexibility with no long commitment required",
  "Two-week rental increments for shorter needs",
  "You pay only for the space you actually use",
  "Just three miles from the Lincoln Tunnel",
  "Weekday access hours, with Saturday access available by appointment",
];

export default function StoragePage() {
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
              src="/services/storage.webp"
              alt="Scanio temperature-controlled storage facility"
              fill
              priority
              quality={95}
              className="object-cover"
              style={{ objectPosition: "center center" }}
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
                Storage
              </h1>
              <p
                className="text-[clamp(18px,2.4vw,28px)] font-light leading-[1.3] tracking-[-0.01em] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Secure, temperature-controlled storage you can trust
              </p>
              <p
                className="text-[15px] md:text-[16px] font-medium italic leading-[1.6] mb-8 md:mb-10"
                style={{ color: "#0B5DB5" }}
              >
                Your belongings, safe and sound, for as long as you need.
              </p>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-5 md:mb-6"
                style={{ color: "#2D3748" }}
              >
                Life does not always line up perfectly. Sometimes you are
                between homes, downsizing, renovating, or simply need a safe
                place for things you are not ready to part with. Whatever
                the reason, Scanio gives your belongings a home of their
                own, in a facility built to protect them.
              </p>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Our warehouse sits in Secaucus, New Jersey, just three miles
                from the Lincoln Tunnel, which puts it within easy reach of
                anywhere in the NYC metro area. Everything inside is kept
                in a temperature-controlled environment, so the extremes of
                summer heat and winter cold never get the chance to damage
                wood, fabric, electronics, artwork, or anything else you
                trust us to hold. And because the facility is monitored
                around the clock, your belongings are protected day and
                night.
              </p>

              {/* Storage that works around you */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Storage that works around you
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-8 md:mb-10"
                style={{ color: "#2D3748" }}
              >
                We believe you should pay for what you use and nothing
                more. Our storage is flexible by design, so whether you
                need a few weeks or a few years, the arrangement fits your
                situation instead of forcing you into someone else&apos;s
                terms.
              </p>

              <h4
                className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                What you get
              </h4>
              <div className="grid grid-cols-1 gap-y-2.5 md:gap-y-3 mb-10 md:mb-14">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="shrink-0 mt-0.5" size={15} style={{ color: "#0B5DB5" }} />
                    <span className="text-[14px] font-medium leading-[1.65] md:leading-[1.6]" style={{ color: "#2D3748" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Storage that connects to your move */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Storage that connects to your move
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85] mb-10 md:mb-14"
                style={{ color: "#2D3748" }}
              >
                Because storage is part of what we do, not a separate
                business, it folds seamlessly into your move. We can pick
                up, store, and later deliver your belongings as one
                coordinated effort, with the same careful handling and
                the same digital inventory throughout. Your things go
                from your door to our warehouse and back again without
                ever leaving our care.
              </p>

              {/* Ready to reserve your space */}
              <h3
                className="text-[clamp(20px,2.4vw,30px)] font-light leading-[1.25] mb-4 md:mb-5"
                style={{ color: "#0A1628" }}
              >
                Ready to reserve your space?
              </h3>
              <p
                className="text-[15px] md:text-[16px] font-normal leading-[1.8] md:leading-[1.85]"
                style={{ color: "#2D3748" }}
              >
                Tell us what you need to store and for how long, and we
                will help you find the right fit. Contact Scanio today for
                a storage quote.
              </p>

              {/* Warehouse address + NJ license */}
              <div
                className="mt-10 md:mt-12 pt-6 md:pt-8 border-t"
                style={{ borderColor: "#E5ECF4" }}
              >
                <p
                  className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium mb-3"
                  style={{ color: "#0A1628" }}
                >
                  Warehouse
                </p>
                <p
                  className="text-[14px] md:text-[15px] font-medium leading-[1.65]"
                  style={{ color: "#0A1628" }}
                >
                  Scanio Moving and Storage
                </p>
                <p
                  className="text-[14px] md:text-[15px] font-normal leading-[1.65]"
                  style={{ color: "#2D3748" }}
                >
                  355 County Avenue
                  <br />
                  Secaucus, NJ&nbsp;07094
                </p>
                <p
                  className="text-[12px] md:text-[13px] tracking-[0.12em] uppercase font-medium mt-3"
                  style={{ color: "#4A5568" }}
                >
                  NJ License: 39PC00099000
                </p>
              </div>
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
            Need storage space?
          </h2>
          <p className="text-[15px] md:text-[16px] font-normal leading-[1.75] mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "#2D3748" }}>
            Contact us to discuss your storage needs and get a personalized
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all hover:opacity-90"
              style={{ background: "#0A1628", color: "white" }}
            >
              Get a Storage Quote
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
