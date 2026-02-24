import Link from "next/link";
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
  "Full packing and crating services",
  "Climate-controlled transport options",
  "Real-time move coordination",
  "Comprehensive insurance coverage",
  "International moves available",
];

export default function LongDistancePage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Long Distance Moving
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Coast to Coast,
            <br />
            Handled with Care
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            ICC-licensed for interstate moves, we transport your belongings
            safely from New York to anywhere in the nation — and internationally
            through our trusted partners.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Trusted Long Distance Movers
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Moving long distance requires a different level of planning and
                care. Your belongings spend more time in transit, go through
                varied conditions, and need to arrive at the other end in the
                same condition they left.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                With Scanio, you get a dedicated team that handles every aspect
                of your long-distance move — from professional packing and
                custom crating to route planning and final delivery. Whether
                you&apos;re moving to Philadelphia, Los Angeles, or anywhere in
                between, we have you covered.
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
                <p className="text-5xl font-bold text-navy mb-3">Nationwide</p>
                <p className="text-text-secondary text-lg">
                  &amp; International Coverage
                </p>
                <div className="w-16 h-1 bg-accent mx-auto mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Planning a Long Distance Move?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us for a detailed estimate and personalized moving plan.
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
