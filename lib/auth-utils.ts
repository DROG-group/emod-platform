/**
 * Allowed redirect paths after authentication.
 * Prevents open redirect attacks by validating against a whitelist.
 */
export const ALLOWED_REDIRECTS = ['/dashboard', '/modules', '/about', '/faq', '/glossary', '/handbook']

/**
 * Validates if a redirect path is safe to use.
 * Returns true only for paths that:
 * - Start with /
 * - Don't contain protocol indicators
 * - Match the whitelist or are subpaths of allowed routes
 */
export function isValidRedirect(path: string): boolean {
  // Must start with / and not contain protocol or double slashes
  if (!path.startsWith('/') || path.startsWith('//') || path.includes(':')) {
    return false
  }
  // Check against whitelist or allow paths starting with allowed prefixes
  return ALLOWED_REDIRECTS.some(allowed => path === allowed || path.startsWith(`${allowed}/`))
}

/**
 * Returns a safe redirect path, defaulting to /dashboard if invalid.
 */
export function getSafeRedirect(requestedPath: string | null): string {
  if (requestedPath && isValidRedirect(requestedPath)) {
    return requestedPath
  }
  return '/dashboard'
}
