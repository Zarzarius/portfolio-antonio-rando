import { HomeIcon, DocumentTextIcon, SearchIcon, PlayIcon, UserIcon, EnvelopeIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

const PAGE_SINGLETONS = ['homePage', 'journalismPage', 'researchPage', 'multimediaPage', 'aboutPage', 'contactPage'] as const

const pageSingletons = [
  { type: 'homePage' as const, title: 'Home', icon: HomeIcon },
  { type: 'journalismPage' as const, title: 'Journalism & Analysis', icon: DocumentTextIcon },
  { type: 'researchPage' as const, title: 'Academic Research', icon: SearchIcon },
  { type: 'multimediaPage' as const, title: 'Multimedia & Podcast', icon: PlayIcon },
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
