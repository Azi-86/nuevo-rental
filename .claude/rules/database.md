# Database Tables (Supabase)

**bookings**
- `id`, `guest_name`, `guest_email`, `check_in`, `check_out`, `guests`, `message`, `status` (pending/confirmed/cancelled), `created_at`

**blocked_dates**
- `id`, `date`, `reason`, `created_at`

## Usage
- Use `createServerClient()` from `src/lib/supabase/server.ts` in API routes (service role key).
- Use `supabase` from `src/lib/supabase/client.ts` in browser/client components (anon key).
