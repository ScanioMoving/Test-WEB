import { pageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/services/residential",
  title: "NYC Residential Movers",
  description:
    "Careful, reliable home moving across NYC and beyond — apartments, brownstones, and penthouses handled with detail since 1941. Free estimate.",
});

export default function ResidentialLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Residential Moving", path: "/services/residential" },
        ])}
      />
      {children}
    </>
  );
}
