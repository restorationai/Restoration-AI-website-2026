# SEO Gameplan — "Restoration AI" Brand Collision

**Last updated:** 2026-05-09
**Domain:** restorationai.io
**Primary collision:** restorationai.com

---

## The Situation

Two companies share the brand "Restoration AI." We are restorationai.io. The .com is a direct competitor in the restoration-contractor vertical, and they currently dominate the branded SERP.

## The Data

### Gap snapshot

| Signal                          | restorationai.io (us)    | restorationai.com (them)                       |
| ------------------------------- | ------------------------ | ---------------------------------------------- |
| Domain creation                 | 2025-10-15 (~7 months)   | 2018-07-24 (~7.4 years)                        |
| TLD                             | .io                      | .com (Google favors)                           |
| Position for "restoration ai"   | **Not in top 20**        | #1, #4 (Pricing), #18 (About)                  |
| Their pitch                     | AI for restoration contractors | "Properly Estimate & Supplement Insurance ..." (insurance estimating SaaS) |

**Backlink data not available** — DataForSEO Backlinks API requires a separate subscription (~$50/mo). Refresh this once subscribed, or pull a free approximation via Bing Webmaster + Common Crawl.

### Top-20 SERP ownership for "restoration ai" (Google US, 2026-05-09)

| # | Domain                       | Notes                                       |
| - | ---------------------------- | ------------------------------------------- |
| 1 | restorationai.com            | Competitor homepage                         |
| 2 | facebook.com/restorationai   | Competitor's FB                             |
| 3 | airestoration.com            | Different brand, similar name               |
| 4 | restorationai.com/pricing    | Competitor                                  |
| 6 | picsart.com                  | Photo-restoration AI (off-intent)           |
| 7 | help.hover.to                | "Restoration AI Integration" (3rd-party doc)|
| 8 | canva.com                    | Photo-restoration                           |
| 9 | notegpt.io                   | Photo-restoration                           |
| 10| eweek.com                    | Photo-restoration article                   |
| 12| pixelbin.io                  | Photo-restoration                           |
| 13| reddit.com (r/estoration)    | Photo-restoration discussion                |
| 14| photobooth.online            | Photo-restoration                           |
| 15| picstudio.ai                 | Photo-restoration                           |
| 16| adobe.com                    | Photo-restoration (Firefly)                 |
| 17| jpghd.com                    | Photo-restoration                           |
| 18| restorationai.com/about      | Competitor                                  |
| 19| phot.ai                      | Photo-restoration                           |
| 20| airbrush.com                 | Photo-restoration                           |

### The hidden twist: intent split

Most of the SERP is **photo-restoration AI tools** (Adobe, Canva, Picsart, Reddit, etc.), not restoration contractor software. Google can't decide what "restoration ai" means. Fighting for the bare term means competing simultaneously against:

1. The .com brand-collision competitor
2. Adobe / Canva / Picsart and the entire photo-AI category
3. Google's own intent ambiguity

## Strategic Decision

**Concede the head term. Own the contractor-intent cluster + build the brand entity in parallel.**

Why: even if we "won" position #1 for "restoration ai," half the clicks go to photo-restoration intent and a portion of the rest go to a same-name competitor. Branded confusion would leak conversions even from victory. The ROI on this fight is bad.

## The Four-Track Plan

### Track 1 — Concede the head term (defensive)

- Track "restoration ai" rank weekly, but do not put primary effort into it.
- Acceptance criterion: pulling into top 50 within 12 months is fine; reaching #1 is not the goal.

### Track 2 — Own the contractor-intent cluster (primary growth)

Target keywords where photo-restoration noise vanishes and the .com competitor is weaker. Seed list to validate via SERP analysis:

- ai for water mitigation contractors
- ai estimating software for restoration
- restoration crm with ai
- ai for fire damage restoration
- ai marketing for restoration contractors
- ai for mold remediation businesses
- ai supplementing software (vs. their direct positioning)
- restoration business automation ai

These are higher-converting *and* easier to win — purely B2B-restoration SERPs.

**Next action:** run `claude-seo:seo-cluster` with these seeds → hub-and-spoke content map → feed into `next-post` pipeline.

### Track 3 — Build "Restoration AI" entity authority (parallel, slow burn)

Goal: get Google to recognize *us* as a legitimate "Restoration AI" entity, so the brand SERP eventually serves both companies.

- Organization schema with full `sameAs` array (LinkedIn, X, Facebook, YouTube, Crunchbase, etc.)
- Wikidata entry for the company
- Consistent NAP across web
- Branded mentions on industry publications: RIA, IICRC, Restoration & Remediation Magazine, Cleanfax
- Founder/team bylines on industry sites
- Podcasts in the restoration vertical

Timeline: 6–12 months minimum before measurable shift on the brand SERP.

### Track 4 — Branded long-tail moat (fast + cheap)

Own every adjacent branded query so anyone researching either company hits *our* content:

- "is restoration ai legit"
- "restoration ai pricing"
- "restoration ai reviews"
- "restoration ai vs [competitor name]"
- "restoration ai for water damage"
- "restoration ai for fire damage"
- "what is restoration ai"
- "how does restoration ai work"

These pages are quick to produce, low-competition, high-intent. They also force Google to associate our domain with the "Restoration AI" entity over time, supporting Track 3.

## What Success Looks Like

**12-month targets:**

- Track 2: top 5 for at least 8 contractor-intent keywords (driving qualified MQLs)
- Track 3: company appears in Knowledge Graph; brand SERP shows both restorationai.com and restorationai.io
- Track 4: own positions 1–3 for at least 15 branded long-tail queries
- Track 1: "restoration ai" top 50 (incidental from Tracks 2–4 lifting domain authority)

## Open Questions to Resolve

1. **Trademark posture** — is "Restoration AI" trademarked by either party? Affects long-term brand risk and whether to pursue the head term at all.
2. **Backlink delta** — needs DataForSEO Backlinks subscription or free-tier approximation.
3. **Product overlap with restorationai.com** — they pitch "estimate & supplement insurance." How much of our offering overlaps? Determines how aggressively to play "vs" content in Track 4.
4. **Founder content velocity** — Track 3 leans on bylines/podcasts. Bandwidth check needed.

## Immediate Next Steps

1. Run `claude-seo:seo-cluster` on the Track 2 seed list → get cluster map
2. Stand up the Track 4 long-tail pages (8–15 posts in 30 days via `next-post`)
3. Audit current Organization schema on restorationai.io homepage; expand `sameAs`
4. Decide on DataForSEO Backlinks subscription before Q3 planning

---

*Data sources: DataForSEO SERP API (live, US, en, depth 20), whois lookups, manual SERP review on 2026-05-09.*
