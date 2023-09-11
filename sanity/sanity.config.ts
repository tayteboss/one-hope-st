import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'One Hope St',

  projectId: 'uil2x8og',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
        .title('Content')
        .items([
          // orderableDocumentListDeskItem({type: 'projects', S, context}),
          S.listItem()
            .title('Site Settings')
            .child(
              S.editor()
                .schemaType('siteSettings')
                .documentId('siteSettings')
            ),
          // Add a visual divider (optional)
          S.divider(),
          // List out the rest of the document types, but filter out the config type
          ...S.documentTypeListItems()
            .filter(listItem => !['siteSettings'].includes(listItem.getId()))
        ])
      },
    }),
    visionTool(),
    vercelDeployTool()
  ],

  schema: {
    types: schemaTypes,
  },
})