---
name: auto-blog
description: >
  Unattended auto-blogger for restorationai.io. Refills the topic queue if low,
  picks the next Ready topic, writes a full SEO/AEO-optimized post using the
  restorationai-blog-writer quality rules (NO human approval gates — this runs
  headless from cron), generates images, PUBLISHES IT LIVE to Sanity, and updates
  CONTENT_MANIFEST.json. One post per invocation. Use for the scheduled cron or
  when the user says "auto-blog", "write and publish the next post automatically".
---

# Auto-Blog — restorationai.io (headless, auto-publish LIVE)

You are running **unattended from a local cron**. There is NO human to approve
anything. Do not stop to ask questions or wait for confirmation at any step.
Make the best editorial decision and proceed. Produce exactly ONE published post,
then stop.

Project root: `/Users/santino/Desktop/mywebsitecode/Restoration-AI-website-2026-main`.
Run all commands from there.

## Step 0 — Load context

Read, in order:
1. `CONTENT_MANIFEST.json` — the topical map + production pipeline.
2. `PRODUCT_BRIEF.md` — authoritative product facts. Never invent product claims.
3. `/Users/santino/.claude/commands/restorationai-blog-writer.md` — the FULL
   writing/quality spec. Follow all of its Phase 3 writing rules and output
   quality, but SKIP every "wait for user approval" gate (you are headless).
   NOTE: that file's "Publish to Sanity" steps are OBSOLETE. The blog is now
   native Astro markdown. Use Steps 5–8 below for images + publishing, not Sanity.

## Step 1 — Refill the queue if low

Count `production_pipeline` entries with `automation_status == "Ready"`.

If **fewer than 2** are Ready: run the research procedure in
`.claude/commands/restorationai-keyword-researcher.md` (execute it fully — it
appends new Ready topics to the manifest). Re-read the manifest afterward. If
research still yields nothing usable, log "no topics available" and stop cleanly
(do not fabricate a topic).

## Step 2 — Pick the next topic

From the Ready entries, select the top candidate exactly like `/next-post` does:
- Prefer Ready topics that have a `parent_pillar_id` (cluster posts — they gain
  the most from internal linking) over standalone pillars.
- Among those, take the lowest `topic_id` number (oldest in queue).

Resolve its full record from `topical_map` (primary_keyword, unique_take,
h2_questions, intent, parent_pillar_id). This is the post you write.

## Step 3 — Research (headless)

Do 5–8 `WebSearch` / `WebFetch` lookups. Produce internally (no need to print
for approval):
- Gap analysis: 3 things top results miss.
- 8–15 authoritative sources (IICRC, RIA, industry data, official docs) with the
  specific data points you will cite. Every stat in the post must be a real,
  linked source.
- Internal link plan: 3–5 EXISTING posts from the manifest (use their exact
  `/blog/<slug>` paths) to link to, including the parent pillar.

## Step 4 — Write the post

Follow restorationai-blog-writer Phase 3 rules exactly:
- 1,500–2,500 words, 8th-grade reading level, first-person Santino voice.
- **No em dashes** (use commas, colons, or parentheses).
- TL;DR (50–80 words), then intro (150–200 words) with a pillar uplink sentence
  if this is a cluster post.
- 5–7 H2 sections; **≥60% use the Answer Capsule technique** (H2 is a question,
  first paragraph is a direct 30–60 word answer, no "short answer:" label).
- At least **2 internal links** to other existing posts + the pillar uplink, using
  real manifest slugs as relative `/blog/<slug>` hrefs.
- Every factual/stat claim is a contextual hyperlink to its source.
- One blockquote "experience callout" anchoring the unique_take.
- Uncle-story mode per the default rule (Full only if the topic is about missed
  calls / lead capture; otherwise Brief; None if a stronger hook exists).
- End with a ~100-word first-person E-E-A-T bio for Santino Velci (Hawaii roots,
  8-figure success, LinkedIn).
- CTA goal: **Book a Strategy Call**.

## Step 5 — Generate images

The blog is **native Astro** now: images live in `public/blog-images/` and are
referenced from markdown by their public path (`/blog-images/<file>`). There is
NO Sanity.

Plan 3 images: a hero, one section photo, one infographic. The hero filename MUST
be `<slug>-hero.png` (the slug is the manifest slug without `/blog/`). For each:
```bash
node scripts/generate-image.mjs --prompt "<prompt>" --out public/blog-images/<slug>-hero.png
node scripts/generate-image.mjs --prompt "<prompt>" --out public/blog-images/<slug>-section.png
node scripts/generate-image.mjs --prompt "<prompt>" --out public/blog-images/<slug>-infographic.png
```
Use the blog-writer prompt templates (hero = photorealistic editorial; section =
photorealistic; infographic = clean flat-design diagram, blue/white). If a
non-hero image fails after its retries, continue without it. If the hero fails,
retry once; if it still fails, continue with no hero (the page handles a missing
hero gracefully).

## Step 6 — Write the markdown post

Create `src/content/blog/<slug>.md` (slug = manifest slug without `/blog/`). It
must match the content-collection schema in `src/content.config.ts`:

```markdown
---
title: "Full post title"
seoTitle: "≤60 char keyword-led title"
seoDescription: "≤155 char description"
publishedAt: "<today YYYY-MM-DD>"
category: "<one of: Never Miss a Call | Dispatch on Autopilot | Get Paid More | Connect Your Stack | Get More Calls | Serve Every Customer>"
topicId: "RAI-0XX"
author: "Santino Velci"
hero: "/blog-images/<slug>-hero.png"
heroAlt: "keyword-rich alt, 10-15 words"
pillarSlug: "/blog/<parent-slug>"      # ONLY if the parent pillar post actually exists in src/content/blog/; otherwise OMIT both pillar fields
pillarLabel: "<parent primary_keyword>"
draft: false      # SEE DRAFT-MODE rule below
---
```

**DRAFT-MODE rule:** before writing, check whether the file `.autoblog-draft`
exists in the project root.
- If it EXISTS → set `draft: true`. The post still commits + pushes (so it is
  versioned and reviewable), but it is excluded from the live site. The user
  reviews it locally via `npm run dev` (dev shows drafts) and flips `draft: false`
  to publish. Leave the manifest `automation_status` as `Drafting` in this case.
- If it does NOT exist → set `draft: false` and publish live as normal (set
  manifest `automation_status: Published`).

```markdown

<body in clean markdown>
```

Body rules (from restorationai-blog-writer Phase 3):
- Standard markdown headings (`## ` for H2 answer-capsule sections). Phrase most
  H2s as QUESTIONS ending in "?" — the template auto-builds `FAQPage` schema from
  question H2s + their first paragraph, so good answer-capsule H2s = free AEO.
- **AEO / AI-search rule (critical):** answer each H2 question DIRECTLY in its
  first sentence, as a standalone, quotable statement (that exact sentence is what
  ChatGPT / Gemini / Perplexity / AI Overviews lift and cite). No throat-clearing
  before the answer. Favor quotable, specific facts, comparison tables, and
  numbered lists — AI engines extract and cite structured, factual passages.
  People ask AI full questions ("how do I get more water damage leads"), so the
  post should read like the definitive answer to one.
- **Internal links (non-negotiable): at least 2** `[anchor](/blog/<slug>)` to
  OTHER posts that actually exist in `src/content/blog/`. List the existing posts
  first and link the most topically relevant ones. Never link a post that does
  not exist. (At launch there are 2 posts; link them as you add more.)
- External/source links: `[anchor](https://...)`. Do NOT add `target`/`rel` — the
  build's rehype plugin opens external links in a new tab automatically.
- Body images inline as `![alt](/blog-images/<slug>-section.png)` placed after the
  relevant H2, optionally followed by a `*caption*` line.
- **First-person practitioner voice:** weave in at least ONE lived-experience
  one-liner from Santino's six years as a restoration technician (e.g. "In my
  years on the truck, I watched..."). Strongest E-E-A-T Experience signal.
- Blockquote callout with `> ` for the unique-take. Prefer first-person
  experience; only use "we"/data framing when backed by a REAL cited stat or
  genuine customer data. Never imply a study/dataset that does not exist.
- No em dashes (run `node scripts/sanitize-dashes.mjs src/content/blog/<slug>.md`
  after writing to enforce this deterministically).

TEMPLATE-HANDLED — do NOT write these into the markdown (the post page renders
them from config/automatically):
- **Author / "About the Author" box** — rendered from `src/data/authors.ts`
  (photo, correct LinkedIn, bio, `Person`+`sameAs` schema). Just set
  `author: "Santino Velci"` in frontmatter. Do NOT write a bio section in the body.
- **Breadcrumbs** (visual + `BreadcrumbList` schema) — automatic.
- **FAQ schema** — auto-generated from question H2s (above).

Do NOT include the H1/title in the body (the page renders `title` as the H1).

## Step 7 — Publish LIVE (git push → Cloudflare)

```bash
bash scripts/publish-blog.sh <slug>
```
This validates the build, commits the post + images + manifest, and pushes to
`main`. Cloudflare Pages auto-builds and the post is live in ~1-2 minutes. If the
script exits non-zero (build or push failed), STOP and log the error. Do NOT mark
the post Published in the manifest if publishing failed.

## Step 8 — Update the manifest

Before running Step 7 (so the manifest is part of the same commit), edit
`CONTENT_MANIFEST.json`:
- In the topic's `production_pipeline` entry: set `automation_status` to
  `"Published"`, add `"publishedAt": "<today YYYY-MM-DD>"`, and leave/clear
  `sanity_id` as `null` (Sanity is retired).
- Bump `_meta.last_updated` to today.
Keep the JSON valid. (publish-blog.sh stages the manifest automatically.)

## Step 9 — Report

Print a concise summary:
- Title + live URL `https://restorationai.io/blog/<slug>/`
- Images generated
- Remaining Ready count (and whether a refill is recommended)

Then STOP. Exactly one post per run.

## Safety rails

- Publishing is `git push`; `scripts/publish-blog.sh` runs `npm run build` first
  and refuses to push if the build breaks. Never bypass it.
- Only mark a post Published in the manifest if `publish-blog.sh` succeeded.
- Never link to a blog post that does not exist in `src/content/blog/`.
- Never invent statistics or product claims — sources + PRODUCT_BRIEF only.
- If anything blocks the post (empty queue, repeated API failure), exit cleanly
  with a clear log line; do not partially mutate the manifest.
