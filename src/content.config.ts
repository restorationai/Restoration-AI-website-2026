import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Native Astro blog — markdown posts live in src/content/blog/*.md.
// Replaces the previous Sanity-backed blog. Publishing = add a .md file + push;
// Cloudflare Pages rebuilds the static site automatically.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Optional SEO overrides — fall back to title/description in the page.
    seoTitle: z.string().optional(),
    seoDescription: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    // Editorial taxonomy used by the blog index category pills.
    category: z.string().default('General'),
    topicId: z.string().optional(),
    author: z.string().default('Santino Velci'),
    // Hero image: a path under /public (e.g. /blog-images/rai-011-hero.png) or a full URL.
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    // Optional cluster uplink shown as a pill on the post page.
    pillarSlug: z.string().optional(),
    pillarLabel: z.string().optional(),
    loomVideoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
