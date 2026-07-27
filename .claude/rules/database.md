# Database Tables (Supabase)

**blocked_dates**
- `id`, `date`, `reason`, `created_at`

## Usage
- Use `createServerClient()` from `src/lib/supabase/server.ts` in API routes (service role key).
- Use `supabase` from `src/lib/supabase/client.ts` in browser/client components (anon key).
