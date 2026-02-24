import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Commercial Moving NYC | Scanio Moving & Storage",
  description:
    "Professional commercial and office moving services in NYC. Minimize downtime with Scanio's expert team. Tradeshow, retail, and corporate relocations.",
};

const features = [
  "Office and corporate relocations",
  "Tradeshow and exhibit logistics",
  "Retail store transitions",
  "Warehouse and stockroom moves",
  "Furniture disassembly and reassembly",
  "File and equipment organization",
  "After-hours and weekend scheduling",
  "IT equipment handling",
];

export default function CommercialPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Commercial Moving
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seamless Office &amp;
            <br />
            Business Relocations
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Minimize downtime and disruption with our expertly managed
            commercial moving services. We plan, coordinate, and execute so
            your business keeps running.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Business Moves Done Right
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                A commercial move involves more than just transporting
                furniture. It requires careful planning, coordination with
                building management, and execution that minimizes impact on your
                operations.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Our experienced team works with you to create a detailed move
                plan that accounts for every workstation, server, filing
                cabinet, and piece of equipment. We offer after-hours and
                weekend moves to keep your business running without interruption.
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
                <p className="text-5xl font-bold text-navy mb-3">Zero</p>
                <p className="text-text-secondary text-lg">Downtime Goal</p>
                <div className="w-16 h-1 bg-accent mx-auto mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Plan Your Business Move
          </h2>
          <p className="text-gray-300 mb-8">
            Get a customized moving plan and free estimate for your commercial
            relocation.
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
