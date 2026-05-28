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
};

export default nextConfig;
