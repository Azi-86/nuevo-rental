import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LoginForm from '@/components/admin/LoginForm'

export default async function AdminPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  if (session?.value === process.env.ADMIN_PASSWORD) {
    redirect('/admin/dashboard')
  }

  return <LoginForm />
}
