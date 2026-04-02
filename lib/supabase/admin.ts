import { createClient } from '@supabase/supabase-js'

export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const authUrl = process.env.NEXT_PUBLIC_SUPABASE_AUTH_URL
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)')
  }
  return createClient(supabaseUrl, supabaseServiceKey, {
    global: {
      fetch: async (input, init) => {
        let url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : (input as Request).url
        // PostgREST is exposed directly without /rest/v1/ prefix
        if (url.includes('/rest/v1/')) {
          url = url.replace('/rest/v1/', '/')
        }
        // Auth is on a separate URL
        if (authUrl && url.includes('/auth/v1/')) {
          const authPath = url.split('/auth/v1/')[1]
          return fetch(`${authUrl}/${authPath}`, init)
        }
        return fetch(url, init)
      },
    },
  })
}
