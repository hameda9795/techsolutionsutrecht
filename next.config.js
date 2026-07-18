/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Trailing slashes are normalized in middleware so legacy URLs can redirect
  // straight to their final destination without an intermediate hop.
  skipTrailingSlashRedirect: true,
  experimental: {
    // Inline kritische CSS en laad de rest niet-blokkerend (critters).
    // Lost de "render-blocking requests" van de CSS-bundels op.
    optimizeCss: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    const securityHeaders = [
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
      },
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data:",
          "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
          "object-src 'none'",
          "upgrade-insecure-requests",
        ].join("; "),
      },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Old portfolio URLs -> the single current projects page
      { source: "/projects", destination: "/projecten", permanent: true },
      { source: "/projects/:path*", destination: "/projecten", permanent: true },
      { source: "/portfolio", destination: "/projecten", permanent: true },
      { source: "/portfolio/", destination: "/projecten", permanent: true },
      { source: "/portfolio/:path*", destination: "/projecten", permanent: true },

      // Old services section -> current diensten/reparaties
      { source: "/services", destination: "/diensten", permanent: true },
      { source: "/services/repair", destination: "/reparaties", permanent: true },
      { source: "/services/web-design", destination: "/diensten", permanent: true },
      { source: "/services/software", destination: "/diensten", permanent: true },

      // Renamed website service -> canonical service URL
      {
        source: "/diensten/wordpress/",
        destination: "/diensten/website-laten-maken",
        permanent: true,
      },
      {
        source: "/diensten/wordpress",
        destination: "/diensten/website-laten-maken",
        permanent: true,
      },

      // Renamed automation service -> canonical service URL
      {
        source: "/diensten/ai/",
        destination: "/diensten/whatsapp-automatisering",
        permanent: true,
      },
      {
        source: "/diensten/ai",
        destination: "/diensten/whatsapp-automatisering",
        permanent: true,
      },

      // Retired services -> the closest current service overview
      { source: "/diensten/maatwerk", destination: "/diensten", permanent: true },
      { source: "/diensten/maatwerk/", destination: "/diensten", permanent: true },
      { source: "/klein-bedrijf-webapplicatie", destination: "/diensten", permanent: true },
      { source: "/klein-bedrijf-webapplicatie/", destination: "/diensten", permanent: true },
      { source: "/software-op-maat", destination: "/diensten", permanent: true },
      { source: "/software-op-maat/", destination: "/diensten", permanent: true },
      { source: "/webdesign-software-op-maat", destination: "/diensten", permanent: true },

      // Consolidated SEO subpages -> the current Hoger in Google service
      { source: "/diensten/seo/teksten", destination: "/diensten/seo", permanent: true },
      { source: "/diensten/seo/teksten/", destination: "/diensten/seo", permanent: true },
      { source: "/diensten/seo/lokale-seo", destination: "/diensten/seo", permanent: true },
      { source: "/diensten/seo/lokale-seo/", destination: "/diensten/seo", permanent: true },

      // Old appointment pages -> contact
      { source: "/afspraak", destination: "/contact", permanent: true },
      { source: "/afspraak/", destination: "/contact", permanent: true },

      // Old repair landing page -> current reparaties
      { source: "/reparatie-service", destination: "/reparaties", permanent: true },

      // Old legal/privacy pages -> current privacy page
      { source: "/terms", destination: "/privacy", permanent: true },
      { source: "/algemene-voorwaarden", destination: "/privacy", permanent: true },
      { source: "/privacyverklaring", destination: "/privacy", permanent: true },
      { source: "/cookiebeleid", destination: "/privacy", permanent: true },

      // Duplicate blog posts -> canonical version (fix keyword cannibalization)
      { source: "/blog/wat-kost-een-website-laten-maken/", destination: "/blog/wat-kost-website-laten-maken", permanent: true },
      { source: "/blog/wat-kost-een-website-laten-maken", destination: "/blog/wat-kost-website-laten-maken", permanent: true },
      { source: "/blog/5-redenen-website-niet-op-google/", destination: "/blog/website-niet-in-google", permanent: true },
      { source: "/blog/5-redenen-website-niet-op-google", destination: "/blog/website-niet-in-google", permanent: true },
    ];
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
