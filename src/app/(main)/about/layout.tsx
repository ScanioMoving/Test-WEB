import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family-run NYC moving and storage company serving the metro area since 1941. Three generations of care from the Scanio and Shuminer families.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
