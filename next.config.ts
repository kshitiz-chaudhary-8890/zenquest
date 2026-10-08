import type { NextConfig } from "next";
const config: NextConfig = {
  devIndicators: false,
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: "/about-pooja", destination: "/about", permanent: false },
      {
        source: "/consultations/astrology",
        destination: "/astrology",
        permanent: false,
      },
      {
        source: "/consultations/tarot",
        destination: "/book-a-reading-with-pooja",
        permanent: false,
      },
    ];
  },
};
export default config;
