import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Set headers for all routes
        source: "/(.*)", // This applies to all routes in the application
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'none';",
              "script-src 'strict-dynamic' 'self' https://cdn.jsdelivr.net;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
              "font-src 'self' https://fonts.gstatic.com;",
              "connect-src 'self' https://*.clerk.dev https://tschug.com;",
              "img-src 'self' data: blob: https://tschug.com;",
              "base-uri 'self';",
              "form-action 'self';",
              "frame-ancestors 'self';",
            ].join(" "),
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sub-app",
        destination: `${process.env.NEXT_PUBLIC_URL_SUP_APP}/sub-app`,
      },
      {
        source: "/sub-app/:path*",
        destination: `${process.env.NEXT_PUBLIC_URL_SUP_APP}/sub-app/:path*`,
      },
    ];
  },
};

export default nextConfig;