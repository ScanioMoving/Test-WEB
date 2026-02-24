import Link from "next/link";
import { Phone, Palette, Clock3, Piano, Award } from "lucide-react";

export const metadata = {
  title: "White Glove Moving NYC | Fine Art, Antiques & Pianos | Scanio",
  description:
    "Specialized white glove moving for fine art, antiques, pianos, and irreplaceable items. Custom crating, climate-controlled transport. Serving NYC since 1941.",
};

const specialties = [
  {
    icon: Palette,
    title: "Fine Art Moving",
    desc: "Museum-quality handling for paintings, sculptures, and gallery pieces. Custom crating, climate-controlled vehicles, and white glove delivery. We've served auction houses, galleries, and private collectors for over 70 years.",
  },
  {
    icon: Clock3,
    title: "Antique Moving",
    desc: "Every antique tells a story — and we make sure it continues. Custom crates and padding tailored to each piece, climate-controlled transport and storage, and a team trained in the nuances of handling age-sensitive items.",
  },
  {
    icon: Piano,
    title: "Piano & Musical Instruments",
    desc: "From Steinway concert grands to upright pianos, harps to cellos — our team is trained in the specific techniques required for safe piano and instrument transport. Custom covers, protective shoes for legs, and careful navigation through any space.",
  },
  {
    icon: Award,
    title: "Collector's Items",
    desc: "China, chandeliers, game tables, and other collector's items receive the same meticulous care. We assess each item individually and create a custom handling plan to ensure safe transport.",
  },
];

export default function WhiteGlovePage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            White Glove Moving
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Museum-Quality Care
            <br />
            for Your Finest Pieces
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            When ordinary care isn&apos;t enough. Our white glove service
            provides the highest level of protection for fine art, antiques,
            pianos, and irreplaceable items.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Specialized Expertise
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Over 80 years of experience handling the most delicate and
              valuable items in New York City.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="bg-cream rounded-lg p-8 border border-gray-100"
              >
                <s.icon className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {s.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Our White Glove Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Assessment", desc: "We inspect each item and create a custom handling plan based on material, age, and value." },
              { num: "02", title: "Custom Crating", desc: "Built-to-spec crates and packaging using archival materials designed for each piece." },
              { num: "03", title: "Transport", desc: "Climate-controlled vehicles with air-ride suspension for the smoothest possible transit." },
              { num: "04", title: "Delivery", desc: "White glove placement at destination with careful unpacking and debris removal." },
            ].map((s) => (
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
            Have Valuable Items to Move?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us for a specialized consultation. We&apos;ll assess your
            items and create a custom moving plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-md transition-colors"
            >
              Request Consultation
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
