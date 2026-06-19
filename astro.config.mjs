// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Fully static site (no on-demand routes), so no Cloudflare adapter is needed.
// Images are optimized at build time via Astro's default Sharp service.
export default defineConfig({
  site: 'https://restorationai.io',
  output: 'static',
  integrations: [
    react(),
    sanity({
      projectId: 'sloj5um4',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2024-01-01',
      studioBasePath: '/studio',
      // Hash routing keeps the embedded Studio route static (prerender: true),
      // so the site needs no SSR adapter and deploys cleanly to Cloudflare Pages.
      studioRouterHistory: 'hash',
    }),
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

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['retell-client-js-sdk', 'livekit-client'],
    },
  },
});
