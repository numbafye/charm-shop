import {defineConfig} from 'sanity'
import '@sanity/color-input'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'charmecom',

  projectId: '6wrbtqnt',
  dataset: 'production',

  plugins: [visionTool()],

  schema: {
    types: schemaTypes,
  },
})
