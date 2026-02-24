import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Residential Moving NYC | Scanio Moving & Storage",
  description:
    "Expert residential moving services in NYC. From studio apartments to luxury homes, Scanio handles every detail of your move with care and precision.",
};

const features = [
  "Full-service packing and unpacking",
  "Furniture disassembly and reassembly",
  "Elevator and stairwell navigation",
  "Co-op and condo building regulation compliance",
  "Parking permit coordination",
  "Floor and wall protection",
  "Organized labeling and inventory",
  "Same-day and next-day availability",
];

const steps = [
  {
    num: "01",
    title: "Contact & Consultation",
    desc: "Reach out to discuss the scope of your move. We'll talk about volume, origin, destination, and any special requirements.",
  },
  {
    num: "02",
    title: "In-Person Assessment",
    desc: "Our estimator visits your home to evaluate your needs, identify specialty items, and provide a detailed written estimate.",
  },
  {
    num: "03",
    title: "Packing Day",
    desc: "The day before your move, our professionals carefully pack everything using premium materials and organized labeling.",
  },
  {
    num: "04",
    title: "Moving Day",
    desc: "We load, transport, and unload everything to your new home. Furniture is reassembled and placed exactly where you want it.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Residential Moving
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Home Move, Handled
            <br />
            with Expert Care
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Moving in NYC is unlike anywhere else. Narrow hallways, strict
            building rules, elevator reservations, and Manhattan traffic — we
            know it all and handle it all.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Why Choose Scanio for Your Home Move
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                With over 80 years of moving New Yorkers, we understand the
                unique challenges of residential moves in the city. Our team is
                trained to handle everything from a cozy studio walkup to a
                Park Avenue penthouse with the same level of care and
                professionalism.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                We don&apos;t just move your belongings — we manage every detail
                of the process so you can focus on settling into your new home.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-text-secondary">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream rounded-lg p-10 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl font-bold text-navy mb-3">4-Step</p>
                <p className="text-text-secondary text-lg">Moving Process</p>
                <div className="w-16 h-1 bg-accent mx-auto mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Our Moving Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-white rounded-lg p-8">
                <p className="text-3xl font-bold text-accent mb-3">{s.num}</p>
                <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Move?
          </h2>
          <p className="text-gray-300 mb-8">
            Get a free in-home estimate and see why thousands trust Scanio with
            their residential moves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-md transition-colors"
            >
              Get Your Free Estimate
            </Link>
            <a
              href="tel:6468638070"
              className="border-2 border-white/30 hover:border-white text-white font-semibold px-10 py-4 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} /> 646.863.8070
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
