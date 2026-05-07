'use client'

import { useState, useEffect } from 'react'
import type { DateRange } from 'react-day-picker'
import { format, differenceInCalendarDays } from 'date-fns'
import dynamic from 'next/dynamic'
const AvailabilityCalendar = dynamic(() => import('./AvailabilityCalendar'), { ssr: false })

export default function BookingForm() {
  const [range, setRange] = useState<DateRange | undefined>()
  const [nextAvailable, setNextAvailable] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/next-available')
      .then(r => r.json())
      .then(data => setNextAvailable(data.date ?? null))
  }, [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState('1')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const nights = range?.from && range?.to ? differenceInCalendarDays(range.to, range.from) : 0

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!range?.from || !range?.to) { setErrorMsg('Please select check-in and check-out dates.'); setStatus('error'); return }
    if (nights < 30) { setErrorMsg('Minimum stay is 30 nights (1 month).'); setStatus('error'); return }
    if (!name.trim()) { setErrorMsg('Please enter your name.'); setStatus('error'); return }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErrorMsg('Please enter a valid email address.'); setStatus('error'); return }

    setStatus('loading')
    setErrorMsg('')

    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        guest_name: name.trim(),
        guest_email: email.trim(),
        check_in: format(range.from, 'yyyy-MM-dd'),
        check_out: format(range.to, 'yyyy-MM-dd'),
        guests: parseInt(guests),
        message: message.trim(),
      }),
    })

    if (res.ok) {
      setStatus('success')
      setRange(undefined); setName(''); setEmail(''); setGuests('1'); setMessage('')
    } else {
      const data = await res.json().catch(() => ({}))
      setErrorMsg(data.error || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="book-form">
        <div className="form-success">
          <p>&#10003; Request sent! We&apos;ll be in touch within a few hours to confirm.</p>
        </div>
      </div>
    )
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Select Dates</label>
        <AvailabilityCalendar selected={range} onSelect={setRange} />
        {range?.from && range?.to && (
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
            {format(range.from, 'MMM d')} → {format(range.to, 'MMM d')} · {nights} night{nights !== 1 ? 's' : ''}
          </p>
        )}
        {nextAvailable && (
          <p style={{ fontSize: '0.85rem', color: 'var(--foreground)', marginTop: '0.5rem', fontWeight: 500 }}>
            Next available date: {format(new Date(nextAvailable + 'T00:00:00'), 'MMMM d, yyyy')}
          </p>
        )}
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="guests">Guests</label>
        <select id="guests" value={guests} onChange={e => setGuests(e.target.value)}>
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" rows={3} placeholder="Any questions or special requests?" value={message} onChange={e => setMessage(e.target.value)} />
      </div>

      {status === 'error' && <div className="form-error"><p>{errorMsg}</p></div>}

      <button type="submit" className="btn btn--accent btn--full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Request'}
      </button>
      <p className="form-note">We&apos;ll reply within a few hours. No payment required to inquire.</p>
    </form>
  )
}
