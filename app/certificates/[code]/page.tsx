'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { Certificate, QuizAttempt } from '@/types/database'

export default function CertificateViewPage() {
  const params = useParams()
  const code = params.code as string
  const [certificate, setCertificate] = useState<Certificate | null>(null)
  const [quizAttempt, setQuizAttempt] = useState<QuizAttempt | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchCertificate() {
      const supabase = createClient()
      const normalizedCode = code.toUpperCase().replace(/[^A-Z0-9]/g, '')
      const formattedCode = `${normalizedCode.slice(0, 4)}-${normalizedCode.slice(4, 8)}-${normalizedCode.slice(8, 12)}`

      const { data: certData, error: certError } = await supabase
        .from('certificates')
        .select('*')
        .eq('certificate_code', formattedCode)
        .single()

      if (certError || !certData) {
        setError(true)
        setLoading(false)
        return
      }

      setCertificate(certData)

      // Check for quiz attempt
      const { data: quizData } = await supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', certData.user_id)
        .eq('learning_path', certData.learning_path)
        .single()

      if (quizData) {
        setQuizAttempt(quizData)
      }

      setLoading(false)
    }

    fetchCertificate()
  }, [code])

  const isVerified = quizAttempt?.passed || false

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple"></div>
      </div>
    )
  }

  if (error || !certificate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Certificate Not Found</h1>
          <p className="text-gray-600 mb-6">The certificate code you entered is invalid.</p>
          <Link href="/verify" className="btn btn-primary">
            Try Again
          </Link>
        </div>
      </div>
    )
  }

  const verifyUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/verify/${certificate.certificate_code}`

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:py-0 print:bg-white">
      {/* Print Button */}
      <div className="container mb-6 print:hidden">
        <div className="flex items-center justify-between">
          <Link href="/certificates" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Certificates
          </Link>
          <button
            onClick={() => window.print()}
            className="btn btn-primary flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Certificate
          </button>
        </div>
      </div>

      {/* Certificate */}
      <div className="container max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg print:shadow-none print:rounded-none overflow-hidden">
          {/* Certificate Content */}
          <div className="p-8 md:p-12 print:p-16 relative">
            {/* Decorative Border */}
            <div className="absolute inset-4 border-4 border-purple/20 rounded-lg print:border-purple/30"></div>
            <div className="absolute inset-6 border border-purple/10 rounded-lg print:border-purple/20"></div>

            {/* Content */}
            <div className="relative text-center py-8">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/saufex-logo.svg"
                  alt="SAUFEX"
                  width={160}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>

              {/* Title */}
              <div className="mb-8">
                <p className="text-purple uppercase tracking-widest text-sm font-semibold mb-2">
                  European Master of Countering Disinformation
                </p>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                  Certificate of Completion
                </h1>
                {isVerified && (
                  <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified by Quiz Assessment
                  </div>
                )}
              </div>

              {/* Recipient */}
              <div className="mb-8">
                <p className="text-gray-500 text-lg mb-2">This certifies that</p>
                <p className="text-3xl md:text-4xl font-display font-bold text-purple">
                  {certificate.recipient_name}
                </p>
              </div>

              {/* Achievement */}
              <div className="mb-8 max-w-xl mx-auto">
                <p className="text-gray-600 text-lg leading-relaxed">
                  has successfully completed all modules in the
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-2 mb-2">
                  {certificate.learning_path}
                </p>
                <p className="text-gray-600 text-lg">
                  learning path of the EMOD platform
                </p>
              </div>

              {/* Date */}
              <div className="mb-8">
                <p className="text-gray-500">Issued on</p>
                <p className="text-xl font-semibold text-gray-900">
                  {new Date(certificate.issued_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              {/* Verification */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Verification Code</p>
                <code className="text-lg font-mono font-bold text-purple bg-purple/5 px-4 py-2 rounded-lg">
                  {certificate.certificate_code}
                </code>
                <p className="text-xs text-gray-400 mt-3">
                  Verify at: {verifyUrl}
                </p>
              </div>

              {/* EU Funding Acknowledgment */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-4">
                <Image
                  src="/images/eu-funded.svg"
                  alt="Funded by the European Union"
                  width={120}
                  height={40}
                  className="h-8 w-auto opacity-70"
                />
                <p className="text-xs text-gray-400 text-left max-w-xs">
                  SAUFEX is funded by the European Union under the Horizon Europe programme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          nav, .print\\:hidden {
            display: none !important;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `}</style>
    </div>
  )
}
