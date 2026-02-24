import Link from "next/link";
import {
  Home,
  Building2,
  Truck,
  Gem,
  Package,
  Warehouse,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Moving Services | Scanio Moving & Storage NYC",
  description:
    "Comprehensive moving services in NYC: residential, commercial, long distance, white glove, packing, and storage. Licensed and insured since 1941.",
};

const services = [
  {
    icon: Home,
    title: "Residential Moving",
    desc: "Whether you're moving across the hall or across the borough, our expert team handles every aspect of your home move. We navigate NYC's unique challenges — narrow hallways, elevator reservations, co-op regulations — so you don't have to worry about a thing.",
    features: [
      "Full-service packing and unpacking",
      "Furniture disassembly and reassembly",
      "Elevator and stairwell navigation",
      "Building regulation compliance",
    ],
    href: "/services/residential",
  },
  {
    icon: Building2,
    title: "Commercial Moving",
    desc: "Minimize downtime with our efficient commercial moving services. From small offices to large corporate relocations, we plan and execute every detail to keep your business running smoothly through the transition.",
    features: [
      "Office and corporate relocations",
      "Tradeshow and retail moves",
      "File and equipment organization",
      "After-hours and weekend moves",
    ],
    href: "/services/commercial",
  },
  {
    icon: Truck,
    title: "Long Distance Moving",
    desc: "ICC-licensed for interstate moves, we transport your belongings safely from coast to coast. Our experienced logistics team plans every route and handles all the details for a seamless long-distance relocation.",
    features: [
      "Interstate moves nationwide",
      "Dedicated trucks and teams",
      "Real-time move coordination",
      "Full insurance coverage",
    ],
    href: "/services/long-distance",
  },
  {
    icon: Gem,
    title: "White Glove Moving",
    desc: "Specialized handling for your most precious possessions. With over 80 years of experience, we provide museum-quality care for fine art, antiques, pianos, and other irreplaceable items.",
    features: [
      "Fine art and gallery pieces",
      "Antique furniture and collectibles",
      "Pianos and musical instruments",
      "Custom crating and climate-controlled transport",
    ],
    href: "/services/white-glove",
  },
  {
    icon: Package,
    title: "Packing & Unpacking",
    desc: "Let our professional packers handle everything. We use premium materials and proven techniques to ensure every item — from kitchen plates to crystal chandeliers — arrives in perfect condition.",
    features: [
      "Full-home packing services",
      "Custom packaging for fragile items",
      "Organized labeling system",
      "Unpacking and placement at destination",
    ],
    href: "/services/packing",
  },
  {
    icon: Warehouse,
    title: "Storage Solutions",
    desc: "Our secure, climate-controlled facility in Secaucus, NJ — just 3 miles from the Lincoln Tunnel — offers flexible storage options for any duration. Pay only for the space you use.",
    features: [
      "Climate-controlled environment",
      "Month-to-month or short-term",
      "Secure and monitored facility",
      "Weekday access hours",
    ],
    href: "/storage",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Moving Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            From a studio apartment on the Upper West Side to a corporate office
            in Midtown, we provide tailored solutions for every type of move.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, i) => (
            <div
              key={service.href}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="text-accent" size={28} />
                  <h2 className="text-2xl font-bold text-navy">
                    {service.title}
                  </h2>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1">&#10003;</span>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-accent transition-colors"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-cream rounded-lg aspect-[4/3] flex items-center justify-center">
                  <service.icon className="text-navy/20" size={80} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us for a free, no-obligation consultation. We&apos;ll assess
            your needs and recommend the right services for your move.
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
              <Phone size={18} />
              646.863.8070
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
