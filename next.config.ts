import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any hostname
        pathname: "/**", // allow any path
      },
    ],
  },
};

export default nextConfig;
