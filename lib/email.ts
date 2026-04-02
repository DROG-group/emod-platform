const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'
const fromEmail = 'noreply@saufex.eu'
const fromName = 'EMOD Platform'

async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string | string[]
  subject: string
  html: string
}) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    console.warn('Email skipped: BREVO_API_KEY is not configured')
    return
  }

  const recipients = Array.isArray(to) ? to : [to]

  const res = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: { name: fromName, email: fromEmail },
      to: recipients.map(email => ({ email })),
      subject,
      htmlContent: html,
    }),
  })

  if (!res.ok) {
    const errText = await res.text()
    console.error('Brevo email error:', res.status, errText)
    throw new Error(`Failed to send email: ${res.status}`)
  }
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  await sendEmail({
    to,
    subject: 'Reset Your EMOD Password',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #7c3aed, #9f67ff); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">Password Reset</h1>
        </div>
        <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e9ecef; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="margin: 0 0 16px; color: #333;">You requested a password reset for your EMOD account.</p>
          <p style="margin: 0 0 24px; color: #333;">Click the button below to set a new password. This link expires in 1 hour.</p>
          <a href="${resetUrl}" style="display: inline-block; background: #7c3aed; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Reset Password</a>
          <p style="margin: 24px 0 0; color: #999; font-size: 13px;">If you didn't request this, you can safely ignore this email.</p>
        </div>
      </div>
    `,
  })
}
