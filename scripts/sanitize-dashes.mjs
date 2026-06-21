/**
 * Replace em/en dashes with brand-voice punctuation (the no-em-dash rule).
 * Numeric/currency ranges keep a hyphen ("4–8 hours" -> "4-8 hours"); everything
 * else becomes a comma. Run on one or more markdown files.
 *
 * Usage: node scripts/sanitize-dashes.mjs <file.md> [file2.md ...]
 */
import { readFileSync, writeFileSync } from 'fs';

function sanitize(text) {
  let out = text;
  // 1) Ranges between numbers/currency/percent -> hyphen.
  out = out.replace(/(\$?[\d,]+%?)\s*[–—]\s*(\$?[\d,]+%?)/g, '$1-$2');
  // 2) Remaining em/en dashes (prose) -> comma + space.
  out = out.replace(/\s*[—–]\s*/g, ', ');
  // 3) Tidy artifacts.
  out = out.replace(/,\s*,/g, ',').replace(/\s+,/g, ',').replace(/,\s*\./g, '.');
  return out;
}

let changed = 0;
for (const file of process.argv.slice(2)) {
  const before = readFileSync(file, 'utf-8');
  const emBefore = (before.match(/[—–]/g) || []).length;
  const after = sanitize(before);
  const emAfter = (after.match(/[—–]/g) || []).length;
  if (after !== before) {
    writeFileSync(file, after);
    changed++;
  }
  console.log(`${file}: dashes ${emBefore} -> ${emAfter}`);
}
console.log(`done (${changed} file(s) updated)`);
