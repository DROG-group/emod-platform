'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/contexts/AuthContext'
import { Certificate } from '@/types/database'

function generateCertificateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 12; i++) {
    if (i === 4 || i === 8) code += '-'
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

export function useCertificates() {
  const { user, profile } = useAuth()
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    if (user) {
      fetchCertificates()
    } else {
      setCertificates([])
      setLoading(false)
    }
  }, [user])

  async function fetchCertificates() {
    if (!user) return
    setLoading(true)
    const { data } = await supabase
      .from('certificates')
      .select('*')
      .eq('user_id', user.id)
      .order('issued_at', { ascending: false })
    setCertificates(data || [])
    setLoading(false)
  }

  const claimCertificate = useCallback(async (learningPath: string) => {
    if (!user || !profile) return { data: null, error: new Error('Not authenticated') }

    const recipientName = profile.full_name || user.email || 'Unknown'
    const certificateCode = generateCertificateCode()

    const { data, error } = await supabase
      .from('certificates')
      .insert({
        user_id: user.id,
        certificate_code: certificateCode,
        learning_path: learningPath,
        recipient_name: recipientName,
      })
      .select()
      .single()

    if (!error && data) {
      setCertificates(prev => [data, ...prev])
    }
    return { data, error }
  }, [user, profile, supabase])

  const getCertificateForPath = useCallback((learningPath: string) => {
    return certificates.find(c => c.learning_path === learningPath) || null
  }, [certificates])

  const hasCertificateForPath = useCallback((learningPath: string) => {
    return certificates.some(c => c.learning_path === learningPath)
  }, [certificates])

  return {
    certificates,
    loading,
    claimCertificate,
    getCertificateForPath,
    hasCertificateForPath,
    refresh: fetchCertificates,
  }
}

export async function verifyCertificate(code: string): Promise<Certificate | null> {
  const supabase = createClient()
  const { data } = await supabase
    .from('certificates')
    .select('*')
    .eq('certificate_code', code.toUpperCase().replace(/[^A-Z0-9]/g, ''))
    .single()
  return data
}
