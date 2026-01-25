import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Return null-safe client during build or when env vars are missing
  if (!supabaseUrl || !supabaseKey || supabaseUrl === 'your_project_url_here') {
    // Return a mock client that does nothing during build
    return {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signInWithPassword: async () => ({ error: new Error('Supabase not configured') }),
        signUp: async () => ({ error: new Error('Supabase not configured') }),
        signOut: async () => {},
      },
      from: () => ({
        select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
        upsert: () => ({ select: () => ({ single: async () => ({ data: null, error: null }) }) }),
      }),
    } as any
  }

  return createBrowserClient(supabaseUrl, supabaseKey)
}
