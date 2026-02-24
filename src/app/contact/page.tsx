"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
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
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Have a question or ready to start planning your move? We&apos;re
            here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Phone</p>
                      <a
                        href="tel:6468638070"
                        className="text-text-secondary hover:text-navy transition-colors"
                      >
                        646.863.8070
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <a
                        href="mailto:info@scaniomoving.com"
                        className="text-text-secondary hover:text-navy transition-colors"
                      >
                        info@scaniomoving.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">
                        NYC Office
                      </p>
                      <p className="text-text-secondary">
                        222 West 37th Street
                        <br />
                        New York, NY 10018
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">
                        Storage Facility
                      </p>
                      <p className="text-text-secondary">
                        355 County Ave
                        <br />
                        Secaucus, NJ 07094
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">
                        Business Hours
                      </p>
                      <p className="text-text-secondary">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-cream rounded-lg p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Send Us a Message
                </h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-accent" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-text-secondary">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
