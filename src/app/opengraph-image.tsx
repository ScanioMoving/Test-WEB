import { ImageResponse } from "next/og";

// Branded 1200×630 social-share card, generated at build/request time so we
// don't have to ship and maintain a hand-designed static image. Applies to
// every route as the default OG/Twitter image (pages can override).

export const alt = "Scanio Moving & Storage — NYC Movers Since 1941";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0A1628 0%, #0B5DB5 160%)",
          padding: "90px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            marginBottom: 18,
          }}
        >
          Since 1941
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 800,
            letterSpacing: 2,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          SCANIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 500,
            color: "rgba(255,255,255,0.9)",
            marginTop: 14,
          }}
        >
          Moving &amp; Storage
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "rgba(255,255,255,0.75)",
            marginTop: 48,
          }}
        >
          NYC&apos;s premier movers · 212.722.6850
        </div>
      </div>
    ),
    { ...size },
  );
}
