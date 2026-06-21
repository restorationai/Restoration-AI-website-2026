// Centralized author registry. The blog post template renders the author box and
// Person schema from this single source of truth, so every post (legacy and
// every future auto-blogged one) shows a consistent, correct E-E-A-T author —
// no per-post bio to get wrong. Key on the post frontmatter `author` field.

export type Author = {
  name: string;
  title: string;
  bio: string;
  photo: string;      // path under /public (optimized .webp)
  photoAlt: string;
  url: string;        // canonical author/profile URL on our site
  sameAs: string[];   // external identity links (LinkedIn, etc.) for schema
  linkedin?: string;
};

export const authors: Record<string, Author> = {
  'Santino Velci': {
    name: 'Santino Velci',
    title: 'Founder, Restoration AI',
    bio: "Santino Velci is the founder of RestorationAI.io. He grew up in Hawaii and spent six years working as a restoration technician before going on to build 8-figure businesses online. He came back to the industry because of one story he couldn't let go of: his uncle lost an $80,000 condominium restoration job because he missed a single phone call. A good contractor, a real job, gone to whoever answered first. He built RestorationAI.io so that never happens to another restoration company owner.",
    photo: '/authors/santino-velci.webp',
    photoAlt: 'Santino Velci, founder of Restoration AI',
    url: 'https://restorationai.io/about',
    linkedin: 'https://www.linkedin.com/in/santino-velci-509468114/',
    sameAs: ['https://www.linkedin.com/in/santino-velci-509468114/'],
  },
};

export const DEFAULT_AUTHOR = 'Santino Velci';

export function getAuthor(name?: string): Author {
  return authors[name ?? DEFAULT_AUTHOR] ?? authors[DEFAULT_AUTHOR];
}
