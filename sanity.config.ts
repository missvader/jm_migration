import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'v0giy5uw',
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
