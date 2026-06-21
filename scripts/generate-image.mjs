/**
 * Deterministic image generator for the auto-blog pipeline.
 *
 * Calls the Gemini "Nano Banana Pro" image model (REST :generateContent) with a
 * prompt and saves the result as a PNG under public/blog-images/. No MCP
 * dependency — safe to run headless from cron. Mirrors the proven method used by
 * rank-ai/scripts/content_writer.py (gemini_generate_image).
 *
 * Usage:
 *   node scripts/generate-image.mjs \
 *     --prompt "Photorealistic editorial photograph ..." \
 *     --out public/blog-images/rai-011-hero.png \
 *     [--aspect 16:9] [--model flash]
 *
 * Reads GOOGLE_AI_API_KEY (preferred) or GEMINI_API_KEY from .env.local / env.
 * Exits non-zero on failure so the caller can fall back / abort.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const PRO_MODEL = 'gemini-3-pro-image-preview';      // Nano Banana Pro
const FLASH_MODEL = 'gemini-3.1-flash-image-preview'; // Nano Banana 2 (Flash, cheaper)

function loadKey() {
  for (const name of ['GOOGLE_AI_API_KEY', 'GEMINI_API_KEY']) {
    try {
      const envPath = join(__dirname, '..', '.env.local');
      for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
        const [k, ...rest] = line.split('=');
        if (k?.trim() === name) {
          const v = rest.join('=').trim();
          if (v) return v;
        }
      }
    } catch {}
    if (process.env[name]) return process.env[name];
  }
  return null;
}

function parseArgs() {
  const a = process.argv.slice(2);
  const r = { aspect: '16:9', model: 'pro' };
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '--prompt') r.prompt = a[++i];
    else if (a[i] === '--out') r.out = a[++i];
    else if (a[i] === '--aspect') r.aspect = a[++i];
    else if (a[i] === '--model') r.model = a[++i];
  }
  return r;
}

async function generate(key, model, prompt, aspect, maxRetries = 3) {
  const url = `${API_BASE}/${model}:generateContent?key=${key}`;
  const body = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio: aspect },
    },
  });

  let last = '';
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    let res;
    try {
      res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
    } catch (e) {
      last = `net: ${e.message}`;
      await new Promise((r) => setTimeout(r, 2 ** attempt * 1000));
      continue;
    }
    if (res.ok) {
      const data = await res.json();
      for (const cand of data.candidates || []) {
        for (const part of cand.content?.parts || []) {
          const inline = part.inlineData || part.inline_data;
          if (inline?.data) return Buffer.from(inline.data, 'base64');
        }
      }
      throw new Error('Gemini response had no image data: ' + JSON.stringify(data).slice(0, 400));
    }
    const text = (await res.text()).slice(0, 300);
    if (res.status === 429 || res.status >= 500) {
      last = `HTTP ${res.status}: ${text}`;
      await new Promise((r) => setTimeout(r, 2 ** attempt * 1000));
      continue;
    }
    throw new Error(`Gemini HTTP ${res.status}: ${text}`);
  }
  throw new Error(`Gemini image gen failed after ${maxRetries} retries. Last: ${last}`);
}

async function main() {
  const { prompt, out, aspect, model } = parseArgs();
  if (!prompt || !out) {
    console.error('❌  --prompt and --out are required.');
    process.exit(2);
  }
  const key = loadKey();
  if (!key) {
    console.error('❌  No GOOGLE_AI_API_KEY / GEMINI_API_KEY found in .env.local or environment.');
    process.exit(2);
  }

  const modelId = model === 'flash' ? FLASH_MODEL : PRO_MODEL;
  const bytes = await generate(key, modelId, prompt, aspect);

  const outPath = resolve(__dirname, '..', out);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, bytes);
  console.log(`✅  Wrote ${out} (${Math.round(bytes.length / 1024)} KB, ${modelId})`);
}

main().catch((e) => {
  console.error('❌  ' + (e?.message || e));
  process.exit(1);
});
