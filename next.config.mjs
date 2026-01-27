import { execSync } from 'child_process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BUILD_ID: execSync('git rev-parse --short HEAD').toString().trim(),
  },
};

export default nextConfig;
