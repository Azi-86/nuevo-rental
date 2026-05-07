import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { sendOwnerNotification } from '@/lib/resend'
import { eachDayOfInterval, parseISO, isAfter, startOfDay } from 'date-fns'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })

  const { guest_name, guest_email, check_in, check_out, guests, message } = body

  if (!guest_name || !guest_email || !check_in || !check_out || !guests) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const checkInDate = parseISO(check_in)
  const checkOutDate = parseISO(check_out)

  if (!isAfter(checkInDate, startOfDay(new Date()))) {
    return NextResponse.json({ error: 'Check-in must be in the future.' }, { status: 400 })
  }
  if (!isAfter(checkOutDate, checkInDate)) {
    return NextResponse.json({ error: 'Check-out must be after check-in.' }, { status: 400 })
  }

  const supabase = createServerClient()

  // Re-verify availability server-side
  const requestedDates = eachDayOfInterval({ start: checkInDate, end: checkOutDate })
    .map(d => d.toISOString().slice(0, 10))

  const [{ data: conflicts }, { data: blockedConflicts }] = await Promise.all([
    supabase
      .from('bookings')
      .select('id')
      .in('status', ['pending', 'confirmed'])
      .lte('check_in', check_out)
      .gte('check_out', check_in)
      .limit(1),
    supabase
      .from('blocked_dates')
      .select('date')
      .in('date', requestedDates)
      .limit(1),
  ])

  if ((conflicts && conflicts.length > 0) || (blockedConflicts && blockedConflicts.length > 0)) {
    return NextResponse.json({ error: 'Those dates are no longer available. Please choose different dates.' }, { status: 409 })
  }

  const { data: booking, error } = await supabase
    .from('bookings')
    .insert({ guest_name, guest_email, check_in, check_out, guests, message: message || null })
    .select()
    .single()

  if (error || !booking) {
    return NextResponse.json({ error: 'Failed to save booking.' }, { status: 500 })
  }

  try {
    await sendOwnerNotification(booking)
  } catch {
    // Email failure doesn't block the booking
  }

  return NextResponse.json({ success: true, id: booking.id })
}

export async function PATCH(req: NextRequest) {
  const cookieStore = await cookies()
  if (cookieStore.get('admin_session')?.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id, status } = await req.json()
  if (!id || !['pending', 'confirmed', 'cancelled'].includes(status)) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const supabase = createServerClient()
  const { error } = await supabase.from('bookings').update({ status }).eq('id', id)
  if (error) return NextResponse.json({ error: 'Update failed.' }, { status: 500 })

  return NextResponse.json({ success: true })
}
