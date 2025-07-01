import {NextConfig} from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  assetPrefix: '/app1',
  async rewrites() {
    return [
      {
        source: '/app1',
        destination: 'http://localhost:3001/app1', // Sub-App läuft auf Port 3001
      },
      {
        source: '/app1/:path*',
        destination: 'http://localhost:3001/app1/:path*', // Sub-App läuft auf Port 3001
      },
    ];
  },
};

export default nextConfig;