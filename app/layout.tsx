import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "EMOD by SAUFEX",
  description: "EMOD is European Master of (countering) Disinformation, a product of SAUFEX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link href="/dashboard" className="text-xl font-bold text-gray-900">
                EMOD BY SAUFEX
              </Link>
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-gray-700 hover:text-gray-900 font-medium">
                  Sign In
                </Link>
                <Link href="/register" className="btn btn-primary">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="mt-20">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>Copyright © 2025 - All rights reserved by{" "}
              <a
                href="https://saufex.eu?ref=emod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-light hover:underline"
              >
                SAUFEX
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
