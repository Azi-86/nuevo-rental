# Nuevo Rental — Project Reference

## What This Is
A short-term monthly rental website for a garden-level apartment in Stittsville, Ottawa, ON. Guests can view the space, check availability, and submit booking requests. The owner manages bookings through a private admin dashboard.

## Tech Stack
- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Custom CSS in `src/app/globals.css` — no Tailwind, no CSS modules
- **Database**: Supabase (PostgreSQL) — bookings and blocked dates
- **Email**: Resend — notifies the owner on new booking requests
- **Fonts**: Playfair Display (serif headings) + Inter (body)
- **Deployment**: Vercel, custom domain `nuevorental.ca`
- **Repo**: https://github.com/Azi-86/nuevo-rental

## Environment Variables
Stored in `.env.local` (never committed). Must be added to Vercel project settings for production.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase public anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `RESEND_API_KEY` | Resend API key for sending emails |
| `RESEND_FROM_ADDRESS` | From address for notification emails |
| `OWNER_EMAIL` | Email address that receives booking notifications |
| `ADMIN_PASSWORD` | Password to access the admin dashboard |

## Database Tables (Supabase)

**bookings**
- `id`, `guest_name`, `guest_email`, `check_in`, `check_out`, `guests`, `message`, `status` (pending/confirmed/cancelled), `created_at`

**blocked_dates**
- `id`, `date`, `reason`, `created_at`

## Key Business Rules
- Monthly stays only — 30-night minimum
- Rate: $2,550/month
- Up to 2 guests
- Check-in: 3:00 PM / Check-out: 12:00 PM
- Pets and smoking not allowed
- Toiletries provided for first week only
- Cleaning not included

## Pending / Future Work
- Airbnb iCal sync: automatically pull Airbnb bookings into the blocked_dates table using Airbnb's iCal export URL. This keeps the website calendar in sync when bookings come in via Airbnb.
