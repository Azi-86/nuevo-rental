'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    const data = await res.json()

    if (data.ok) {
      router.push('/admin/dashboard')
    } else {
      setError('Incorrect password.')
      setLoading(false)
    }
  }

  return (
    <div className="admin-login">
      <div className="admin-login-box">
        <h1>Nuevo Admin</h1>
        <p>Enter your password to access the dashboard.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoFocus
            />
          </div>
          {error && <p style={{ fontSize: '0.8rem', color: '#6a2d2d' }}>{error}</p>}
          <button type="submit" className="btn btn--accent btn--full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
