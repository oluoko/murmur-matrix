import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
      "googleusercontent.com",
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
      allowedOrigins: ["*"],
    },
  },
};

export default nextConfig;
