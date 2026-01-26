import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { AuthProvider } from "@/contexts/AuthContext";
import NavBar from "@/components/NavBar";

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
        <AuthProvider>
          <NavBar />
          <main className="pt-16 lg:pt-20">
            {children}
          </main>
          <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
                  <h4 className="font-semibold mb-4">Learn</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>
                      <Link href="/dashboard" className="hover:text-white transition-colors">
                        All Modules
                      </Link>
                    </li>
                    <li>
                      <Link href="/glossary" className="hover:text-white transition-colors">
                        Glossary
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="hover:text-white transition-colors">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/handbook" className="hover:text-white transition-colors">
                        Teachers Handbook
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">About</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>
                      <Link href="/about" className="hover:text-white transition-colors">
                        About EMOD
                      </Link>
                    </li>
                    <li>
                      <a href="https://saufex.eu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        SAUFEX Project
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
              {/* EU Funding Disclaimer */}
              <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Image
                  src="/images/eu-funded.svg"
                  alt="Funded by the European Union"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
                <p className="text-gray-400 text-xs text-center sm:text-left max-w-md">
                  Funded by the European Union. Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union or the European Commission. Neither the European Union nor the granting authority can be held responsible for them.
                </p>
              </div>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
