import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nuevo Premium Monthly Rentals — Stittsville, Ottawa',
  description: 'A fully self-contained garden-level apartment with private entrance in Stittsville, Ottawa. Available for short-term monthly stays from $2,400/month.',
  openGraph: {
    title: 'Nuevo Premium Monthly Rentals',
    description: 'Private apartment in Stittsville, Ottawa. Monthly stays from $2,400.',
    images: ['/images/PXL_20260110_174802084.jpg'],
  },
  verification: {
    google: 'BTEwwkBsYGsVTjhhDqe7fPE7mG7MI_YdeFMyIhKz_-0',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
