/**
 * Restoration AI — internal ops dashboard (localhost).
 *
 *   npm run dashboard      # serves http://localhost:4600
 *
 * Phase 1 (live now, no external auth): content queue + keywords + search
 * volume/demand, published posts, and the latest AI-visibility snapshot.
 * Phase 2 (wired as auth lands): GSC search terms/clicks/impressions + indexation,
 * GA4 page views, and live DataForSEO rankings. Those panels show as "not yet
 * connected" until their data sources are hooked up.
 *
 * Reads fresh on every page load, so it always reflects the current manifest.
 */
import { createServer } from 'http';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import crypto from 'crypto';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 4600;
const ACCENT = '#3dd0ff';

function manifest() {
  return JSON.parse(readFileSync(join(ROOT, 'CONTENT_MANIFEST.json'), 'utf8'));
}

function publishedPosts() {
  const dir = join(ROOT, 'src/content/blog');
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
    const raw = readFileSync(join(dir, f), 'utf8');
    const fm = raw.split('---')[1] || '';
    const get = (k) => (fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm')) || [])[1] || '';
    return { slug: f.replace(/\.md$/, ''), title: get('title'), publishedAt: get('publishedAt'), category: get('category'), draft: get('draft') === 'true' };
  }).filter((p) => !p.draft).sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
}

function aiVisibility() {
  const dir = join(ROOT, 'reports/ai-visibility');
  if (!existsSync(dir)) return null;
  const csv = join(dir, 'history.csv');
  if (existsSync(csv)) {
    const rows = readFileSync(csv, 'utf8').trim().split('\n').slice(1);
    if (rows.length) {
      const last = rows[rows.length - 1].split(',');
      return { date: last[0], mentionRate: last[1], citationRate: last[2], source: 'history.csv' };
    }
  }
  const base = readdirSync(dir).find((f) => f.includes('baseline'));
  if (base) return { date: base.slice(0, 10), mentionRate: '0%', citationRate: '0%', source: base };
  return null;
}

// --- Live Google Search Console data (rankings + search terms, last 28d) ---
// Uses the agency OAuth token in the sibling rank-ai repo. Cached 10 min.
let gscCache = { at: 0, data: null };
async function getGSC() {
  if (gscCache.data && Date.now() - gscCache.at < 600000) return gscCache.data;
  try {
    const tokenPath = join(ROOT, '..', 'rank-ai', '.gsc-agency-token.json');
    if (!existsSync(tokenPath)) return null;
    const t = JSON.parse(readFileSync(tokenPath, 'utf8'));
    const body = new URLSearchParams({ client_id: t.client_id, client_secret: t.client_secret, refresh_token: t.refresh_token, grant_type: 'refresh_token' });
    const tok = await (await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })).json();
    if (!tok.access_token) return null;
    const site = encodeURIComponent('sc-domain:restorationai.io');
    const end = new Date().toISOString().slice(0, 10);
    const start = new Date(Date.now() - 28 * 864e5).toISOString().slice(0, 10);
    const d = await (await fetch(`https://www.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`, { method: 'POST', headers: { Authorization: `Bearer ${tok.access_token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ startDate: start, endDate: end, dimensions: ['query'], rowLimit: 15 }) })).json();
    const rows = d.rows || [];
    const totals = rows.reduce((a, r) => ({ clicks: a.clicks + r.clicks, impressions: a.impressions + r.impressions }), { clicks: 0, impressions: 0 });
    gscCache = { at: Date.now(), data: { start, end, rows, totals } };
    return gscCache.data;
  } catch { return null; }
}

// --- Live GA4 traffic (page views / sessions / top pages, last 28d) ---
// Uses the service-account key .ga4-sa.json (property 541541035). Cached 10 min.
let ga4Cache = { at: 0, data: null };
async function getGA4() {
  if (ga4Cache.data && Date.now() - ga4Cache.at < 600000) return ga4Cache.data;
  try {
    const keyPath = join(ROOT, '.ga4-sa.json');
    if (!existsSync(keyPath)) return null;
    const k = JSON.parse(readFileSync(keyPath, 'utf8'));
    const now = Math.floor(Date.now() / 1000);
    const b = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
    const jwt = `${b({ alg: 'RS256', typ: 'JWT' })}.${b({ iss: k.client_email, scope: 'https://www.googleapis.com/auth/analytics.readonly', aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })}`;
    const sig = crypto.createSign('RSA-SHA256').update(jwt).sign(k.private_key, 'base64url');
    const tr = await (await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${jwt}.${sig}` }) })).json();
    if (!tr.access_token) return null;
    const PROP = '541541035';
    const hdr = { Authorization: `Bearer ${tr.access_token}`, 'Content-Type': 'application/json' };
    const totals = await (await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${PROP}:runReport`, { method: 'POST', headers: hdr, body: JSON.stringify({ dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }], metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }, { name: 'totalUsers' }] }) })).json();
    const tv = totals.rows?.[0]?.metricValues?.map((m) => m.value) || [];
    const pg = await (await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${PROP}:runReport`, { method: 'POST', headers: hdr, body: JSON.stringify({ dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }], dimensions: [{ name: 'pagePath' }], metrics: [{ name: 'screenPageViews' }], orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }], limit: 8 }) })).json();
    const pages = (pg.rows || []).map((r) => ({ path: r.dimensionValues[0].value, views: r.metricValues[0].value }));
    ga4Cache = { at: Date.now(), data: { pageViews: tv[0], sessions: tv[1], users: tv[2], pages } };
    return ga4Cache.data;
  } catch { return null; }
}

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function render(gsc, ga4) {
  const m = manifest();
  const tm = Object.fromEntries(m.topical_map.map((t) => [t.topic_id, t]));
  const order = { Ready: 0, Drafting: 1, Published: 2 };
  const rows = m.production_pipeline
    .map((p) => ({ ...tm[p.topic_id], ...p }))
    .sort((a, b) => (order[a.automation_status] ?? 9) - (order[b.automation_status] ?? 9));

  const posts = publishedPosts();
  const ready = rows.filter((r) => r.automation_status === 'Ready');
  const totalVol = m.topical_map.reduce((s, t) => s + (t.search_volume || 0), 0);
  const ai = aiVisibility();

  const card = (label, value, sub) =>
    `<div class="card"><div class="card-v">${esc(value)}</div><div class="card-l">${esc(label)}</div>${sub ? `<div class="card-s">${esc(sub)}</div>` : ''}</div>`;

  const statusBadge = (s) => `<span class="badge b-${s}">${s}</span>`;
  const dataCell = (t) => {
    const v = t.search_volume, kd = t.keyword_difficulty, cpc = t.cpc;
    if (v == null && kd == null && cpc == null) return '<span class="muted">no data (manual)</span>';
    return [v != null ? `<b>${v}</b>/mo` : null, kd != null ? `KD ${kd}` : null, cpc != null ? `$${cpc}` : null].filter(Boolean).join(' · ');
  };

  const queueRows = rows.map((r) => `<tr>
      <td>${statusBadge(r.automation_status)}</td>
      <td class="mono">${esc(r.topic_id)}</td>
      <td>${esc(r.primary_keyword || '')}</td>
      <td>${dataCell(r)}</td>
      <td>${esc(r.intent || '')}</td>
      <td class="muted">${esc(r.parent_pillar_id || 'pillar')}</td>
    </tr>`).join('');

  const postRows = posts.map((p) => `<tr><td>${esc(p.publishedAt)}</td><td><a href="https://restorationai.io/blog/${esc(p.slug)}" target="_blank">${esc(p.title)}</a></td><td><span class="badge b-cat">${esc(p.category)}</span></td></tr>`).join('') || '<tr><td colspan="3" class="muted">No published posts yet.</td></tr>';

  const phase2 = (title, note) => `<div class="panel soon"><h3>${esc(title)} <span class="soon-tag">Phase 2</span></h3><p class="muted">${esc(note)}</p></div>`;

  return `<!doctype html><html><head><meta charset="utf-8"><title>Restoration AI — Ops Dashboard</title>
<style>
  :root{--accent:${ACCENT};}
  *{box-sizing:border-box} body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;margin:0;background:#f1f5f9;color:#0f172a}
  header{background:#0f172a;color:#fff;padding:24px 32px}
  header h1{margin:0;font-size:20px} header p{margin:4px 0 0;color:#94a3b8;font-size:13px}
  main{max-width:1200px;margin:0 auto;padding:24px 32px}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:28px}
  .card{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:18px}
  .card-v{font-size:28px;font-weight:800} .card-l{color:#475569;font-size:13px;margin-top:2px} .card-s{color:#94a3b8;font-size:12px;margin-top:6px}
  .panel{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:20px;margin-bottom:24px}
  .panel h2,.panel h3{margin:0 0 14px} h2{font-size:16px} h3{font-size:14px}
  table{width:100%;border-collapse:collapse;font-size:13px} th,td{text-align:left;padding:9px 10px;border-bottom:1px solid #f1f5f9}
  th{color:#64748b;font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.04em}
  .mono{font-family:ui-monospace,monospace;color:#64748b} .muted{color:#94a3b8}
  a{color:#10a2d9;text-decoration:none} a:hover{text-decoration:underline}
  .badge{display:inline-block;font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px}
  .b-Ready{background:#dcfce7;color:#15803d} .b-Drafting{background:#fef9c3;color:#a16207} .b-Published{background:#dbeafe;color:#1d4ed8} .b-cat{background:#e0f2fe;color:#0369a1}
  .soon{opacity:.75;border-style:dashed} .soon-tag{font-size:10px;background:#f1f5f9;color:#64748b;padding:2px 7px;border-radius:999px;font-weight:700;vertical-align:middle}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:24px}
  @media(max-width:800px){.grid2{grid-template-columns:1fr}}
</style></head>
<body>
<header><h1>Restoration AI — Ops Dashboard</h1><p>Content visibility, rankings &amp; queue · reads live from CONTENT_MANIFEST.json</p></header>
<main>
  <div class="cards">
    ${card('Published posts', posts.length)}
    ${card('Ready to write', ready.length, 'in the queue')}
    ${card('Validated demand', totalVol.toLocaleString() + '/mo', 'sum of tracked search volume')}
    ${card('AI visibility', ai ? ai.mentionRate : 'n/a', ai ? `mention rate · ${ai.date}` : 'run baseline')}
    ${ga4 ? card('Page views', Number(ga4.pageViews).toLocaleString(), `${ga4.sessions} sessions · 28d`) : ''}
    ${gsc ? card('Search impressions', Number(gsc.totals.impressions).toLocaleString(), `${gsc.totals.clicks} clicks · 28d`) : ''}
  </div>

  <div class="panel">
    <h2>AI search visibility (GEO/AEO)</h2>
    ${ai ? `<p>Latest snapshot <b>${esc(ai.date)}</b>: mention rate <b>${esc(ai.mentionRate)}</b>, citation rate <b>${esc(ai.citationRate)}</b> across tracked buyer prompts. Source: <span class="mono">${esc(ai.source)}</span>.</p><p class="muted">Goal: grow the share of AI answers (ChatGPT/Gemini/Perplexity) that mention or cite restorationai.io. Re-measured monthly; publish posts → re-run → watch it move.</p>` : '<p class="muted">No AI-visibility data yet. Run the tracker to capture a baseline.</p>'}
  </div>

  <div class="panel">
    <h2>Content queue (${rows.length} topics) &amp; keyword data</h2>
    <table><thead><tr><th>Status</th><th>ID</th><th>Keyword</th><th>Search data</th><th>Intent</th><th>Pillar</th></tr></thead><tbody>${queueRows}</tbody></table>
  </div>

  <div class="panel">
    <h2>Google rankings &amp; search terms ${gsc ? `<span class="muted" style="font-size:12px;font-weight:400">(GSC · ${esc(gsc.start)} → ${esc(gsc.end)})</span>` : ''}</h2>
    ${gsc
      ? `<p><b>${gsc.totals.clicks}</b> clicks · <b>${gsc.totals.impressions}</b> impressions (28d). Top queries you're appearing for:</p>
         <table><thead><tr><th>Query</th><th>Clicks</th><th>Impressions</th><th>Avg position</th></tr></thead><tbody>
         ${gsc.rows.map((r) => `<tr><td>${esc(r.keys[0])}</td><td>${r.clicks}</td><td>${r.impressions}</td><td>${r.position.toFixed(1)}</td></tr>`).join('') || '<tr><td colspan="4" class="muted">No query data yet.</td></tr>'}
         </tbody></table>`
      : '<p class="muted">GSC not connected (token not found). Showing nothing live.</p>'}
  </div>

  <div class="grid2">
    <div class="panel">
      <h2>Published posts (${posts.length})</h2>
      <table><thead><tr><th>Date</th><th>Title</th><th>Category</th></tr></thead><tbody>${postRows}</tbody></table>
    </div>
    <div>
      ${ga4
        ? `<div class="panel"><h2>Traffic <span class="muted" style="font-size:12px;font-weight:400">(GA4 · 28d)</span></h2>
           <p><b>${Number(ga4.pageViews).toLocaleString()}</b> page views · <b>${ga4.sessions}</b> sessions · <b>${ga4.users}</b> users</p>
           <table><thead><tr><th>Top pages</th><th>Views</th></tr></thead><tbody>
           ${ga4.pages.map((p) => `<tr><td>${esc(p.path)}</td><td>${p.views}</td></tr>`).join('') || '<tr><td colspan="2" class="muted">No data yet.</td></tr>'}
           </tbody></table></div>`
        : phase2('Traffic / page views', 'GA4 service-account key (.ga4-sa.json) not found.')}
      ${phase2('Indexation detail', 'Per-URL index status via GSC URL Inspection. Sitemap is submitted; coverage detail can be added here next.')}
    </div>
  </div>
</main>
</body></html>`;
}

createServer(async (req, res) => {
  if (req.url === '/favicon.ico') { res.writeHead(204); return res.end(); }
  try {
    const [gsc, ga4] = await Promise.all([getGSC(), getGA4()]);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(render(gsc, ga4));
  } catch (e) {
    res.writeHead(500); res.end('Dashboard error: ' + e.message);
  }
}).listen(PORT, () => console.log(`\n📊  Ops dashboard → http://localhost:${PORT}\n   (Ctrl+C to stop)\n`));
