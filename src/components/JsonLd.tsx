/**
 * Renders a JSON-LD <script> into the document. Works in both server and
 * client components. Used for per-page structured data such as BreadcrumbList
 * (the sitewide LocalBusiness block lives in the root layout).
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
