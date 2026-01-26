import { describe, it, expect } from 'vitest'
import { isValidRedirect, getSafeRedirect, ALLOWED_REDIRECTS } from './auth-utils'

describe('isValidRedirect', () => {
  describe('valid paths', () => {
    it('accepts /dashboard', () => {
      expect(isValidRedirect('/dashboard')).toBe(true)
    })

    it('accepts /modules', () => {
      expect(isValidRedirect('/modules')).toBe(true)
    })

    it('accepts subpaths of allowed routes', () => {
      expect(isValidRedirect('/modules/some-module')).toBe(true)
      expect(isValidRedirect('/dashboard/settings')).toBe(true)
    })

    it('accepts all whitelisted paths', () => {
      ALLOWED_REDIRECTS.forEach(path => {
        expect(isValidRedirect(path)).toBe(true)
      })
    })
  })

  describe('invalid paths', () => {
    it('rejects absolute URLs', () => {
      expect(isValidRedirect('https://evil.com')).toBe(false)
      expect(isValidRedirect('http://evil.com')).toBe(false)
    })

    it('rejects protocol-relative URLs', () => {
      expect(isValidRedirect('//evil.com')).toBe(false)
      expect(isValidRedirect('//evil.com/dashboard')).toBe(false)
    })

    it('rejects URLs with protocols in path', () => {
      expect(isValidRedirect('/redirect?url=https://evil.com')).toBe(false)
      expect(isValidRedirect('/foo:bar')).toBe(false)
    })

    it('rejects paths not starting with /', () => {
      expect(isValidRedirect('dashboard')).toBe(false)
      expect(isValidRedirect('evil.com')).toBe(false)
    })

    it('rejects non-whitelisted paths', () => {
      expect(isValidRedirect('/admin')).toBe(false)
      expect(isValidRedirect('/api/secret')).toBe(false)
      expect(isValidRedirect('/login')).toBe(false)
    })

    it('rejects empty string', () => {
      expect(isValidRedirect('')).toBe(false)
    })
  })

  describe('edge cases', () => {
    it('rejects javascript: protocol', () => {
      expect(isValidRedirect('javascript:alert(1)')).toBe(false)
    })

    it('rejects data: protocol', () => {
      expect(isValidRedirect('data:text/html,<script>alert(1)</script>')).toBe(false)
    })

    it('rejects paths that look like allowed but are not', () => {
      expect(isValidRedirect('/dashboardevil')).toBe(false)
      expect(isValidRedirect('/modulesx')).toBe(false)
    })
  })
})

describe('getSafeRedirect', () => {
  it('returns the path if valid', () => {
    expect(getSafeRedirect('/dashboard')).toBe('/dashboard')
    expect(getSafeRedirect('/modules/test')).toBe('/modules/test')
  })

  it('returns /dashboard for invalid paths', () => {
    expect(getSafeRedirect('https://evil.com')).toBe('/dashboard')
    expect(getSafeRedirect('//evil.com')).toBe('/dashboard')
    expect(getSafeRedirect('/admin')).toBe('/dashboard')
  })

  it('returns /dashboard for null', () => {
    expect(getSafeRedirect(null)).toBe('/dashboard')
  })

  it('returns /dashboard for empty string', () => {
    expect(getSafeRedirect('')).toBe('/dashboard')
  })
})
