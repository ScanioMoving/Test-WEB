"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const lines: string[] = [];
    data.forEach((val, key) => {
      if (val) lines.push(`${key}: ${val}`);
    });
    // Also gather checkboxes
    const checks = form.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]:checked'
    );
    if (checks.length > 0) {
      lines.push(
        `Special Services: ${Array.from(checks)
          .map((c) => c.value)
          .join(", ")}`
      );
    }
    const subject = encodeURIComponent("New Quote Request from Website");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:info@scaniomoving.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 text-[14px] focus:outline-none bg-white";
  const inputStyle = { border: "1px solid #D6E0ED" };
  const labelClass = "block text-[13px] font-medium mb-1.5";
  const labelStyle = { color: "#0A1628" };

  return (
    <>
      {/* Header background */}
      <div className="h-[150px] w-full" style={{ background: "#0A1628" }} />

      <section
        className="pt-16 pb-16 bg-white"
        style={{ minHeight: "calc(100vh - 150px)" }}
      >
        <div className="max-w-6xl mx-auto px-10">
          <div className="text-center mb-12">
            <p
              className="text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
              style={{ color: "#0B5DB5" }}
            >
              Free Estimate
            </p>
            <h1
              className="text-[clamp(28px,3.5vw,42px)] font-light leading-[1.2] mb-4"
              style={{ color: "#0A1628" }}
            >
              Get in Touch
            </h1>
            <p
              className="text-[16px] font-light max-w-xl mx-auto"
              style={{ color: "#6B7B8D" }}
            >
              Fill out the form below for a complimentary, no-obligation
              estimate. Or call us directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2
                className="text-[18px] font-medium mb-8"
                style={{ color: "#0A1628" }}
              >
                Contact Information
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: "#F5F8FC" }}
                  >
                    <Phone size={18} style={{ color: "#0B5DB5" }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium mb-1" style={{ color: "#0A1628" }}>
                      Phone
                    </p>
                    <a
                      href="tel:6468638070"
                      className="text-[14px] font-light hover:opacity-60 transition-opacity"
                      style={{ color: "#6B7B8D" }}
                    >
                      646.863.8070
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: "#F5F8FC" }}
                  >
                    <Mail size={18} style={{ color: "#0B5DB5" }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium mb-1" style={{ color: "#0A1628" }}>
                      Email
                    </p>
                    <a
                      href="mailto:info@scaniomoving.com"
                      className="text-[14px] font-light hover:opacity-60 transition-opacity"
                      style={{ color: "#6B7B8D" }}
                    >
                      info@scaniomoving.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: "#F5F8FC" }}
                  >
                    <MapPin size={18} style={{ color: "#0B5DB5" }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium mb-1" style={{ color: "#0A1628" }}>
                      NYC Office
                    </p>
                    <p className="text-[14px] font-light" style={{ color: "#6B7B8D" }}>
                      222 West 37th Street, 3rd Floor
                      <br />
                      New York, NY 10018
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: "#F5F8FC" }}
                  >
                    <Clock size={18} style={{ color: "#0B5DB5" }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium mb-1" style={{ color: "#0A1628" }}>
                      Office Hours
                    </p>
                    <p className="text-[14px] font-light" style={{ color: "#6B7B8D" }}>
                      Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quote form */}
            <div className="lg:col-span-3">
              <div className="p-10" style={{ background: "#F5F8FC" }}>
                {submitted ? (
                  <div className="text-center py-16">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(11,93,181,0.1)" }}
                    >
                      <Send size={28} style={{ color: "#0B5DB5" }} />
                    </div>
                    <h3
                      className="text-[18px] font-medium mb-2"
                      style={{ color: "#0A1628" }}
                    >
                      Request Received!
                    </h3>
                    <p className="text-[14px] font-light mb-1" style={{ color: "#6B7B8D" }}>
                      Thank you for your interest in Scanio Moving &amp; Storage.
                    </p>
                    <p className="text-[14px] font-light" style={{ color: "#6B7B8D" }}>
                      Our team will reach out within 24 hours with your
                      personalized estimate.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Your Information */}
                    <div>
                      <h3
                        className="text-[14px] tracking-[0.15em] uppercase font-medium mb-5 pb-3"
                        style={{ color: "#0A1628", borderBottom: "1px solid #D6E0ED" }}
                      >
                        Your Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass} style={labelStyle}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="Full Name"
                            required
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className={labelClass} style={labelStyle}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="Phone"
                            required
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className={labelClass} style={labelStyle}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="Email"
                            required
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className={labelClass} style={labelStyle}>
                            Preferred Move Date
                          </label>
                          <input
                            type="date"
                            name="Preferred Move Date"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Moving From */}
                    <div>
                      <h3
                        className="text-[14px] tracking-[0.15em] uppercase font-medium mb-5 pb-3"
                        style={{ color: "#0A1628", borderBottom: "1px solid #D6E0ED" }}
                      >
                        Moving From
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                          <label className={labelClass} style={labelStyle}>
                            Address *
                          </label>
                          <input
                            type="text"
                            name="Moving From Address"
                            required
                            placeholder="Street address, city, state, zip"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className={labelClass} style={labelStyle}>
                            Unit Number
                          </label>
                          <input
                            type="text"
                            name="Moving From Unit"
                            placeholder="e.g., Apt 4B, Suite 200"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Moving To */}
                    <div>
                      <h3
                        className="text-[14px] tracking-[0.15em] uppercase font-medium mb-5 pb-3"
                        style={{ color: "#0A1628", borderBottom: "1px solid #D6E0ED" }}
                      >
                        Moving To
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                          <label className={labelClass} style={labelStyle}>
                            Address *
                          </label>
                          <input
                            type="text"
                            name="Moving To Address"
                            required
                            placeholder="Street address, city, state, zip"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className={labelClass} style={labelStyle}>
                            Unit Number
                          </label>
                          <input
                            type="text"
                            name="Moving To Unit"
                            placeholder="e.g., Apt 12A, Unit 3"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div>
                      <h3
                        className="text-[14px] tracking-[0.15em] uppercase font-medium mb-5 pb-3"
                        style={{ color: "#0A1628", borderBottom: "1px solid #D6E0ED" }}
                      >
                        Details
                      </h3>

                      <div className="mb-5">
                        <p className={labelClass} style={labelStyle}>
                          Special Services Needed
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3 mt-2">
                          {[
                            "White Glove Service",
                            "Piano Moving",
                            "Fine Art",
                            "Antiques",
                            "Crating",
                            "Storage",
                          ].map((s) => (
                            <label
                              key={s}
                              className="flex items-center gap-2 text-[13px]"
                              style={{ color: "#6B7B8D" }}
                            >
                              <input type="checkbox" value={s} />
                              {s}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className={labelClass} style={labelStyle}>
                            How did you hear about us? *
                          </label>
                          <input
                            type="text"
                            name="How Did You Hear About Us"
                            required
                            placeholder="e.g., Google, referral, saw our truck"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass} style={labelStyle}>
                          Additional Details
                        </label>
                        <textarea
                          name="Additional Details"
                          rows={4}
                          placeholder="Tell us about any special requirements, large or fragile items, timing constraints, etc."
                          className={`${inputClass} resize-none`}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all"
                      style={{ background: "#0B5DB5", color: "white" }}
                    >
                      Request Free Estimate
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
