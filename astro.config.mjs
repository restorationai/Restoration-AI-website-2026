// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://restorationai.io',
  output: 'static',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [
    react(),
    sanity({
      projectId: 'sloj5um4',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2024-01-01',
      studioBasePath: '/studio',
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
  },
});
