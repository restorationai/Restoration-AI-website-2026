---
name: restorationai-keyword-researcher
description: >
  Find new SEO-rankable B2B keywords for restorationai.io (our own SaaS — AI
  receptionist / dispatcher / answering service for restoration companies) via AI
  fan-out + DataForSEO scoring, dedupe against CONTENT_MANIFEST.json, and append
  the best topics to the manifest as automation_status "Ready" so the blog writer
  can pick them up. This is the B2B-SaaS adaptation of the Rank AI keyword
  researcher — NO city × service geo fan-out; we sell nationally to restoration
  business owners. Use when the user says "research blog topics", "fill the
  content queue for restorationai", "find new topics", or runs the auto-blogger.
---

# RestorationAI Keyword Researcher (B2B SaaS)

You research blog topics for **restorationai.io** — our own product, a 24/7 AI
answering receptionist & dispatcher for restoration companies. The audience is
**restoration business owners and specialty contractors**, nationally. This is
NOT a local water-damage service business, so there is **no city × service geo
fan-out** (that is for Rank AI clients, not us).

Project root: `/Users/santino/Desktop/mywebsitecode/Restoration-AI-website-2026-main`
(run everything from there).

## Goal

Add up to **5** new, genuinely rankable topics to `CONTENT_MANIFEST.json`, each
appended to BOTH `topical_map` and `production_pipeline` with
`automation_status: "Ready"`, deduped against everything already there.

## Step 1 — Load existing state

1. Read `CONTENT_MANIFEST.json`. Collect every `primary_keyword` (from
   `topical_map`) and every `slug` (from `production_pipeline`). This is the
   dedupe set — never propose a topic that duplicates or near-duplicates one of
   these (case-insensitive, ignoring stopwords).
2. Note the existing **pillars** (`parent_pillar_id: null`) and their clusters.
   Prefer to deepen existing clusters over inventing new pillars — topical
   completeness ranks better in Google + AI engines than scattered one-offs.
3. Read `PRODUCT_BRIEF.md` so proposed topics map to real product capabilities
   (features, integrations, pricing, case studies). Do not propose topics the
   product cannot credibly own.

## Step 2 — Seed themes (B2B buyer + question intent)

Work from these seed clusters (pick the 1–2 with the thinnest existing coverage):

- AI receptionist / AI phone answering for restoration & contractors
- Answering service for restoration companies (and "vs AI" comparisons)
- Missed-call / speed-to-lead / never-miss-a-call revenue loss
- Automated dispatch / job intake / triage (IICRC water categories)
- CRM / software integrations (JobNimbus, Albiware, Xactimate, etc.)
- After-hours / 24-7 / storm-surge call coverage
- Reviews / reputation / Google Business Profile automation for restorers
- Insurance adjuster communication & referral speed

**Prioritize natural-language question queries (GEO/AEO).** People query AI
assistants in full questions, so generate and favor how/what/why/best variants for
every seed — these are the phrasings that win AI-Overview / ChatGPT / Perplexity
citations and map cleanly to answer-capsule H2s. Examples:
- "what is the best answering service for a restoration company"
- "what is the best AI receptionist for contractors"
- "how much does an answering service cost for a restoration business"
- "can AI answer restoration emergency calls"

## Step 3 — AI fan-out + DataForSEO scoring

1. Fan out each chosen seed into 20–40 candidate phrases (mix of head terms,
   long-tail, and natural-language questions). Use
   `mcp__dataforseo__dataforseo_labs_google_keyword_ideas`,
   `mcp__dataforseo__dataforseo_labs_google_related_keywords`, and
   `mcp__dataforseo__dataforseo_labs_google_keyword_suggestions`.
2. Pull **real volume + CPC** via
   `mcp__dataforseo__kw_data_google_ads_search_volume` (location_code 2840 = US,
   language English). CPC is a strong commercial-intent signal and feeds the
   ads side later.
3. Pull difficulty via
   `mcp__dataforseo__dataforseo_labs_bulk_keyword_difficulty`.
4. Classify intent via `mcp__dataforseo__dataforseo_labs_search_intent`
   (informational / commercial / transactional / navigational).

## Step 4 — Score for rankability (small/newer site)

restorationai.io is a young domain, so favor winnable terms. Score each candidate
0–100:

- **Difficulty (40%)** — lower is better. Hard-cap: drop anything with KD > 45
  unless it is a pillar-defining term we must own.
- **Intent fit (30%)** — commercial-investigation and transactional > question-
  informational > generic informational. Question-informational still qualifies
  because it earns AI citations and top-of-funnel reach.
- **Volume (15%)** — meaningful but not dominant; a KD-20 / 90-vol question term
  beats a KD-60 / 1,000-vol head term for us right now.
- **Product fit (15%)** — can a post credibly tie back to a product capability
  and a "Book a Strategy Call" CTA?

Priority 1 = score ≥ 60 → goes to the manifest as Ready. Park the rest (just
report them; do not write them in).

## Step 5 — Cluster + assign

For each priority-1 topic:
- Assign `parent_pillar_id` to the best-fit existing pillar; only set `null`
  (new pillar) if nothing fits.
- Write a one-sentence `unique_take` that is genuinely differentiated (use
  PRODUCT_BRIEF facts, restoration-specific economics, or Santino's POV — not
  generic).
- Draft 5 `h2_questions` (answer-capsule friendly).
- Choose `target_audience: "Restoration Business Owners"` and the scored
  `intent`.
- Derive a clean `slug` (`/blog/<kebab-keyword>`).
- Next `topic_id` = highest existing RAI-### + 1.

## Step 6 — Write to the manifest

Append to `topical_map`:
```json
{
  "topic_id": "RAI-0XX",
  "primary_keyword": "...",
  "unique_take": "...",
  "target_audience": "Restoration Business Owners",
  "intent": "Commercial Investigation",
  "h2_questions": ["...", "...", "...", "...", "..."],
  "parent_pillar_id": "RAI-0YY"
}
```
And to `production_pipeline`:
```json
{
  "topic_id": "RAI-0XX",
  "author_id": "AUTH-001",
  "automation_status": "Ready",
  "slug": "/blog/...",
  "video_prompt": "<one-line video brief>",
  "sanity_id": null
}
```

Preserve valid JSON (no trailing commas). Bump `_meta.last_updated` to today.

## Step 7 — Report

Print a table of what was added (topic_id, primary_keyword, KD, volume, CPC,
intent, pillar) and a short list of parked candidates with why. Then state the
new Ready count.

## Hard rules

- Max 5 topics added per run.
- Never duplicate an existing primary_keyword or slug.
- No city/geo permutations — this is national B2B.
- Only DataForSEO-backed numbers; never invent volume/difficulty.
