import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/app/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        source: '/portal/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        source: '/customer/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },
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
        {
          source: '/app',
          destination: '/app/index.html',
        },
        {
          source: '/app/',
          destination: '/app/index.html',
        },
        {
          source: '/customer',
          destination: '/app/index.html',
        },
        {
          source: '/customer/',
          destination: '/app/index.html',
        },
      ],
      fallback: [
        {
          source: '/portal/:path*',
          destination: '/portal/index.html',
        },
        {
          source: '/app/:path*',
          destination: '/app/index.html',
        },
        {
          source: '/customer/:path*',
          destination: '/app/index.html',
        },
      ],
    };
  },
};

export default nextConfig;
