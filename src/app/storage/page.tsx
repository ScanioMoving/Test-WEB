import Link from "next/link";
import { Phone, CheckCircle, MapPin, Clock, Shield, Thermometer } from "lucide-react";

export const metadata = {
  title: "Storage Solutions NYC | Climate-Controlled | Scanio Moving & Storage",
  description:
    "Secure, climate-controlled storage in Secaucus, NJ — just 3 miles from the Lincoln Tunnel. Flexible short and long-term options. Pay only for space you use.",
};

const features = [
  { icon: Thermometer, label: "Climate-controlled environment" },
  { icon: Shield, label: "Secure, monitored facility" },
  { icon: Clock, label: "Flexible rental periods" },
  { icon: MapPin, label: "3 miles from Lincoln Tunnel" },
];

export default function StoragePage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Storage Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure, Climate-Controlled
            <br />
            Storage You Can Trust
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Our Secaucus, NJ facility offers safe, convenient storage for
            residential and commercial clients — just minutes from Manhattan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Storage That Fits Your Needs
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Whether you&apos;re between homes, downsizing, renovating, or
                need long-term storage for valuables, our facility provides the
                security and climate control your belongings deserve.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Located in Secaucus, NJ — just 3 miles from the Lincoln Tunnel
                — our warehouse is easily accessible from anywhere in the NYC
                metro area. You only pay for the space you actually use, with
                flexible month-to-month or two-week rental increments.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Storage is available to both Scanio moving clients and
                non-customers alike.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3 bg-cream rounded-lg p-4">
                    <f.icon className="text-accent shrink-0" size={24} />
                    <span className="text-sm font-medium text-text-primary">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-cream rounded-lg p-8">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Facility Details
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-medium text-text-primary">Location</p>
                      <p className="text-text-secondary">
                        355 County Ave, Secaucus, NJ 07094
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="text-accent shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-medium text-text-primary">Access Hours</p>
                      <p className="text-text-secondary">
                        Weekdays: 9:30 AM - 5:00 PM
                        <br />
                        Saturday: By appointment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="text-accent shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-medium text-text-primary">Security</p>
                      <p className="text-text-secondary">
                        24/7 monitored, climate-controlled
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-navy rounded-lg p-8 text-center">
                <p className="text-accent text-sm font-medium mb-2">Pricing</p>
                <p className="text-white text-2xl font-bold mb-2">
                  Pay Only for Space Used
                </p>
                <p className="text-gray-300 text-sm">
                  Month-to-month or 2-week increments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Storage Space?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us to discuss your storage needs and get a personalized
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-md transition-colors"
            >
              Get a Storage Quote
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
