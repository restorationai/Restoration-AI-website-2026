import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'sloj5um4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

async function main() {
  // Query to find draft posts (pending)
  // Or posts where publishedAt is null/in the future
  const query = `*[_type == "post" && (_id in path("drafts.**") || !defined(publishedAt))] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage
  }`;

  const posts = await client.fetch(query);
  console.log(JSON.stringify(posts, null, 2));
}

main().catch(console.error);
