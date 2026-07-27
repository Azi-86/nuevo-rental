import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import BlockedDatesManager from '@/components/admin/BlockedDatesManager'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  if (session?.value !== process.env.ADMIN_PASSWORD) {
    redirect('/admin')
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1 className="admin-title">Nuevo Admin</h1>
        <a href="/" className="btn" style={{ fontSize: '0.72rem' }}>← Back to site</a>
      </div>
      <div className="admin-body">
        <div>
          <h2 className="admin-section-title">Block Dates</h2>
          <BlockedDatesManager />
        </div>
      </div>
    </div>
  )
}
