#!/bin/bash
#
# Auto-blog cron wrapper for restorationai.io.
# Runs the /auto-blog headless command which writes + publishes ONE post live,
# then updates CONTENT_MANIFEST.json. Logs everything to logs/.
#
# Scheduled by ~/Library/LaunchAgents/io.restorationai.autoblog.plist (Mon+Thu 9am).
# Manual run:  bash scripts/auto-blog.sh

set -uo pipefail

PROJECT_DIR="/Users/santino/dev/Restoration-AI-website-2026-main"
CLAUDE_BIN="/Users/santino/.local/bin/claude"
LOG_DIR="$PROJECT_DIR/logs"

export PATH="/Users/santino/.local/bin:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"

mkdir -p "$LOG_DIR"
STAMP="$(date +%Y-%m-%d_%H%M%S)"
LOG_FILE="$LOG_DIR/auto-blog-$STAMP.log"

cd "$PROJECT_DIR" || { echo "cannot cd to project dir" >&2; exit 1; }

{
  echo "=== auto-blog run @ $STAMP ==="
  "$CLAUDE_BIN" -p "/auto-blog" \
    --dangerously-skip-permissions \
    --permission-mode bypassPermissions
  echo "=== exit code: $? @ $(date +%H:%M:%S) ==="
} >>"$LOG_FILE" 2>&1

# Keep only the 30 most recent logs.
ls -1t "$LOG_DIR"/auto-blog-*.log 2>/dev/null | tail -n +31 | xargs -I{} rm -f "{}" 2>/dev/null

echo "auto-blog finished — log: $LOG_FILE"
