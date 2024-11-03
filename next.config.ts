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
};

export default nextConfig;
