import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC Residential Movers",
  description:
    "Careful, reliable home moving across NYC and beyond — apartments, brownstones, and penthouses handled with detail since 1941. Free estimate.",
  alternates: { canonical: "/services/residential" },
};

export default function ResidentialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
