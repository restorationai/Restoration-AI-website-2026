import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://restorationai.github.io',
  base: '/Restoration-AI-website-2026',
  output: 'static',
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
