/**
 * Upload a local image to Sanity and attach it to a post.
 *
 * HERO mode (default) — sets the post's mainImage field:
 *   node scripts/upload-sanity-image.mjs \
 *     --file public/blog-images/rai-011-hero.png \
 *     --post-id drafts.rai-011-some-slug \
 *     --alt "Restoration contractor assessing water damage on-site"
 *
 * BODY mode — patches an image block already in the body array by its _key:
 *   node scripts/upload-sanity-image.mjs \
 *     --mode body \
 *     --file public/blog-images/rai-011-infographic.png \
 *     --post-id drafts.rai-011-some-slug \
 *     --key img-infographic \
 *     --alt "IICRC water damage category comparison infographic" \
 *     --caption "Water damage categories per IICRC S500 Standard"
 */

import { createClient } from '@sanity/client';
import { readFileSync, existsSync, createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve, extname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  try {
    const envPath = join(__dirname, '..', '.env.local');
    const lines = readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const [key, ...rest] = line.split('=');
      if (key?.trim() === 'SANITY_API_TOKEN') return rest.join('=').trim();
    }
  } catch {}
  return process.env.SANITY_API_TOKEN;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { mode: 'hero' };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--mode')    result.mode    = args[++i];
    if (args[i] === '--file')    result.file    = args[++i];
    if (args[i] === '--post-id') result.postId  = args[++i];
    if (args[i] === '--alt')     result.alt     = args[++i];
    if (args[i] === '--key')     result.key     = args[++i];
    if (args[i] === '--caption') result.caption = args[++i];
  }
  return result;
}

const { mode, file, postId, alt, key, caption } = parseArgs();

if (!file || !postId) {
  console.error('\n❌  --file and --post-id are required.\n');
  process.exit(1);
}
if (mode === 'body' && !key) {
  console.error('\n❌  --key is required in body mode (must match the _key of the image block in the body array).\n');
  process.exit(1);
}

const filePath = resolve(join(__dirname, '..'), file);
if (!existsSync(filePath)) {
  console.error(`\n❌  File not found: ${filePath}\n`);
  process.exit(1);
}

const token = loadEnv();
if (!token) {
  console.error('\n❌  No SANITY_API_TOKEN found in .env.local\n');
  process.exit(1);
}

const client = createClient({
  projectId: 'sloj5um4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const MIME_TYPES = {
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

async function main() {
  const ext = extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] ?? 'image/png';
  const filename = filePath.split('/').pop();

  console.log(`\n📤  Uploading ${filename} to Sanity (mode: ${mode})...`);
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    contentType,
    filename,
  });
  console.log(`✅  Asset uploaded: ${asset._id}`);

  if (mode === 'hero') {
    console.log(`\n🔗  Patching mainImage on ${postId}...`);
    await client
      .patch(postId)
      .set({
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id },
          alt: alt ?? '',
        },
      })
      .commit();
    console.log(`✅  mainImage set.`);
  } else {
    console.log(`\n🔗  Patching body image block [_key="${key}"] on ${postId}...`);
    await client
      .patch(postId)
      .set({
        [`body[_key=="${key}"].asset`]:   { _type: 'reference', _ref: asset._id },
        [`body[_key=="${key}"].alt`]:     alt ?? '',
        [`body[_key=="${key}"].caption`]: caption ?? '',
      })
      .commit();
    console.log(`✅  Body image block patched.`);
  }

  const cdnId = asset._id.replace('image-', '').replace(/-([a-z0-9]+)$/, '.$1');
  console.log(`\n   CDN preview: https://cdn.sanity.io/images/sloj5um4/production/${cdnId}\n`);
}

main().catch((err) => {
  console.error('❌  Upload failed:', err.message);
  process.exit(1);
});
