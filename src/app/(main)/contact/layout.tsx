import { pageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact Us",
  description:
    "Get in touch with Scanio Moving & Storage. Call 212.722.6850 or request a free moving estimate online. NYC movers since 1941.",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
