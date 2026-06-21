// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
// Fully static site (no on-demand routes), so no Cloudflare adapter is needed.
// Images are optimized at build time via Astro's default Sharp service.
export default defineConfig({
  site: 'https://restorationai.io',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      customPages: [
        'https://restorationai.io/integrations/jobnimbus/',
        'https://restorationai.io/integrations/housecall-pro/',
        'https://restorationai.io/integrations/jobber/'
      ],
      serialize(item) {
        if (!item.priority) {
          if (item.url === 'https://restorationai.io/') {
            item.priority = 1.0;
          } else {
            item.priority = 0.8;
          }
        }
        if (!item.lastmod) {
          item.lastmod = new Date().toISOString();
        }
        return item;
      }
    }),
  ],

  // Markdown blog posts: external links open in a new tab (keeps readers on the
  // blog) with rel=noopener noreferrer for security. Internal links (relative,
  // e.g. /blog/...) are left as same-tab so navigation/crawl flow stays natural.
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
          // Only treat http(s) absolute URLs as external; relative internal
          // links are untouched.
          protocols: ['http', 'https'],
        },
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['retell-client-js-sdk', 'livekit-client'],
    },
  },
});
