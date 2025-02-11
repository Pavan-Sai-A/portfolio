import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps catch React issues
  images: {
    domains: ["example.com"], // Allow optimized images from external domains
    formats: ["image/avif", "image/webp"], // Serve modern image formats
  },
  experimental: {
    scrollRestoration: true, // Improves page navigation UX
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console logs in production
  },
};

export default nextConfig;
