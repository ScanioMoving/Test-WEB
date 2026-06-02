import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { COMPANY } from "@/lib/contact";

export const runtime = "nodejs";

/**
 * Quote / contact form submission endpoint.
 *
 * Sends mail through Amazon SES v2 so it slots cleanly into the planned
 * AWS production environment. When the app runs on AWS (EC2/ECS/Lambda/
 * App Runner/etc.) the SDK auto-discovers credentials from the attached
 * IAM role — no keys to manage. When the app runs elsewhere (e.g.
 * Vercel today) the SDK falls back to the AWS_ACCESS_KEY_ID /
 * AWS_SECRET_ACCESS_KEY env vars.
 *
 * Required env vars in any environment:
 *   AWS_SES_REGION    Region where SES is configured, e.g. us-east-1.
 *                     (AWS_REGION also works.)
 *   CONTACT_FROM      Verified SES identity used as the From address,
 *                     e.g. "website@scaniomoving.com". Must be verified
 *                     in SES; account must be out of the sandbox to
 *                     send to non-verified recipients.
 *
 * Optional:
 *   CONTACT_TO              Inbox(es) quote requests land in. One address or
 *                           a comma-separated list (defaults to COMPANY.email).
 *   AWS_ACCESS_KEY_ID,
 *   AWS_SECRET_ACCESS_KEY   Required only when not running inside AWS
 *                           with an instance/task role.
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

function configError() {
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

  const region = process.env.AWS_SES_REGION || process.env.AWS_REGION;
  // CONTACT_TO accepts one address or a comma-separated list, so quote
  // requests can be "chained" to several inboxes (e.g. info@ + a personal
  // address) from a single env var. Defaults to COMPANY.email.
  const toList = (process.env.CONTACT_TO || COMPANY.email)
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM;

  if (!region || !from || toList.length === 0) {
    console.error(
      "[contact] AWS SES is not configured. Need AWS_SES_REGION (or AWS_REGION) and CONTACT_FROM.",
    );
    return configError();
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

  const textBody = rows.map((r) => `${r.label}:\n${r.value}`).join("\n\n");

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
    const ses = new SESv2Client({ region });
    const result = await ses.send(
      new SendEmailCommand({
        FromEmailAddress: from,
        Destination: { ToAddresses: toList },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `New quote request — ${fullName}`, Charset: "UTF-8" },
            Body: {
              Text: { Data: textBody, Charset: "UTF-8" },
              Html: { Data: htmlBody, Charset: "UTF-8" },
            },
          },
        },
      }),
    );

    console.log("[contact] SES message id:", result.MessageId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] SES send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please try again or call us." },
      { status: 502 },
    );
  }
}
