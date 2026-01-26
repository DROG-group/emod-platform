import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
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
          <ToastProvider>
            <NavBar />
            <main className="pt-16 lg:pt-20">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
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
                    className="h-10 w-auto mb-4"
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
              <div className="border-t border-gray-800 pt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://new.saufex.eu/images/eu-funded.svg"
                      alt="Funded by the European Union"
                      className="h-12 w-auto"
                    />
                    <p className="text-gray-400 text-xs max-w-xs">
                      Funded by the European Union. Views expressed are those of the authors only.
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <a
                      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <img
                        src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
                        alt="CC BY-NC-SA 4.0"
                        className="h-6 w-auto"
                      />
                    </a>
                    <div className="text-gray-500 text-sm">
                      <p>
                        &copy; {new Date().getFullYear()} SAUFEX Consortium
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
                </div>
              </div>
            </div>
          </footer>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
