import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { randomBytes } from 'crypto'
import { sendPasswordResetEmail } from '@/lib/email'

// POST - Request password reset (send email)
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const adminClient = createAdminClient()

    // Check if user exists (don't reveal this to the client)
    const { data: user } = await adminClient
      .from('profiles')
      .select('id, email')
      .eq('email', email.toLowerCase().trim())
      .single()

    // Always return success to prevent email enumeration
    if (!user) {
      return NextResponse.json({ success: true })
    }

    // Generate token
    const token = randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    // Delete any existing tokens for this email
    await adminClient
      .from('password_reset_tokens')
      .delete()
      .eq('email', email.toLowerCase().trim())

    // Store token
    const { error: tokenError } = await adminClient
      .from('password_reset_tokens')
      .insert({
        email: email.toLowerCase().trim(),
        token,
        expires_at: expiresAt.toISOString(),
      })

    if (tokenError) {
      console.error('Failed to store reset token:', tokenError)
      return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
    }

    // Send email via Brevo
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://emod.saufex.eu'
    const resetUrl = `${baseUrl}/reset-password?token=${token}`

    try {
      await sendPasswordResetEmail(email, resetUrl)
    } catch (emailErr) {
      console.error('Failed to send reset email:', emailErr)
      // Still return success to not leak info, but log the error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Password reset error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}

// PATCH - Set new password using token
export async function PATCH(request: NextRequest) {
  try {
    const { token, password } = await request.json()

    if (!token || !password) {
      return NextResponse.json({ error: 'Token and password are required' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const adminClient = createAdminClient()

    // Find valid token
    const { data: resetToken } = await adminClient
      .from('password_reset_tokens')
      .select('*')
      .eq('token', token)
      .is('used_at', null)
      .gt('expires_at', new Date().toISOString())
      .single()

    if (!resetToken) {
      return NextResponse.json({ error: 'Invalid or expired reset link. Please request a new one.' }, { status: 400 })
    }

    // Find the auth user by email
    const { data: profile } = await adminClient
      .from('profiles')
      .select('id')
      .eq('email', resetToken.email)
      .single()

    if (!profile) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 })
    }

    // Use GoTrue admin API to update the password
    const authUrl = process.env.NEXT_PUBLIC_SUPABASE_AUTH_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!authUrl || !serviceKey) {
      console.error('Missing NEXT_PUBLIC_SUPABASE_AUTH_URL or SUPABASE_SERVICE_ROLE_KEY')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const authResponse = await fetch(`${authUrl}/admin/users/${profile.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${serviceKey}`,
        'apikey': serviceKey,
      },
      body: JSON.stringify({ password }),
    })

    if (!authResponse.ok) {
      const errData = await authResponse.text()
      console.error('GoTrue password update failed:', errData)
      return NextResponse.json({ error: 'Failed to update password' }, { status: 500 })
    }

    // Mark token as used
    await adminClient
      .from('password_reset_tokens')
      .update({ used_at: new Date().toISOString() })
      .eq('id', resetToken.id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Password reset error:', error)
    return NextResponse.json({ error: 'Failed to reset password' }, { status: 500 })
  }
}
