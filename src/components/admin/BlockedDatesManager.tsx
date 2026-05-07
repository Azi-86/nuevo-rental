'use client'

import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

export default function BlockedDatesManager() {
  const [blocked, setBlocked] = useState<Date[]>([])
  const [month, setMonth] = useState(new Date())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadBlocked() {
    const prev = new Date(month.getFullYear(), month.getMonth() - 1)
    const next = new Date(month.getFullYear(), month.getMonth() + 1)
    const [a, b, c] = await Promise.all([
      fetch(`/api/availability?year=${prev.getFullYear()}&month=${prev.getMonth() + 1}`).then(r => r.json()),
      fetch(`/api/availability?year=${month.getFullYear()}&month=${month.getMonth() + 1}`).then(r => r.json()),
      fetch(`/api/availability?year=${next.getFullYear()}&month=${next.getMonth() + 1}`).then(r => r.json()),
    ])
    const all: string[] = [...a, ...b, ...c]
    setBlocked(all.map(d => new Date(d + 'T12:00:00')))
  }

  useEffect(() => { loadBlocked() }, [month])

  async function toggleDate(date: Date) {
    if (loading) return
    setLoading(true)
    setError('')
    const dateStr = format(date, 'yyyy-MM-dd')
    const isBlocked = blocked.some(d => format(d, 'yyyy-MM-dd') === dateStr)

    const res = await fetch('/api/blocked-dates', {
      method: isBlocked ? 'DELETE' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: dateStr }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(`Error ${res.status}: ${data.error || 'Unknown error'}`)
    }

    await loadBlocked()
    setLoading(false)
  }

  return (
    <div>
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '1rem' }}>
        Click any date to block or unblock it. Blocked dates (including confirmed bookings) are shown in grey.
      </p>
      {error && <p style={{ fontSize: '0.82rem', color: '#6a2d2d', marginBottom: '1rem' }}>{error}</p>}
      {loading && <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Saving…</p>}
      <div className="calendar-wrapper">
        <DayPicker
          month={month}
          onMonthChange={setMonth}
          onDayClick={toggleDate}
          modifiers={{ blocked: (date) => blocked.some(d => format(d, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')) }}
          modifiersStyles={{ blocked: { color: '#ccc', textDecoration: 'line-through', opacity: 0.5 } }}
          numberOfMonths={1}
          showOutsideDays
        />
      </div>
    </div>
  )
}
