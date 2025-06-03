import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache in production builds to save disk space
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
  // Reduce build output
  output: 'standalone',
  compress: true,
};

export default nextConfig;
