import { execSync } from 'child_process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Coolify runs the Docker image directly; Vercel provides its own Next.js
  // deployment output and should not receive the standalone server artifact.
  output: process.env.VERCEL ? undefined : 'standalone',
  env: {
    NEXT_PUBLIC_BUILD_ID: (() => {
      try {
        return execSync('git rev-parse --short HEAD').toString().trim();
      } catch {
        return 'unknown';
      }
    })(),
  },
};

export default nextConfig;
