# API Routes

All routes live under `src/app/api/`. Server-side only — never import these directly in client components.

| Route | Method | Purpose |
|---|---|---|
| `availability/route.ts` | GET | Returns blocked dates for a given `?year=&month=` |
| `blocked-dates/route.ts` | GET / POST / DELETE | Lists, adds, or removes manually blocked dates |
| `admin/auth/route.ts` | POST | Validates admin password and sets an `admin_session` cookie |
| `robots.txt/route.ts` | GET | Serves the robots.txt file |

## Notes
- Use `createServerClient()` from `src/lib/supabase/server.ts` for all Supabase calls inside API routes (uses the service role key).
- Admin routes check the `admin_session` cookie set by `admin/auth/route.ts`.
