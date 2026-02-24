"use client";

import { Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const propertyTypes = [
  "Small Studio",
  "Large Studio",
  "1 Bedroom",
  "2 Bedroom",
  "3 Bedroom",
  "4+ Bedroom",
  "House",
  "Office",
  "Warehouse",
  "Other",
];

const moveTypes = [
  "Residential",
  "Commercial",
  "Long Distance",
  "International",
  "White Glove",
  "Storage Only",
  "Other",
];

const hearAbout = [
  "Web Search",
  "Referral",
  "Social Media",
  "Saw Our Truck",
  "Returning Customer",
  "Other",
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Free Estimate
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Free Moving Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Fill out the form below and we&apos;ll provide a complimentary,
            no-obligation estimate. Or call us directly at{" "}
            <a href="tel:6468638070" className="text-accent hover:underline">
              646.863.8070
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-accent" size={36} />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Quote Request Received!
              </h2>
              <p className="text-text-secondary text-lg mb-2">
                Thank you for your interest in Scanio Moving &amp; Storage.
              </p>
              <p className="text-text-secondary">
                Our team will review your details and reach out within 24 hours
                with your personalized estimate.
              </p>
              <div className="mt-8 p-6 bg-cream rounded-lg inline-block">
                <p className="text-sm text-text-secondary mb-1">
                  Need immediate assistance?
                </p>
                <a
                  href="tel:6468638070"
                  className="text-navy font-bold text-lg flex items-center gap-2 justify-center"
                >
                  <Phone size={18} /> 646.863.8070
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal info */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-gray-200">
                  Your Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Preferred Move Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Moving from */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-gray-200">
                  Moving From
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street address, city, state, zip"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Property Type
                    </label>
                    <select className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white">
                      <option value="">Select type...</option>
                      {propertyTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Floor / Elevator Access
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 3rd floor, elevator available"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Moving to */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-gray-200">
                  Moving To
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street address, city, state, zip"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Property Type
                    </label>
                    <select className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white">
                      <option value="">Select type...</option>
                      {propertyTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Floor / Elevator Access
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 5th floor, walk-up"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Move details */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-gray-200">
                  Move Details
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Type of Move *
                    </label>
                    <select
                      required
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white"
                    >
                      <option value="">Select type...</option>
                      {moveTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      How Did You Hear About Us?
                    </label>
                    <select className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white">
                      <option value="">Select...</option>
                      {hearAbout.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special services */}
                <div className="mt-6">
                  <p className="text-sm font-medium text-text-primary mb-3">
                    Special Services Needed
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      "Packing / Unpacking",
                      "White Glove Service",
                      "Piano Moving",
                      "Fine Art",
                      "Antiques",
                      "Storage",
                    ].map((s) => (
                      <label
                        key={s}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-accent focus:ring-accent"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about any special requirements, large or fragile items, timing constraints, etc."
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-md transition-colors"
                >
                  Request Free Estimate
                </button>
                <p className="text-sm text-text-light">
                  No obligation. We typically respond within 24 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
