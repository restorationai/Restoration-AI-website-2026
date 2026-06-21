# Ops Dashboard

A local dashboard for everything content/SEO/AI-visibility related. Reads live
from `CONTENT_MANIFEST.json`, the published posts, and the AI-visibility reports.

## Run it

```bash
npm run dashboard
```

Then open **http://localhost:4600**. It reads fresh on every page load, so it
always reflects the current queue. Press Ctrl+C to stop.

## What it shows

**Phase 1 (live now, no external accounts needed):**
- Overview cards: published posts, Ready-to-write count, total validated search
  demand, AI-visibility mention rate.
- AI search visibility (GEO/AEO) snapshot from `reports/ai-visibility/`.
- The full content queue with each topic's status, keyword, **real search
  volume / KD / CPC**, intent, and pillar.
- Published posts.

**Phase 2 (panels show "Phase 2" until their data source is connected):**
- Google rankings & search terms (Google Search Console).
- Traffic / page views (GA4 Data API, property `G-HEC194LC1Y`).
- Indexation status (GSC URL Inspection).

## Related commands
- `npm run queue` / `npm run queue -- all` — quick text view of the queue.
- AI-visibility baseline lives in `reports/ai-visibility/`.
