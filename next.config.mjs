import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uyduzjungsstvpgqwitc.supabase.co",
      },
    ],
  },
  webpack: (config) => {
    // Add fallbacks for Node.js modules
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };

    // Add loader for HTML files
    config.module.rules.push({
      test: /\.html$/,
      use: ["html-loader"],
    });

    return config;
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
