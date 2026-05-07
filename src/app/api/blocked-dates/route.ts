import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@/lib/supabase/server'

async function isAdmin() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === process.env.ADMIN_PASSWORD
}

export async function POST(req: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { date, reason } = await req.json()
  if (!date) return NextResponse.json({ error: 'Date required.' }, { status: 400 })

  const supabase = createServerClient()
  const { error } = await supabase.from('blocked_dates').insert({ date, reason: reason || null })
  if (error) return NextResponse.json({ error: 'Failed to block date.' }, { status: 500 })

  return NextResponse.json({ success: true })
}

export async function DELETE(req: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { date } = await req.json()
  if (!date) return NextResponse.json({ error: 'Date required.' }, { status: 400 })

  const supabase = createServerClient()
  const { error } = await supabase.from('blocked_dates').delete().eq('date', date)
  if (error) return NextResponse.json({ error: 'Failed to unblock date.' }, { status: 500 })

  return NextResponse.json({ success: true })
}
