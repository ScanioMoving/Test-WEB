import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images straight from CloudFront instead of through the Next.js
    // image optimizer. On Amplify the optimizer runs in Lambda, and its cold
    // start adds multi-second latency to the FIRST request for each image
    // variant — the "takes ~5s to load" symptom on low-traffic pages. Our
    // sources are already pre-encoded WebP at sensible sizes (<=2048px), so
    // re-optimizing added latency for no benefit (and at q100 even inflated
    // the files). Serving raw is fast and edge-cached — exactly like the
    // truck-sequence frames, which already load instantly.
    unoptimized: true,
  },

  /**
   * Permanent (301) redirects from the old PHP/Bluehost URLs to their new
   * Next.js routes. This is the single most important SEO step of the
   * migration: it preserves ranking value and stops old links / directory
   * listings from hitting dead pages.
   *
   * Pages that have no direct equivalent on the new site are mapped to the
   * closest related route (specialty handling → FF&E/Designer, luxury →
   * residential, info/guide pages → home), per the migration plan.
   *
   * Keeping these in code (rather than only in Amplify) means they live
   * with the repo and survive any host reconfiguration.
   */
  async redirects() {
    return [
      // Whole-domain redirect: scaniomovers.com (+ www) -> www.scaniomoving.com.
      // scaniomovers.com points at this Amplify app (for managed HTTPS); this
      // 301s every request to the main site so it's a pure redirect, not
      // duplicate content. Email stays on Microsoft 365 (MX lives in DNS).
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?scaniomovers\\.com" }],
        destination: "https://www.scaniomoving.com/:path*",
        permanent: true,
      },
      // Core pages
      { source: "/about-scanio-moving.php", destination: "/about", permanent: true },
      { source: "/nyc-moving-services.php", destination: "/services", permanent: true },
      { source: "/nyc-commercial-moving.php", destination: "/services/commercial", permanent: true },
      { source: "/nyc-residential-moving.php", destination: "/services/residential", permanent: true },
      { source: "/long-distance-moving.php", destination: "/services/long-distance", permanent: true },
      { source: "/international-moving.php", destination: "/services/international", permanent: true },
      { source: "/nyc-storage.php", destination: "/storage", permanent: true },
      { source: "/nyc-moving-estimate.php", destination: "/contact", permanent: true },
      { source: "/contact-nyc-moving-company.php", destination: "/contact", permanent: true },

      // Specialty handling → FF&E / Designer (white glove, fine art, antiques,
      // and packing live there)
      { source: "/packing-unpacking-services.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/nyc-white-glove-moving.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/nyc-fine-art-moving.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/nyc-antique-moving.php", destination: "/services/ffe-designer", permanent: true },

      // Topics without a dedicated page now live on the FAQ hub. Deep-link to
      // the matching section anchor.
      { source: "/musical-instruments-moving.php", destination: "/faqs#specialty", permanent: true },
      { source: "/nyc-moving-process.php", destination: "/faqs#moving-process", permanent: true },
      { source: "/scanio-license-insurance.php", destination: "/faqs#licensing", permanent: true },
      { source: "/nyc-referral-rewards.php", destination: "/faqs#partners", permanent: true },
      { source: "/green-moving-company.php", destination: "/", permanent: true },
      { source: "/moving-and-storage-glossary.php", destination: "/faqs#glossary", permanent: true },
      { source: "/smart-moving-guide.php", destination: "/faqs#choosing", permanent: true },
      { source: "/choosing-a-moving-company.php", destination: "/faqs#choosing", permanent: true },
      { source: "/moving-dos-and-donts.php", destination: "/faqs#choosing", permanent: true },
      { source: "/moving-faqs.php", destination: "/faqs", permanent: true },
      { source: "/nyc-moving-information.php", destination: "/faqs", permanent: true },
      { source: "/moving-related-articles.php", destination: "/faqs", permanent: true },

      // Closest-related mappings for the rest
      { source: "/nyc-luxury-moving-company.php", destination: "/services/residential", permanent: true },
      { source: "/professional-moving-services.php", destination: "/services", permanent: true },
      { source: "/nyc-moving-company-reviews.php", destination: "/", permanent: true },

      // Additional indexed URLs found in the old (live) sitemap that the
      // migration guide's list omitted — individual customer-review pages,
      // resource articles, and service variants. Mapped to the closest live
      // page so none of them 404 after cutover.
      { source: "/annie-mack.php", destination: "/about", permanent: true },
      { source: "/bruce-bogart.php", destination: "/about", permanent: true },
      { source: "/dana-engel.php", destination: "/about", permanent: true },
      { source: "/david-reni.php", destination: "/about", permanent: true },
      { source: "/louis-stamm.php", destination: "/about", permanent: true },
      { source: "/nina-hennessey.php", destination: "/about", permanent: true },
      { source: "/steven-gordon.php", destination: "/about", permanent: true },
      { source: "/moving-nightmare.php", destination: "/about", permanent: true },
      { source: "/nyc-luxury-movers.php", destination: "/services/residential", permanent: true },
      { source: "/antique-moving-protection.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/high-end-furniture-movers.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/finding-the-right-mover.php", destination: "/faqs#choosing", permanent: true },
      { source: "/working-with-a-moving-company.php", destination: "/faqs#choosing", permanent: true },
      { source: "/tips-for-a-successful-move.php", destination: "/faqs#choosing", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },

      // Internal dedup: /services/packing duplicates the FF&E/Designer page.
      // (The in-app /quote page already redirects to /contact on its own.)
      { source: "/services/packing", destination: "/services/ffe-designer", permanent: true },

      // Safety net — any other legacy .php URL not mapped above (e.g. indexed
      // but missing from the sitemap, or linked from an external site) falls
      // back to the homepage instead of a 404. Specific rules above win
      // because Next applies the first matching redirect.
      { source: "/:slug.php", destination: "/", permanent: true },
    ];
  },

  /**
   * Baseline security response headers applied to every route. These are the
   * low-risk, zero-visual-impact ones — they don't affect how the page looks
   * or which resources it can load:
   *   - HSTS: force HTTPS for a year (incl. subdomains) once seen.
   *   - nosniff: stop browsers MIME-sniffing responses into a different type.
   *   - X-Frame-Options SAMEORIGIN: block clickjacking via foreign iframes.
   *   - Referrer-Policy: send the origin only on cross-origin navigations.
   *   - Permissions-Policy: deny APIs the site never uses (camera/mic/geo).
   * A Content-Security-Policy is deliberately NOT set here: a strict CSP would
   * need tuning against Google Maps (autocomplete), Google Fonts, and
   * styled-jsx inline styles before it could ship without breaking the page.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },

      // Agent discovery (RFC 8288): advertise the machine-readable resources
      // from the homepage so agents can find the API catalog, its OpenAPI
      // description, the AI summary, and the auth statement without guessing.
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              '</.well-known/api-catalog>; rel="api-catalog"',
              '</.well-known/openapi.json>; rel="service-desc"',
              '</llms.txt>; rel="service-doc"',
              '</auth.md>; rel="author"',
            ].join(", "),
          },
        ],
      },

      // Let browser-based agents fetch the discovery docs cross-origin. CORS
      // lives only on this wildcard rule so the header is never duplicated.
      {
        source: "/.well-known/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
      // The extension-less well-known docs need their content types set
      // explicitly (no filename extension for the server to infer from).
      {
        source: "/.well-known/api-catalog",
        headers: [
          { key: "Content-Type", value: "application/linkset+json; charset=utf-8" },
        ],
      },
      {
        source: "/.well-known/oauth-protected-resource",
        headers: [{ key: "Content-Type", value: "application/json; charset=utf-8" }],
      },
      {
        source: "/auth.md",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
};

export default nextConfig;
