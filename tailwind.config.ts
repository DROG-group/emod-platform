import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#5b3cc4",
          light: "#7c5ce7",
          dark: "#4a2fa3",
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          500: "#5b3cc4",
          600: "#4a2fa3",
          700: "#3d2785",
        },
        gold: "#d4a000",
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(91, 60, 196, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
