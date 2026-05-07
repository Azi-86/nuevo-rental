import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { eachDayOfInterval, parseISO, startOfMonth, endOfMonth } from 'date-fns'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const year = parseInt(searchParams.get('year') ?? String(new Date().getFullYear()))
  const month = parseInt(searchParams.get('month') ?? String(new Date().getMonth() + 1))

  const first = startOfMonth(new Date(year, month - 1))
  const last = endOfMonth(first)
  const firstStr = first.toISOString().slice(0, 10)
  const lastStr = last.toISOString().slice(0, 10)

  const supabase = createServerClient()

  const [{ data: bookings }, { data: blocked }] = await Promise.all([
    supabase
      .from('bookings')
      .select('check_in, check_out')
      .in('status', ['pending', 'confirmed'])
      .lte('check_in', lastStr)
      .gte('check_out', firstStr),
    supabase
      .from('blocked_dates')
      .select('date')
      .gte('date', firstStr)
      .lte('date', lastStr),
  ])

  const unavailable = new Set<string>()

  for (const b of bookings ?? []) {
    eachDayOfInterval({ start: parseISO(b.check_in), end: parseISO(b.check_out) })
      .forEach(d => unavailable.add(d.toISOString().slice(0, 10)))
  }
  for (const b of blocked ?? []) {
    unavailable.add(b.date)
  }

  return NextResponse.json([...unavailable])
}
