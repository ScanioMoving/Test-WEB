"use client";

import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from "lucide-react";
import { COMPANY, TEL_HREF, MAILTO_HREF } from "@/lib/contact";
import AddressAutocompleteInput from "@/components/AddressAutocompleteInput";
import { useState, type FormEvent } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const SPECIAL_SERVICES = [
  "White Glove Service",
  "Piano Moving",
  "Fine Art",
  "Antiques",
  "Crating",
  "Storage",
];

export default function ContactPage() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const specialServices = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[name="specialServices"]:checked'),
    ).map((input) => input.value);

    const payload = {
      fullName: String(data.get("fullName") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      preferredDate: String(data.get("preferredDate") ?? ""),
      fromAddress: String(data.get("fromAddress") ?? ""),
      fromUnit: String(data.get("fromUnit") ?? ""),
      toAddress: String(data.get("toAddress") ?? ""),
      toUnit: String(data.get("toUnit") ?? ""),
      specialServices,
      hearAboutUs: String(data.get("hearAboutUs") ?? ""),
      details: String(data.get("details") ?? ""),
      // Honeypot — bots fill this, real users won't see it.
      website: String(data.get("website") ?? ""),
    };

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({
          kind: "error",
          message:
            json.error ||
            `We couldn't send your request (status ${res.status}). Please try again or call us.`,
        });
        return;
      }
      setStatus({ kind: "success" });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        message:
          "We couldn't reach the server. Check your connection and try again, or call us at " +
          COMPANY.phone.display +
          ".",
      });
    }
  }

  const inputClass =
    "w-full px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0B5DB5]/30 bg-white";
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
        <div className="max-w-6xl mx-auto px-6 md:px-10">
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
              style={{ color: "#4A5568" }}
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
                      href={TEL_HREF}
                      className="text-[14px] font-light hover:opacity-60 transition-opacity"
                      style={{ color: "#0A1628" }}
                    >
                      {COMPANY.phone.display}
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
                      href={MAILTO_HREF}
                      className="text-[14px] font-light hover:opacity-60 transition-opacity"
                      style={{ color: "#4A5568" }}
                    >
                      {COMPANY.email}
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
                    <p className="text-[14px] font-light" style={{ color: "#4A5568" }}>
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
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
                    <p className="text-[14px] font-light" style={{ color: "#4A5568" }}>
                      {COMPANY.hours}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quote form */}
            <div className="lg:col-span-3">
              <div className="p-10" style={{ background: "#F5F8FC" }}>
                {status.kind === "success" ? (
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
                    <p className="text-[14px] font-light mb-1" style={{ color: "#4A5568" }}>
                      Thank you for your interest in Scanio Moving &amp; Storage.
                    </p>
                    <p className="text-[14px] font-light" style={{ color: "#4A5568" }}>
                      Our team will reach out within 24 hours with your
                      personalized estimate.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    {/* Honeypot — hidden from real users via CSS; bots will fill it. */}
                    <div aria-hidden style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                      <label>
                        Website
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                      </label>
                    </div>

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
                            name="fullName"
                            required
                            autoComplete="name"
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
                            name="phone"
                            required
                            autoComplete="tel"
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
                            name="email"
                            required
                            autoComplete="email"
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
                            name="preferredDate"
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
                          <AddressAutocompleteInput
                            type="text"
                            name="fromAddress"
                            required
                            placeholder="Start typing the address…"
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
                            name="fromUnit"
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
                          <AddressAutocompleteInput
                            type="text"
                            name="toAddress"
                            required
                            placeholder="Start typing the address…"
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
                            name="toUnit"
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                          {SPECIAL_SERVICES.map((s) => (
                            <label
                              key={s}
                              className="flex items-center gap-2 text-[13px]"
                              style={{ color: "#4A5568" }}
                            >
                              <input type="checkbox" name="specialServices" value={s} />
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
                            name="hearAboutUs"
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
                          name="details"
                          rows={4}
                          placeholder="Tell us about any special requirements, large or fragile items, timing constraints, etc."
                          className={`${inputClass} resize-none`}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {status.kind === "error" && (
                      <div
                        className="flex items-start gap-3 px-4 py-3 text-[13px]"
                        style={{
                          background: "rgba(220, 38, 38, 0.06)",
                          border: "1px solid rgba(220, 38, 38, 0.25)",
                          color: "#B91C1C",
                        }}
                        role="alert"
                      >
                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                        <span>{status.message}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status.kind === "submitting"}
                      className="text-[12px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "#0B5DB5", color: "white" }}
                    >
                      {status.kind === "submitting" ? "Sending…" : "Request Free Estimate"}
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
