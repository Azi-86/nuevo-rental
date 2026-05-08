# Lib Utilities

| File | Purpose |
|---|---|
| `availability.ts` | Client-side helper — `fetchUnavailableDates(year, month)` fetches from `/api/availability` and returns `Date[]`. Used by AvailabilityCalendar. |
| `resend.ts` | `sendOwnerNotification(booking)` — builds and sends the owner notification email via Resend. Called from the bookings API route. |
| `supabase/client.ts` | Browser-side Supabase client using the public anon key. Use in client components. |
| `supabase/server.ts` | `createServerClient()` — server-side Supabase client using the service role key. Use in API routes and server components only. |
