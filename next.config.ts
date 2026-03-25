import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fe36e5d2176d85fd69e79d6769db7309.cdn.bubble.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
