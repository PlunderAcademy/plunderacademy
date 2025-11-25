import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/articles/blockchain-glossary",
        destination: "/articles/island1-glossary",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
