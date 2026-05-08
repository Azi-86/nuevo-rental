---
description: Add a new guest review to the rental website's Reviews section
allowed-tools: Read, Edit, Bash
---

Add a new guest review to `src/components/sections/Reviews.tsx`.

## Steps

1. If the user did not provide all four details in their message, ask them for:
   - Guest's first name (e.g., "Alexander")
   - Guest's location (e.g., "North Bay, Canada")
   - Stay month and year (e.g., "March 2026")
   - The full review text

2. Read `src/components/sections/Reviews.tsx` to see the current structure.

3. Add a new `<div className="review-card">` block inside `<div className="reviews-grid">`, placed AFTER the existing reviews so the newest is at the bottom. Match the existing format exactly:

```tsx
<div className="review-card">
  <div className="review-stars">★★★★★</div>
  <p>&ldquo;{REVIEW_TEXT}&rdquo;</p>
  <div className="review-author">
    <div className="review-avatar"></div>
    <div><p className="review-name">{NAME}</p><p className="review-date">{MONTH_YEAR} · {LOCATION}</p></div>
  </div>
</div>
```

4. Convert any straight quotes in the review text to HTML entities: `'` becomes `&apos;`, `"` becomes `&ldquo;` / `&rdquo;`. Apostrophes like "I'm" become "I&apos;m".

5. After saving, run:
   - `git add src/components/sections/Reviews.tsx`
   - `git commit -m "Add review from {NAME}"`
   - `git push`

6. Confirm to the user the review is added and pushed — Vercel will redeploy automatically within ~1 minute.
