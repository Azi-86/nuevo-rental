'use client'

import { useState } from 'react'
import type { Booking, BookingStatus } from '@/types'

export default function BookingsTable({ initialBookings }: { initialBookings: Booking[] }) {
  const [bookings, setBookings] = useState(initialBookings)

  async function updateStatus(id: string, status: BookingStatus) {
    const res = await fetch('/api/bookings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    if (res.ok) {
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b))
    }
  }

  if (bookings.length === 0) {
    return <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>No bookings yet.</p>
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Guest</th>
            <th>Email</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Guests</th>
            <th>Message</th>
            <th>Status</th>
            <th>Received</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id}>
              <td style={{ fontWeight: 500 }}>{b.guest_name}</td>
              <td><a href={`mailto:${b.guest_email}`} style={{ color: 'var(--accent)' }}>{b.guest_email}</a></td>
              <td>{b.check_in}</td>
              <td>{b.check_out}</td>
              <td>{b.guests}</td>
              <td style={{ maxWidth: 200, color: 'var(--muted)', fontSize: '0.78rem' }}>{b.message || '—'}</td>
              <td>
                <select
                  value={b.status}
                  onChange={e => updateStatus(b.id, e.target.value as BookingStatus)}
                  style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>
              <td style={{ color: 'var(--muted)', fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                {new Date(b.created_at).toLocaleDateString('en-CA')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
