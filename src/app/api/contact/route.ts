import { NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY } from "@/lib/contact";

export const runtime = "nodejs";

/**
 * Quote / contact form submission endpoint.
 *
 * Required env vars:
 *   RESEND_API_KEY    - https://resend.com/api-keys
 *   CONTACT_TO        - destination inbox (defaults to COMPANY.email)
 *   CONTACT_FROM      - verified sender on Resend (e.g. "website@scaniomoving.com").
 *                       Until a domain is verified, Resend accepts onboarding@resend.dev.
 */

const FIELD_LABELS: Record<string, string> = {
  fullName: "Full Name",
  phone: "Phone",
  email: "Email",
  preferredDate: "Preferred Move Date",
  fromAddress: "Moving From — Address",
  fromUnit: "Moving From — Unit",
  toAddress: "Moving To — Address",
  toUnit: "Moving To — Unit",
  specialServices: "Special Services",
  hearAboutUs: "How they heard about us",
  details: "Additional Details",
};

type Payload = Partial<Record<keyof typeof FIELD_LABELS, string | string[]>> & {
  // Honeypot — bots fill it, humans don't. Must be empty.
  website?: string;
};

function isLikelyEmail(value: unknown): value is string {
  return (
    typeof value === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) &&
    value.length <= 200
  );
}

function asString(v: unknown): string {
  if (Array.isArray(v)) return v.filter(Boolean).join(", ");
  return typeof v === "string" ? v.trim() : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Honeypot — silently accept so bots think they succeeded.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fullName = asString(body.fullName);
  const phone = asString(body.phone);
  const email = asString(body.email);
  const fromAddress = asString(body.fromAddress);
  const toAddress = asString(body.toAddress);
  const hearAboutUs = asString(body.hearAboutUs);

  if (!fullName) return NextResponse.json({ error: "Full Name is required." }, { status: 400 });
  if (!phone) return NextResponse.json({ error: "Phone is required." }, { status: 400 });
  if (!isLikelyEmail(email)) return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  if (!fromAddress) return NextResponse.json({ error: "Moving-from address is required." }, { status: 400 });
  if (!toAddress) return NextResponse.json({ error: "Moving-to address is required." }, { status: 400 });
  if (!hearAboutUs) return NextResponse.json({ error: 'Please fill in "How did you hear about us".' }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || COMPANY.email;
  const from = process.env.CONTACT_FROM || "onboarding@resend.dev";

  if (!apiKey) {
    // Don't crash in dev — log and surface a friendly error.
    console.error("[contact] RESEND_API_KEY is not set; cannot send email.");
    return NextResponse.json(
      {
        error:
          "Email service is not configured yet. Please call us at " +
          COMPANY.phone.display +
          " and we'll help you directly.",
      },
      { status: 503 },
    );
  }

  // Build a readable summary for the inbox.
  const orderedKeys: (keyof typeof FIELD_LABELS)[] = [
    "fullName",
    "phone",
    "email",
    "preferredDate",
    "fromAddress",
    "fromUnit",
    "toAddress",
    "toUnit",
    "specialServices",
    "hearAboutUs",
    "details",
  ];

  const rows: { label: string; value: string }[] = [];
  for (const key of orderedKeys) {
    const value = asString(body[key]);
    if (value) rows.push({ label: FIELD_LABELS[key], value });
  }

  const textBody = rows
    .map((r) => `${r.label}:\n${r.value}`)
    .join("\n\n");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #0A1628;">
      <h2 style="margin: 0 0 16px; color: #0B5DB5;">New quote request</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        ${rows
          .map(
            (r) => `
              <tr>
                <td style="padding: 8px 12px; vertical-align: top; width: 220px; color: #4A5568; border-bottom: 1px solid #E5ECF4;">${escapeHtml(r.label)}</td>
                <td style="padding: 8px 12px; vertical-align: top; border-bottom: 1px solid #E5ECF4; white-space: pre-wrap;">${escapeHtml(r.value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #4A5568;">
        Sent from the Scanio Moving &amp; Storage contact form.
      </p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New quote request — ${fullName}`,
      text: textBody,
      html: htmlBody,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json(
        { error: "We couldn't send your request right now. Please try again or call us." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please try again or call us." },
      { status: 500 },
    );
  }
}
