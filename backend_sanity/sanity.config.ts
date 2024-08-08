import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemas} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Skilled Works Decors',

  projectId: '4m1bn9c6',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
