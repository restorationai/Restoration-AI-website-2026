/**
 * Show the blog content queue from CONTENT_MANIFEST.json.
 * Usage:
 *   npm run queue          # upcoming (Ready + Drafting)
 *   npm run queue -- all   # everything incl. Published
 *
 * Shows DataForSEO signals (volume / CPC / difficulty) when present — these are
 * written by the keyword researcher. Topics without them were authored manually
 * and have NOT been validated against real search data yet.
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const m = JSON.parse(readFileSync(join(ROOT, 'CONTENT_MANIFEST.json'), 'utf-8'));
const showAll = process.argv.slice(2).includes('all');

const tm = Object.fromEntries(m.topical_map.map((t) => [t.topic_id, t]));
const order = { Ready: 0, Drafting: 1, Published: 2 };

// Which topics actually exist as built posts on disk?
const liveSlug = (slug) => existsSync(join(ROOT, 'src/content/blog', `${(slug || '').replace('/blog/', '')}.md`));

const rows = m.production_pipeline
  .map((p) => ({ ...tm[p.topic_id], ...p, onDisk: liveSlug(p.slug) }))
  .filter((r) => (showAll ? true : r.automation_status !== 'Published'))
  .sort((a, b) => (order[a.automation_status] ?? 9) - (order[b.automation_status] ?? 9));

const fmtData = (t) => {
  const v = t.search_volume ?? t.volume;
  const kd = t.keyword_difficulty ?? t.kd;
  const cpc = t.cpc;
  if (v == null && kd == null && cpc == null) return 'no data (manual)';
  return [v != null ? `vol ${v}` : null, kd != null ? `KD ${kd}` : null, cpc != null ? `$${cpc} CPC` : null]
    .filter(Boolean)
    .join('  ');
};

console.log(`\nContent queue — ${showAll ? 'ALL' : 'upcoming (Ready + Drafting)'}\n` + '='.repeat(96));
console.log('STATUS'.padEnd(10), 'ID'.padEnd(8), 'KEYWORD'.padEnd(46), 'SEARCH DATA');
console.log('-'.repeat(96));
for (const r of rows) {
  const flag = r.automation_status === 'Published' && !r.onDisk ? ' ⚠not-on-disk' : '';
  console.log(
    (r.automation_status || '?').padEnd(10),
    (r.topic_id || '').padEnd(8),
    (r.primary_keyword || '').slice(0, 44).padEnd(46),
    fmtData(r) + flag
  );
}
const counts = rows.reduce((a, r) => ((a[r.automation_status] = (a[r.automation_status] || 0) + 1), a), {});
console.log('-'.repeat(96));
console.log('Counts:', JSON.stringify(counts), '\n');
