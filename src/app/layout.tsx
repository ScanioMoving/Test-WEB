import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

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
  title: "Scanio Moving & Storage | NYC's Finest Since 1941",
  description:
    "New York City's premier moving and storage company since 1941. Residential, commercial, long distance, and white glove moving services. Licensed, bonded, and insured.",
  keywords:
    "NYC movers, moving company New York, white glove moving, residential moving NYC, commercial moving NYC, storage NYC",
};

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
          href="/truck-sequence/ezgif-frame-001.jpg"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
