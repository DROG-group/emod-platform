'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'
import { useState } from 'react'

export default function NavBar() {
  const { user, profile, signOut, loading } = useAuth()
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    setShowDropdown(false)
  }

  return (
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
          <div className="flex items-center gap-1 lg:gap-2">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-purple font-medium px-3 py-2 rounded-lg hover:bg-purple/5 transition-all"
            >
              Modules
            </Link>
            <Link
              href="/about"
              className="hidden sm:block text-gray-600 hover:text-purple font-medium px-3 py-2 rounded-lg hover:bg-purple/5 transition-all"
            >
              About
            </Link>
            <Link
              href="/glossary"
              className="hidden md:block text-gray-600 hover:text-purple font-medium px-3 py-2 rounded-lg hover:bg-purple/5 transition-all"
            >
              Glossary
            </Link>
            <Link
              href="/handbook"
              className="hidden lg:block text-gray-600 hover:text-purple font-medium px-3 py-2 rounded-lg hover:bg-purple/5 transition-all"
            >
              For Educators
            </Link>

            {/* Auth Section */}
            {loading ? (
              <div className="w-24 h-10 bg-gray-100 animate-pulse rounded-lg ml-2" />
            ) : user ? (
              <div className="relative ml-2">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple/5 transition-all"
                >
                  <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {profile?.full_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || '?'}
                  </div>
                  <span className="hidden sm:block text-gray-700 font-medium max-w-[120px] truncate">
                    {profile?.full_name?.split(' ')[0] || 'Account'}
                  </span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {profile?.full_name || 'User'}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <Link
                        href="/dashboard"
                        onClick={() => setShowDropdown(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        My Progress
                      </Link>
                      <Link
                        href="/certificates"
                        onClick={() => setShowDropdown(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        My Certificates
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="btn btn-primary text-sm lg:text-base ml-2"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
