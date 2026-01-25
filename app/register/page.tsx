'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { signUp, user, loading: authLoading } = useAuth()
  const router = useRouter()

  // Redirect if already logged in
  useEffect(() => {
    if (!authLoading && user) {
      router.push('/dashboard')
    }
  }, [user, authLoading, router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!role) {
      setError('Please select your role')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    const { error } = await signUp(email, password, {
      full_name: fullName,
      role: role,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple"></div>
      </div>
    )
  }

  // Show success message
  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
            <p className="text-gray-600 mb-6">
              We&apos;ve sent a confirmation link to <strong>{email}</strong>.
              Click the link to activate your account.
            </p>
            <Link href="/login" className="btn btn-primary">
              Go to Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/saufex-logo.svg"
            alt="SAUFEX"
            width={120}
            height={40}
            className="h-10 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
          <p className="text-gray-600 mt-2">Start learning for free</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="label">Email Address</label>
              <input
                type="email"
                className="input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                disabled={loading}
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
            </div>
            <div>
              <label className="label">I am a...</label>
              <select
                className="input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                disabled={loading}
              >
                <option value="">Select your role</option>
                <option value="citizen">Citizen / General Public</option>
                <option value="policymaker">Policymaker</option>
                <option value="journalist">Journalist</option>
                <option value="researcher">Researcher</option>
                <option value="platform-team">Platform / Tech Team</option>
                <option value="comms-professional">Communications Professional</option>
                <option value="educator">Educator</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full btn btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-purple font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center">
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">
            Continue browsing as guest →
          </Link>
        </p>
      </div>
    </div>
  )
}
