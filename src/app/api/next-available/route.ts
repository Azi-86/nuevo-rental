import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { addDays, format, startOfDay } from 'date-fns'

export async function GET() {
  const supabase = createServerClient()
  const today = startOfDay(new Date())
  const maxDate = addDays(today, 365)
  const todayStr = format(today, 'yyyy-MM-dd')
  const maxStr = format(maxDate, 'yyyy-MM-dd')

  const [{ data: blocked }, { data: bookings }] = await Promise.all([
    supabase.from('blocked_dates').select('date').gte('date', todayStr).lte('date', maxStr),
    supabase.from('bookings').select('check_in, check_out')
      .in('status', ['pending', 'confirmed'])
      .gte('check_out', todayStr)
      .lte('check_in', maxStr),
  ])

  const unavailable = new Set<string>()
  for (const b of blocked ?? []) unavailable.add(b.date)
  for (const b of bookings ?? []) {
    let d = new Date(b.check_in + 'T12:00:00')
    const end = new Date(b.check_out + 'T12:00:00')
    while (d <= end) {
      unavailable.add(format(d, 'yyyy-MM-dd'))
      d = addDays(d, 1)
    }
  }

  let date = addDays(today, 1)
  for (let i = 0; i < 365; i++) {
    const dateStr = format(date, 'yyyy-MM-dd')
    if (!unavailable.has(dateStr)) {
      return NextResponse.json({ date: dateStr })
    }
    date = addDays(date, 1)
  }

  return NextResponse.json({ date: null })
}
