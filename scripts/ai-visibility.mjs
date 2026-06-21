/**
 * AI visibility tracker — measures whether AI assistants mention/cite
 * restorationai.io for the buyer prompts we care about, and logs the trend.
 *
 *   npm run ai-visibility            # run all tracked prompts, append to history
 *   npm run ai-visibility -- --dry   # run but don't write history (preview)
 *
 * Method: DataForSEO ChatGPT (web search ON) per prompt. Records mention rate
 * (% of answers naming Restoration AI) and citation rate (% citing restorationai.io)
 * to reports/ai-visibility/history.csv + a dated snapshot. Re-run monthly; publish
 * content, re-run, and watch the rates move — that's the measure→improve loop.
 *
 * Creds: DATAFORSEO_USERNAME/PASSWORD env, else read from ~/.claude.json MCP config.
 */
import { readFileSync, writeFileSync, appendFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { homedir } from 'os';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'reports/ai-visibility');
const DRY = process.argv.includes('--dry');

// Tracked buyer prompts (keep in sync with the baseline report).
const PROMPTS = [
  'best AI answering service for restoration companies',
  'best after hours answering service for contractors',
  'ai receptionist for small business',
  'how do restoration companies stop missing calls',
  'answering service vs AI receptionist for contractors',
  'how do I get more water damage restoration leads',
  'best marketing for restoration companies',
  'how do roofing companies get more leads',
  'how do I get more construction leads',
  'how to get exclusive contractor leads',
];

const BRAND = /restoration\s*ai|restorationai/i;
const DOMAIN = /restorationai\.io/i;

function creds() {
  if (process.env.DATAFORSEO_USERNAME && process.env.DATAFORSEO_PASSWORD)
    return `${process.env.DATAFORSEO_USERNAME}:${process.env.DATAFORSEO_PASSWORD}`;
  try {
    const c = JSON.parse(readFileSync(join(homedir(), '.claude.json'), 'utf8'));
    let found = null;
    (function walk(o) {
      for (const k in o) {
        const v = o[k];
        if (k === 'dataforseo' && v?.env?.DATAFORSEO_USERNAME) { found = `${v.env.DATAFORSEO_USERNAME}:${v.env.DATAFORSEO_PASSWORD}`; return; }
        if (v && typeof v === 'object') walk(v);
        if (found) return;
      }
    })(c);
    return found;
  } catch { return null; }
}

async function ask(auth, prompt) {
  const res = await fetch('https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/live', {
    method: 'POST',
    headers: { Authorization: `Basic ${Buffer.from(auth).toString('base64')}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([{ user_prompt: prompt, model_name: 'gpt-4o', web_search: true, max_output_tokens: 700 }]),
  });
  const j = await res.json();
  const blob = JSON.stringify(j.tasks?.[0]?.result?.[0] ?? {});
  return { mentioned: BRAND.test(blob), cited: DOMAIN.test(blob), ok: j.status_code === 20000 };
}

async function main() {
  const auth = creds();
  if (!auth) { console.error('❌  No DataForSEO creds (DATAFORSEO_USERNAME/PASSWORD or ~/.claude.json).'); process.exit(2); }
  mkdirSync(OUT, { recursive: true });

  const results = [];
  for (const p of PROMPTS) {
    try {
      const r = await ask(auth, p);
      results.push({ prompt: p, ...r });
      console.log(`${r.mentioned ? '✓ mentioned' : '· not mentioned'}${r.cited ? ' + cited' : ''}  —  ${p}`);
    } catch (e) {
      results.push({ prompt: p, mentioned: false, cited: false, ok: false });
      console.log(`! error  —  ${p} (${e.message})`);
    }
  }

  const n = results.length;
  const mentions = results.filter((r) => r.mentioned).length;
  const citations = results.filter((r) => r.cited).length;
  const mr = Math.round((mentions / n) * 100) + '%';
  const cr = Math.round((citations / n) * 100) + '%';
  const date = new Date().toISOString().slice(0, 10);

  console.log(`\n=== ${date}: mention ${mr} (${mentions}/${n}), citation ${cr} (${citations}/${n}) ===`);

  if (DRY) { console.log('(dry run — not written)'); return; }

  const csv = join(OUT, 'history.csv');
  if (!existsSync(csv)) writeFileSync(csv, 'date,mention_rate,citation_rate,prompts,mentions,citations\n');
  appendFileSync(csv, `${date},${mr},${cr},${n},${mentions},${citations}\n`);

  const snap = ['# AI Visibility — ' + date, '', `Mention rate: **${mr}** (${mentions}/${n}) · Citation rate: **${cr}** (${citations}/${n})`, '', '| Prompt | Mentioned | Cited |', '|---|---|---|',
    ...results.map((r) => `| ${r.prompt} | ${r.mentioned ? 'yes' : 'no'} | ${r.cited ? 'yes' : 'no'} |`)].join('\n') + '\n';
  writeFileSync(join(OUT, `${date}-snapshot.md`), snap);
  console.log(`Logged to ${csv} + ${date}-snapshot.md`);
}

main().catch((e) => { console.error('❌ ' + e.message); process.exit(1); });
