'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { Certificate } from '@/types/database'

export default function VerifyResultPage() {
  const params = useParams()
  const code = params.code as string
  const [certificate, setCertificate] = useState<Certificate | null>(null)
  const [loading, setLoading] = useState(true)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    async function verifyCertificate() {
      const supabase = createClient()
      const normalizedCode = code.toUpperCase().replace(/[^A-Z0-9]/g, '')
      const formattedCode = `${normalizedCode.slice(0, 4)}-${normalizedCode.slice(4, 8)}-${normalizedCode.slice(8, 12)}`

      const { data } = await supabase
        .from('certificates')
        .select('*')
        .eq('certificate_code', formattedCode)
        .single()

      if (data) {
        setCertificate(data)
        setVerified(true)
      }
      setLoading(false)
    }

    verifyCertificate()
  }, [code])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying certificate...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Image
            src="/saufex-logo.svg"
            alt="SAUFEX"
            width={120}
            height={40}
            className="h-10 w-auto mx-auto mb-4"
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {verified && certificate ? (
            <>
              {/* Success Header */}
              <div className="bg-green-50 border-b border-green-100 p-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-green-800">Certificate Verified</h1>
                    <p className="text-green-600 text-sm">This is a valid EMOD certificate</p>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start py-3 border-b border-gray-100">
                  <span className="text-gray-500">Recipient</span>
                  <span className="text-gray-900 font-semibold text-right">{certificate.recipient_name}</span>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-gray-100">
                  <span className="text-gray-500">Learning Path</span>
                  <span className="text-gray-900 font-semibold text-right">{certificate.learning_path}</span>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-gray-100">
                  <span className="text-gray-500">Issue Date</span>
                  <span className="text-gray-900 font-semibold">
                    {new Date(certificate.issued_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-start py-3">
                  <span className="text-gray-500">Certificate Code</span>
                  <code className="text-purple font-mono bg-purple/5 px-2 py-1 rounded">
                    {certificate.certificate_code}
                  </code>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-100 p-4">
                <p className="text-xs text-gray-500 text-center">
                  This certificate was issued by the EMOD platform, part of the SAUFEX project
                  funded by the European Union under Horizon Europe.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Error Header */}
              <div className="bg-red-50 border-b border-red-100 p-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-red-800">Not Found</h1>
                    <p className="text-red-600 text-sm">This certificate could not be verified</p>
                  </div>
                </div>
              </div>

              {/* Error Details */}
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-4">
                  The certificate code you entered does not match any certificate in our system.
                  Please check the code and try again.
                </p>
                <code className="text-gray-500 font-mono bg-gray-100 px-3 py-2 rounded block mb-6">
                  {code.toUpperCase()}
                </code>
                <Link href="/verify" className="btn btn-primary">
                  Try Again
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            Learn more about EMOD
          </Link>
        </div>
      </div>
    </div>
  )
}
