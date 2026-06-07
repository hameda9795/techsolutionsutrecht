/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old portfolio section -> current portfolio
      { source: "/projects", destination: "/portfolio", permanent: true },
      { source: "/projects/:path*", destination: "/portfolio", permanent: true },

      // Old services section -> current diensten/reparaties
      { source: "/services", destination: "/diensten", permanent: true },
      { source: "/services/repair", destination: "/reparaties", permanent: true },
      { source: "/services/web-design", destination: "/diensten", permanent: true },
      { source: "/services/software", destination: "/diensten/maatwerk", permanent: true },

      // Old "software op maat" pages -> current maatwerk service
      { source: "/software-op-maat", destination: "/diensten/maatwerk", permanent: true },
      { source: "/software-op-maat/", destination: "/diensten/maatwerk", permanent: true },
      { source: "/webdesign-software-op-maat", destination: "/diensten/maatwerk", permanent: true },

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
    ];
  },
};

module.exports = nextConfig;
