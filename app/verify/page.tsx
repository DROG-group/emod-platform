'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function VerifyPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const normalizedCode = code.toUpperCase().replace(/[^A-Z0-9]/g, '')
    if (normalizedCode.length !== 12) {
      setError('Please enter a valid 12-character certificate code')
      return
    }

    router.push(`/verify/${normalizedCode}`)
  }

  function formatCode(value: string) {
    const clean = value.toUpperCase().replace(/[^A-Z0-9]/g, '')
    const parts = []
    for (let i = 0; i < clean.length && i < 12; i += 4) {
      parts.push(clean.slice(i, i + 4))
    }
    return parts.join('-')
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
          <h1 className="text-2xl font-bold text-gray-900">Verify Certificate</h1>
          <p className="text-gray-600 mt-2">
            Enter a certificate code to verify its authenticity
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="label">Certificate Code</label>
              <input
                type="text"
                className="input text-center font-mono text-lg tracking-wider"
                placeholder="XXXX-XXXX-XXXX"
                value={formatCode(code)}
                onChange={(e) => setCode(e.target.value)}
                maxLength={14}
              />
              <p className="text-xs text-gray-500 mt-2">
                The code is printed on the certificate
              </p>
            </div>

            <button type="submit" className="w-full btn btn-primary py-3">
              Verify Certificate
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            EMOD certificates are issued by SAUFEX for completing learning paths
            on the European Master of Countering Disinformation platform.
          </p>
        </div>
      </div>
    </div>
  )
}
