---
description: Unblock a date or date range from Supabase so guests can book those nights again
allowed-tools: Bash, Read
---

Remove blocked dates from the Supabase `blocked_dates` table.

## Steps

1. If the user did not provide the dates in their message, ask them for:
   - **Start date** (YYYY-MM-DD format)
   - **End date** (YYYY-MM-DD format — same as start date to unblock a single day)

2. Read `/Users/azi/nuevo-rental/.env.local` to get `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

3. Delete every blocked date in the range (inclusive). Use a single curl call with the `gte` and `lte` filters so it removes everything in one request:

   ```bash
   SUPABASE_URL=$(grep '^NEXT_PUBLIC_SUPABASE_URL=' /Users/azi/nuevo-rental/.env.local | cut -d= -f2)
   SERVICE_KEY=$(grep '^SUPABASE_SERVICE_ROLE_KEY=' /Users/azi/nuevo-rental/.env.local | cut -d= -f2)
   START="{START_DATE}"
   END="{END_DATE}"
   
   curl -s -X DELETE "$SUPABASE_URL/rest/v1/blocked_dates?date=gte.$START&date=lte.$END" \
     -H "apikey: $SERVICE_KEY" \
     -H "Authorization: Bearer $SERVICE_KEY" \
     -H "Prefer: return=representation"
   ```

4. The response shows which rows were deleted. Tell the user how many dates were unblocked.

5. **Do not commit anything** — only the database is affected, no redeploy needed.

## Notes
- This only removes manually blocked dates. It does NOT cancel actual bookings — those are in a separate `bookings` table.
- Safe to run even if no dates exist in that range — it just deletes nothing.
