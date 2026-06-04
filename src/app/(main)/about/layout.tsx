import { pageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/about",
  title: "About Us",
  description:
    "Family-run NYC moving and storage company serving the metro area since 1941. Three generations of care from the Scanio and Shuminer families.",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      {children}
    </>
  );
}
