/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.snapi.dev"],
  },
  env: {
    NEXT_STOCK_APIKEY: process.env.NEXT_STOCK_APIKEY,
  },
};

module.exports = nextConfig;
