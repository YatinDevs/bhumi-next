/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔥 CORE PERFORMANCE
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: false, // ❌ REMOVED - Next.js 16+ default

  // 🔥 IMAGE OPTIMIZATION
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bhumiindustrial.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.midcindia.org",
        pathname: "/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 🔥 SECURITY HEADERS (SEO + Lighthouse 100)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // 🔥 TURBOPACK COMPATIBLE (Next.js 16+)
  turbopack: {}, // ✅ Fixes webpack conflict

  // 🔥 PRODUCTION READY
  output: "standalone",

  // 🔥 NEW Next.js 16+ SYNTAX
  serverExternalPackages: ["@prisma/client"], // ✅ Replaces experimental.serverComponentsExternalPackages

  // 🔥 ESM ENVIRONMENT VARIABLES
  env: {
    CUSTOM_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || "https://bhumiindustrial.com",
    SITE_NAME: "Bhumi Industrial Consultant",
  },

  // 🔥 ROUTE REWRITES (sitemap/robots)
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },

  // 🔥 ESLINT MOVED TO PACKAGE.JSON (Next.js 16+)
  // eslint: REMOVED - Use "next lint" CLI instead
};

export default nextConfig;
