import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MobileCallPill from "@/components/MobileCallPill";
import { SITE_URL, localBusinessJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NYC Movers & Storage Since 1941 | Scanio Moving & Storage",
    // Child pages set only their unique part; the brand appends automatically.
    template: "%s | Scanio Moving & Storage",
  },
  description:
    "NYC movers and storage since 1941 — residential, commercial, long-distance, and international moving, plus secure storage. Free estimates: call 212.722.6850.",
  keywords: [
    "NYC movers",
    "moving company New York",
    "residential moving NYC",
    "commercial moving NYC",
    "long distance movers NYC",
    "international movers NYC",
    "storage NYC",
    "white glove moving NYC",
    "Scanio Moving",
  ],
  applicationName: "Scanio Moving & Storage",
  authors: [{ name: "Scanio Moving & Storage" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Scanio Moving & Storage",
    title: "NYC Movers & Storage Since 1941 | Scanio Moving & Storage",
    description:
      "NYC movers and storage since 1941 — residential, commercial, long-distance, and international moving, plus secure storage. Free estimates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Movers & Storage Since 1941 | Scanio Moving & Storage",
    description:
      "NYC movers and storage since 1941 — residential, commercial, long-distance, and international moving, plus secure storage.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Kick off the first hero frame before React mounts so the canvas
            has something to draw the moment the page is interactive. */}
        <link
          rel="preload"
          as="image"
          href="/truck-sequence/ezgif-frame-001.webp"
          fetchPriority="high"
        />
        {/* LocalBusiness structured data — helps Google local + Maps and
            gives AI crawlers a clean machine-readable company record. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        {children}
        <MobileCallPill />

        {/* Google Analytics 4 — only loads when a measurement ID is set,
            so production never ships a broken placeholder tag. Set
            NEXT_PUBLIC_GA_ID in the environment to enable. */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
