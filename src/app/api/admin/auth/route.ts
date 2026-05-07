import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const { password } = await req.json()
  const isValid = password === process.env.ADMIN_PASSWORD

  if (isValid) {
    const cookieStore = await cookies()
    cookieStore.set('admin_session', password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
  }

  return NextResponse.json({ ok: isValid })
}
