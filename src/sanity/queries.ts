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

// --- Page singletons

export type HomePage = {
  _id: string
  title: string | null
  description: string | null
  heroBadge: string | null
  heroHeadline: string | null
  heroSubline: string | null
  heroImage: { asset: { _ref: string }; alt?: string } | null
  aboutExcerpt: string | null
  writingIntro: string | null
  teachingExcerpt: string | null
}

export type WritingPage = {
  _id: string
  title: string | null
  description: string | null
  body: string | null
}

export type TeachingPage = {
  _id: string
  title: string | null
  description: string | null
  body: string | null
}

export type AboutPage = {
  _id: string
  title: string | null
  description: string | null
  body: string | null
}

export type ContactPage = {
  _id: string
  title: string | null
  description: string | null
  body: string | null
  email: string | null
}

const homePageFields = `
  _id,
  title,
  description,
  heroBadge,
  heroHeadline,
  heroSubline,
  heroImage,
  aboutExcerpt,
  writingIntro,
  teachingExcerpt
`

const textPageFields = `
  _id,
  title,
  description,
  body
`

export async function getHomePage(): Promise<HomePage | null> {
  return client.fetch<HomePage | null>(
    `*[_id == "homePage"][0]{ ${homePageFields} }`
  )
}

export async function getWritingPage(): Promise<WritingPage | null> {
  return client.fetch<WritingPage | null>(
    `*[_id == "writingPage"][0]{ ${textPageFields} }`
  )
}

export async function getTeachingPage(): Promise<TeachingPage | null> {
  return client.fetch<TeachingPage | null>(
    `*[_id == "teachingPage"][0]{ ${textPageFields} }`
  )
}

export async function getAboutPage(): Promise<AboutPage | null> {
  return client.fetch<AboutPage | null>(
    `*[_id == "aboutPage"][0]{ ${textPageFields} }`
  )
}

export async function getContactPage(): Promise<ContactPage | null> {
  return client.fetch<ContactPage | null>(
    `*[_id == "contactPage"][0]{ ${textPageFields}, email }`
  )
}
