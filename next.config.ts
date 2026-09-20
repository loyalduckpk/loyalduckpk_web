import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: '/portal',
          destination: '/portal/index.html',
        },
        {
          source: '/portal/',
          destination: '/portal/index.html',
        },
      ],
      fallback: [
        {
          source: '/portal/:path*',
          destination: '/portal/index.html',
        },
      ],
    };
  },
};

export default nextConfig;
