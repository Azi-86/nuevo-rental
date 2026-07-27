import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { startOfMonth, endOfMonth } from 'date-fns'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const year = parseInt(searchParams.get('year') ?? String(new Date().getFullYear()))
  const month = parseInt(searchParams.get('month') ?? String(new Date().getMonth() + 1))

  const first = startOfMonth(new Date(year, month - 1))
  const last = endOfMonth(first)
  const firstStr = first.toISOString().slice(0, 10)
  const lastStr = last.toISOString().slice(0, 10)

  const supabase = createServerClient()

  const { data: blocked } = await supabase
    .from('blocked_dates')
    .select('date')
    .gte('date', firstStr)
    .lte('date', lastStr)

  return NextResponse.json((blocked ?? []).map(b => b.date))
}
