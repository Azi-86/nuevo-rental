---
description: Block a date or date range in Supabase so guests can't book those nights
allowed-tools: Bash, Read
---

Block a date or date range in the Supabase `blocked_dates` table.

## Steps

1. If the user did not provide all the details in their message, ask them for:
   - **Start date** (YYYY-MM-DD format, e.g., "2026-06-15")
   - **End date** (YYYY-MM-DD format — same as start date for a single day)
   - **Reason** (optional — e.g., "Maintenance", "Family visit", "Airbnb booking")

2. Read `/Users/azi/nuevo-rental/.env.local` to get `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

3. For every date in the range (inclusive of both start and end), insert a row into the `blocked_dates` table using the Supabase REST API. Use a single Bash command that loops through the dates and calls curl with the service role key.

   Use a script like this (substituting the actual values):

   ```bash
   SUPABASE_URL=$(grep '^NEXT_PUBLIC_SUPABASE_URL=' /Users/azi/nuevo-rental/.env.local | cut -d= -f2)
   SERVICE_KEY=$(grep '^SUPABASE_SERVICE_ROLE_KEY=' /Users/azi/nuevo-rental/.env.local | cut -d= -f2)
   START="{START_DATE}"
   END="{END_DATE}"
   REASON="{REASON_OR_EMPTY}"
   
   current="$START"
   while [[ "$current" < "$END" || "$current" == "$END" ]]; do
     curl -s -X POST "$SUPABASE_URL/rest/v1/blocked_dates" \
       -H "apikey: $SERVICE_KEY" \
       -H "Authorization: Bearer $SERVICE_KEY" \
       -H "Content-Type: application/json" \
       -d "{\"date\": \"$current\", \"reason\": \"$REASON\"}"
     current=$(date -j -v+1d -f "%Y-%m-%d" "$current" "+%Y-%m-%d")
   done
   ```

4. Confirm to the user how many dates were blocked and the date range.

5. **Do not commit anything** — blocking dates only affects the database, not the code. Vercel doesn't need to redeploy.

## Notes
- This bypasses the admin login by using the service role key directly. Safe because it only runs locally on the owner's machine.
- If a date is already blocked, Supabase may return a duplicate error — that's fine, just inform the user which dates were already blocked.
