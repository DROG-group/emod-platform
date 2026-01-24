import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "EMOD - European Master of Countering Disinformation",
  description: "EMOD is the European Master of (countering) Disinformation, a product of SAUFEX. Learn to identify, understand, and counter foreign information manipulation.",
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/saufex-logo.svg"
                  alt="SAUFEX"
                  width={120}
                  height={40}
                  className="h-8 lg:h-10 w-auto"
                  priority
                />
                <div className="hidden sm:block h-8 w-px bg-gray-300" />
                <span className="hidden sm:block text-lg font-bold text-gray-800 group-hover:text-purple transition-colors">
                  EMOD
                </span>
              </Link>
              <div className="flex items-center gap-2 lg:gap-4">
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-purple font-medium px-3 py-2 rounded-lg hover:bg-purple/5 transition-all"
                >
                  Modules
                </Link>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="btn btn-primary text-sm lg:text-base"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Image
                  src="/saufex-logo.svg"
                  alt="SAUFEX"
                  width={140}
                  height={50}
                  className="h-10 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                  EMOD is the European Master of Countering Disinformation,
                  developed by the SAUFEX consortium to protect democratic processes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link href="/dashboard" className="hover:text-white transition-colors">
                      All Modules
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="hover:text-white transition-colors">
                      Create Account
                    </Link>
                  </li>
                  <li>
                    <a href="https://saufex.eu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      About SAUFEX
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="mailto:info@saufex.eu" className="hover:text-white transition-colors">
                      info@saufex.eu
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/bvaGd5rahu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Join Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
              <p>
                &copy; {new Date().getFullYear()} SAUFEX Consortium. All rights reserved.
                <span className="mx-2">|</span>
                <a
                  href="https://saufex.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-light hover:text-white transition-colors"
                >
                  saufex.eu
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
