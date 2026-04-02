import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// Allowed redirect paths to prevent open redirect attacks
const ALLOWED_REDIRECTS = ['/dashboard', '/modules', '/about', '/faq', '/glossary', '/handbook', '/reset-password']

function isValidRedirect(path: string): boolean {
  // Must start with / and not contain protocol or double slashes
  if (!path.startsWith('/') || path.startsWith('//') || path.includes(':')) {
    return false
  }
  // Check against whitelist or allow paths starting with allowed prefixes
  return ALLOWED_REDIRECTS.some(allowed => path === allowed || path.startsWith(`${allowed}/`))
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const requestedNext = searchParams.get('next')

  // Validate redirect path - default to /dashboard if invalid
  const next = requestedNext && isValidRedirect(requestedNext) ? requestedNext : '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // Return to login with error if auth fails
  return NextResponse.redirect(`${origin}/login?error=auth_failed`)
}
