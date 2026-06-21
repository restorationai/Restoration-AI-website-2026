#!/bin/bash
#
# Publish a native-Astro blog post: stage the markdown + its images + the
# manifest, commit, and push. Cloudflare Pages auto-builds main on push, so the
# post goes live in ~1-2 minutes. No Sanity, no API token.
#
# Usage: bash scripts/publish-blog.sh <post-slug>
#   e.g. bash scripts/publish-blog.sh ai-receptionist-for-restoration-companies

set -uo pipefail

SLUG="${1:-}"
if [ -z "$SLUG" ]; then
  echo "❌  usage: publish-blog.sh <post-slug>" >&2
  exit 2
fi

PROJECT_DIR="/Users/santino/Desktop/mywebsitecode/Restoration-AI-website-2026-main"
cd "$PROJECT_DIR" || { echo "❌ cannot cd to project" >&2; exit 1; }

POST="src/content/blog/${SLUG}.md"
if [ ! -f "$POST" ]; then
  echo "❌  post not found: $POST" >&2
  exit 1
fi

# Sanity-check the build before publishing so we never push a broken site.
echo "→ building to validate..."
if ! npm run build >/tmp/autoblog-build.log 2>&1; then
  echo "❌  build failed — NOT publishing. Tail:" >&2
  tail -20 /tmp/autoblog-build.log >&2
  exit 1
fi
echo "✓ build OK"

git add "$POST" "public/blog-images/${SLUG}"-*.png CONTENT_MANIFEST.json 2>/dev/null
# Include any other freshly-written images for this slug just in case.
git add public/blog-images 2>/dev/null

if git diff --cached --quiet; then
  echo "ℹ️  nothing staged to publish (already committed?)"
  exit 0
fi

git commit -q -m "post: ${SLUG}" || { echo "❌ commit failed" >&2; exit 1; }
echo "✓ committed"

if git push -q origin main; then
  echo "✅  pushed — Cloudflare Pages will build & deploy in ~1-2 min."
  echo "    Live URL: https://restorationai.io/blog/${SLUG}/"
else
  echo "❌  git push failed — commit is local; resolve and push manually." >&2
  exit 1
fi
