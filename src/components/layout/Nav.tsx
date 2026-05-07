'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">Nuevo</a>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href="#space" onClick={() => setOpen(false)}>The Space</a></li>
        <li><a href="#amenities" onClick={() => setOpen(false)}>Amenities</a></li>
        <li><a href="#location" onClick={() => setOpen(false)}>Location</a></li>
        <li><a href="#pricing" onClick={() => setOpen(false)}>Pricing</a></li>
        <li><a href="#book" className="nav-cta" onClick={() => setOpen(false)}>Book Now</a></li>
      </ul>
      <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>&#9776;</button>
    </nav>
  )
}
