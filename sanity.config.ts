import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Restoration AI AEO Blog',

  projectId: 'sloj5um4',
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
