import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This creates the 'out' directory
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
