import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.theabcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'audioboom.com',
      },
    ],
  },
};

export default nextConfig;
