import { client } from './lib/client'

export type Publication = {
  _id: string
  title: string | null
  slug: { current: string } | null
}

const publicationFields = `
  _id,
  title,
  slug
`

/** Fetch all published publications, newest first */
export async function getPublications(): Promise<Publication[]> {
  return client.fetch<Publication[]>(
    `*[_type == "publication"] | order(_createdAt desc) { ${publicationFields} }`
  )
}
