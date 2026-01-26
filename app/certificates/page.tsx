'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useCertificates } from '@/hooks/useCertificates'

export default function CertificatesPage() {
  const { user, loading: authLoading } = useAuth()
  const { certificates, loading: certsLoading } = useCertificates()
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?redirect=/certificates')
    }
  }, [user, authLoading, router])

  if (authLoading || certsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="container py-8 lg:py-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            My Certificates
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Certificates earned by completing all modules in a learning path.
            Share your verification code with employers to prove your credentials.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          {certificates.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No certificates yet</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Complete all modules in a learning path to earn your first certificate.
              </p>
              <Link href="/dashboard" className="btn btn-primary">
                Browse Learning Paths
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert) => (
                <Link
                  key={cert.id}
                  href={`/certificates/${cert.certificate_code}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="bg-gradient-to-r from-purple to-purple-light p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-purple-100">Certificate</span>
                    </div>
                    <h3 className="text-lg font-bold">{cert.learning_path}</h3>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Issued</span>
                      <span className="text-gray-900 font-medium">
                        {new Date(cert.issued_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Code</span>
                      <code className="text-purple font-mono text-xs bg-purple/5 px-2 py-1 rounded">
                        {cert.certificate_code}
                      </code>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm text-gray-500">View certificate</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
