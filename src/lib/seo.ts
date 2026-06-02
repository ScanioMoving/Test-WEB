import { COMPANY } from "@/lib/contact";

/**
 * Canonical site origin. www is the canonical host (apex → www is handled
 * at the Amplify/DNS layer). Used for metadataBase, sitemap, robots,
 * JSON-LD, and llms references. Override per-environment with
 * NEXT_PUBLIC_SITE_URL if needed.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scaniomoving.com";

/** E.164-ish telephone for schema.org (derives from the display number). */
export const TELEPHONE = `+1-${COMPANY.phone.display.replace(/\./g, "-")}`;

/**
 * MovingCompany / LocalBusiness JSON-LD. Rendered once in the root layout
 * so it loads on every page. All NAP/license data comes from COMPANY so it
 * never drifts from what's shown on the site.
 *
 * Note: aggregateRating is intentionally omitted. Google requires
 * review-snippet markup to be backed by reviews visibly present on the
 * page; asserting a rating sitewide without that can trigger a manual
 * action. Add it back here once real, on-page review data is wired up.
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${SITE_URL}/#business`,
  name: COMPANY.name,
  legalName: "Scanio Movers Inc",
  url: SITE_URL,
  logo: `${SITE_URL}/scanio-logo.png`,
  image: `${SITE_URL}/scanio-logo.png`,
  telephone: TELEPHONE,
  email: COMPANY.email,
  foundingDate: "1941",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.line1,
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10123",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    // Approximate — 450 7th Ave, Midtown Manhattan.
    latitude: 40.7522,
    longitude: -73.9906,
  },
  areaServed: [
    { "@type": "City", name: "New York" },
    { "@type": "AdministrativeArea", name: "New York Metro Area" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  additionalProperty: COMPANY.licenses.map((l) => ({
    "@type": "PropertyValue",
    name: l.label,
    value: l.value,
  })),
} as const;
