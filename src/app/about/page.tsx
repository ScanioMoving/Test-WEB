import { Shield, Leaf, Award, Users, Truck, Recycle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Scanio Moving & Storage | NYC Movers Since 1941",
  description:
    "Learn about Scanio Moving & Storage — NYC's premier moving company since 1941. Licensed, insured, and committed to green moving practices.",
};

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    desc: "Over 80 years of service built on a foundation of integrity. We're licensed, bonded, and insured for your complete protection.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our movers are trained professionals who understand the unique challenges of NYC moves — from narrow hallways to strict building regulations.",
  },
  {
    icon: Award,
    title: "Attention to Detail",
    desc: "Every item is handled with care. We treat your belongings as if they were our own, because that's how it should be.",
  },
  {
    icon: Leaf,
    title: "Green Commitment",
    desc: "75% biodiesel fleet, recycled packing materials, and free e-waste recycling. We care about our impact on the community and the world.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Moving New York Since 1941
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            For over eight decades, Scanio Moving &amp; Storage has been the
            trusted choice for New Yorkers who demand the very best in moving
            services.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Founded in New York City in 1941, Scanio Moving &amp; Storage
                began as a small, family-operated moving company with a simple
                promise: to handle every move with care, precision, and respect.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Over seven decades later, that promise still drives everything
                we do. We&apos;ve grown from a single truck to a full fleet, but
                our commitment to personal service and attention to detail has
                never wavered.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                No locale, building, or set of circumstances is too much for our
                professional movers. We navigate the city&apos;s narrow
                corridors, manage co-op building regulations, secure parking
                permits, and ensure every item arrives safely at its destination.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Whether you&apos;re moving across the street or across the
                country, Scanio brings the same level of care and expertise to
                every job.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src="/hero-trucks.jpg"
                  alt="Vintage Scanio Moving & Storage trucks in New York City"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-cream rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-navy mb-1">80+</p>
                  <p className="text-text-secondary text-sm">Years of Service</p>
                </div>
                <div className="bg-cream rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-navy mb-1">NYC</p>
                  <p className="text-text-secondary text-sm">Based & Operated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">What We Stand For</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our values have guided us since 1941 and continue to define every
              move we make today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-8 text-center">
                <v.icon className="text-accent mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold text-navy mb-3">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green initiative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-cream rounded-lg p-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center gap-3 p-4">
                    <Truck className="text-accent" size={28} />
                    <p className="text-sm text-text-secondary">
                      <span className="block text-2xl font-bold text-navy">75%</span>
                      Biodiesel Fleet
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 p-4">
                    <Recycle className="text-accent" size={28} />
                    <p className="text-sm text-text-secondary">
                      <span className="block text-2xl font-bold text-navy">100%</span>
                      Recycled Boxes
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 p-4">
                    <Leaf className="text-accent" size={28} />
                    <p className="text-sm text-text-secondary">
                      <span className="block text-2xl font-bold text-navy">90%</span>
                      Less Toxic Fuel
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 p-4">
                    <Shield className="text-accent" size={28} />
                    <p className="text-sm text-text-secondary">
                      <span className="block text-2xl font-bold text-navy">Free</span>
                      E-Waste Recycling
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
                Green Moving
              </p>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Moving Forward Responsibly
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We care deeply about our impact on our community and on the
                world at large. That&apos;s why we&apos;ve invested in making our
                operations as environmentally friendly as possible.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Over 75% of our truck fleet runs on biodiesel fuel, which is 90%
                less toxic than petroleum diesel. We use recycled cardboard
                boxes, biodegradable packing materials, and reusable packing
                supplies whenever possible.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We also offer free e-waste recycling pickup for NYC residents —
                because moving is the perfect time to responsibly dispose of old
                electronics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Licenses &amp; Insurance
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-lg px-8 py-6 text-center shadow-sm">
              <p className="text-sm text-text-light mb-1">New York DOT</p>
              <p className="text-lg font-bold text-navy">T11495</p>
            </div>
            <div className="bg-white rounded-lg px-8 py-6 text-center shadow-sm">
              <p className="text-sm text-text-light mb-1">ICC Interstate</p>
              <p className="text-lg font-bold text-navy">MC93512</p>
            </div>
            <div className="bg-white rounded-lg px-8 py-6 text-center shadow-sm">
              <p className="text-sm text-text-light mb-1">New Jersey</p>
              <p className="text-lg font-bold text-navy">39PC00099002</p>
            </div>
            <div className="bg-white rounded-lg px-8 py-6 text-center shadow-sm">
              <p className="text-sm text-text-light mb-1">US DOT</p>
              <p className="text-lg font-bold text-navy">537054</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience the Scanio Difference
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who trust their moves to
            NYC&apos;s finest moving company.
          </p>
          <Link
            href="/quote"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-md transition-colors inline-block"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
