import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerClient } from '@/lib/supabase/server'
import BookingsTable from '@/components/admin/BookingsTable'
import BlockedDatesManager from '@/components/admin/BlockedDatesManager'
import type { Booking } from '@/types'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  if (session?.value !== process.env.ADMIN_PASSWORD) {
    redirect('/admin')
  }

  const supabase = createServerClient()
  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1 className="admin-title">Nuevo Admin</h1>
        <a href="/" className="btn" style={{ fontSize: '0.72rem' }}>← Back to site</a>
      </div>
      <div className="admin-body">
        <div>
          <h2 className="admin-section-title">Bookings</h2>
          <BookingsTable initialBookings={(bookings ?? []) as Booking[]} />
        </div>
        <div>
          <h2 className="admin-section-title">Block Dates</h2>
          <BlockedDatesManager />
        </div>
      </div>
    </div>
  )
}
