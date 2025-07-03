import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Rewrites für sup-app
      {
        source: '/sub-app',
        destination: `${process.env.NEXT_PUBLIC_URL_SUP_APP}/sub-app`
      },
      {
        source: '/sub-app/:path*',
        destination: `${process.env.NEXT_PUBLIC_URL_SUP_APP}/sub-app/:path*`
      },
    ];
  }
};

export default nextConfig;
