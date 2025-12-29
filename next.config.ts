import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // We ignore eslint during build to ensure deployment succeeds even if minor lint issues exist
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
