import { Resend } from 'resend'
import type { Booking } from '@/types'

export async function sendOwnerNotification(booking: Booking) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const checkIn = new Date(booking.check_in).toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const checkOut = new Date(booking.check_out).toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  await resend.emails.send({
    from: process.env.RESEND_FROM_ADDRESS!,
    to: process.env.OWNER_EMAIL!,
    subject: `New booking request from ${booking.guest_name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #f8f6f2; border-radius: 8px;">
        <h1 style="font-size: 22px; font-weight: 400; color: #1c1a17; margin-bottom: 4px;">New Booking Request</h1>
        <p style="font-size: 13px; color: #8a8278; margin-bottom: 28px;">Nuevo Premium Monthly Rentals</p>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #8a8278; width: 140px;">Guest</td><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #1c1a17; font-weight: 500;">${booking.guest_name}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #8a8278;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9;"><a href="mailto:${booking.guest_email}" style="color: #a0714f;">${booking.guest_email}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #8a8278;">Check-in</td><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #1c1a17;">${checkIn}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #8a8278;">Check-out</td><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #1c1a17;">${checkOut}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #8a8278;">Guests</td><td style="padding: 10px 0; border-bottom: 1px solid #e4e0d9; color: #1c1a17;">${booking.guests}</td></tr>
          ${booking.message ? `<tr><td style="padding: 10px 0; color: #8a8278; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #1c1a17;">${booking.message}</td></tr>` : ''}
        </table>

        <p style="margin-top: 28px; font-size: 12px; color: #8a8278;">Reply directly to ${booking.guest_email} to confirm or follow up.</p>
      </div>
    `,
  })
}
