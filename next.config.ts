import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer modern, smaller formats. Browsers fall back to JPG/PNG when
    // they can't decode AVIF or WebP.
    formats: ["image/avif", "image/webp"],
    // Default deviceSizes plus an extra 1440 / 2560 entry so retina
    // laptops at 1440p / 5K get a srcset entry close to their actual
    // pixel-doubled width instead of overshooting to 1920 / 3840.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
    // Cache optimized variants at the edge so we don't re-encode on
    // every request.
    minimumCacheTTL: 60 * 60 * 24 * 30,
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
      // instruments, and packing all live there now)
      { source: "/packing-unpacking-services.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/nyc-white-glove-moving.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/nyc-fine-art-moving.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/nyc-antique-moving.php", destination: "/services/ffe-designer", permanent: true },
      { source: "/musical-instruments-moving.php", destination: "/services/ffe-designer", permanent: true },

      // Closest-related mappings for pages without a direct equivalent
      { source: "/nyc-luxury-moving-company.php", destination: "/services/residential", permanent: true },
      { source: "/professional-moving-services.php", destination: "/services", permanent: true },
      { source: "/nyc-moving-process.php", destination: "/services", permanent: true },
      { source: "/nyc-moving-company-reviews.php", destination: "/", permanent: true },
      { source: "/nyc-referral-rewards.php", destination: "/contact", permanent: true },
      { source: "/scanio-license-insurance.php", destination: "/about", permanent: true },
      { source: "/green-moving-company.php", destination: "/", permanent: true },
      { source: "/nyc-moving-information.php", destination: "/services", permanent: true },
      { source: "/moving-faqs.php", destination: "/", permanent: true },
      { source: "/moving-related-articles.php", destination: "/", permanent: true },
      { source: "/moving-and-storage-glossary.php", destination: "/", permanent: true },
      { source: "/smart-moving-guide.php", destination: "/", permanent: true },
      { source: "/choosing-a-moving-company.php", destination: "/", permanent: true },
      { source: "/moving-dos-and-donts.php", destination: "/", permanent: true },

      // Internal dedup: /services/packing duplicates the FF&E/Designer page.
      // (The in-app /quote page already redirects to /contact on its own.)
      { source: "/services/packing", destination: "/services/ffe-designer", permanent: true },
    ];
  },
};

export default nextConfig;
