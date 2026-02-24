import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Packing & Unpacking Services NYC | Scanio Moving & Storage",
  description:
    "Professional packing and unpacking services in NYC. Custom packaging, organized labeling, and premium materials. Let Scanio handle the details.",
};

const features = [
  "Full-home packing services",
  "Custom packaging for fragile items",
  "Organized labeling system",
  "Premium packing materials",
  "Wardrobe boxes for clothing",
  "Dish and glassware packing kits",
  "Custom crating for oversized items",
  "Full unpacking and placement",
];

export default function PackingPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Packing & Unpacking
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Packing,
            <br />
            Perfect Results
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Let our expert packers handle everything. From kitchen essentials to
            irreplaceable heirlooms, we pack it all with care and precision.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Take the Stress Out of Packing
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Packing is often the most time-consuming and stressful part of
                any move. Our professional packers make it effortless. We bring
                all the materials, organize everything with a clear labeling
                system, and ensure every item — from everyday plates to
                delicate crystal — is protected for transport.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                At your destination, our team can unpack everything and place
                items exactly where you want them, so you can start enjoying
                your new space right away.
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
                <p className="text-5xl font-bold text-navy mb-3">100%</p>
                <p className="text-text-secondary text-lg">
                  Premium Materials
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
            Let Us Handle the Packing
          </h2>
          <p className="text-gray-300 mb-8">
            Request a free estimate and find out how our packing services can
            make your move stress-free.
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
