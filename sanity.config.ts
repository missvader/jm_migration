import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './sanity/schemas'

 const config = defineConfig({
  name: 'default',
  title: 'Julian Admin',
  projectId: 'v0giy5uw',
  dataset: 'production',
  basePath: '/admin',
  plugins: [
    deskTool(),
    visionTool(),
  ],
  apiVersion: '2023-09-04',
  schema: {
    types: schemas,
  },
})
export default config;