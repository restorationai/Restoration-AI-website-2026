// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://restorationai.io',

  integrations: [
    react(),
    sanity({
      projectId: 'sloj5um4',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2024-01-01',
      studioBasePath: '/studio',
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
