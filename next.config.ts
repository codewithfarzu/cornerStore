import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  reactStrictMode:false,
  images:{
    domains:['p.w3layouts.com']
  }
};

export default nextConfig;
