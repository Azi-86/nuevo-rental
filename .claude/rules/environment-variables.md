# Environment Variables

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
