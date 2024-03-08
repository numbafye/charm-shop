import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'charmecom',

  projectId: '6wrbtqnt',
  dataset: 'production',

  plugins: [visionTool(), structureTool()],

  schema: {
    types: schemaTypes,
  },
})
