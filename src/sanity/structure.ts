import { HomeIcon, BookIcon, DocumentTextIcon, UserIcon, EnvelopeIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

const PAGE_SINGLETONS = ['homePage', 'writingPage', 'teachingPage', 'aboutPage', 'contactPage'] as const

const pageSingletons = [
  { type: 'homePage' as const, title: 'Home', icon: HomeIcon },
  { type: 'writingPage' as const, title: 'Writing', icon: BookIcon },
  { type: 'teachingPage' as const, title: 'Teaching', icon: DocumentTextIcon },
  { type: 'aboutPage' as const, title: 'About', icon: UserIcon },
  { type: 'contactPage' as const, title: 'Contact', icon: EnvelopeIcon },
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items(
              pageSingletons.map(({ type, title, icon }) =>
                S.listItem()
                  .title(title)
                  .icon(icon)
                  .child(
                    S.document()
                      .schemaType(type)
                      .documentId(type)
                      .title(title)
                  )
              )
            )
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !PAGE_SINGLETONS.includes(item.getId() as (typeof PAGE_SINGLETONS)[number])
      ),
    ])
