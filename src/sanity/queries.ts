import type { Locale } from '@/i18n/config';
import { client } from './lib/client';

// ── Page singleton types ─────────────────────────────────────────────────

export type HomePage = {
  _id: string
  title: string | null
  description: string | null
  heroBadge: string | null
  heroHeadline: string | null
  heroSubline: string | null
  heroImage: { asset: { _ref: string }; alt?: string } | null
  aboutExcerpt: string | null
  aboutHighlightOne: string | null
  aboutHighlightTwo: string | null
  aboutHighlightThree: string | null
  aboutCta: string | null
  journalismExcerpt: string | null
  researchExcerpt: string | null
  multimediaExcerpt: string | null
}

export type JournalismPage = {
  _id: string
  title: string | null
  description: string | null
  body: string | null
}

export type ResearchPage = {
  _id: string
  title: string | null
  description: string | null
  body: string | null
}

export type MultimediaPage = {
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

// ── Content document types ───────────────────────────────────────────────

export type JournalismArticle = {
  _id: string
  title: string | null
  slug: { current: string } | null
  excerpt: string | null
  publishedAt: string | null
  category: string | null
  externalUrl: string | null
}

export type ResearchPaper = {
  _id: string
  title: string | null
  slug: { current: string } | null
  abstract: string | null
  publishedAt: string | null
  journal: string | null
  url: string | null
}

export type PodcastEpisode = {
  _id: string
  title: string | null
  slug: { current: string } | null
  description: string | null
  publishedAt: string | null
  audioUrl: string | null
  duration: number | null
}

// ── Page singleton fetchers ──────────────────────────────────────────────

export async function getHomePage(locale: Locale): Promise<HomePage | null> {
  return client.fetch<HomePage | null>(
    `*[_id == "homePage"][0]{
      _id,
      "title": coalesce(title[$locale], title.en, title),
      "description": coalesce(description[$locale], description.en, description),
      "heroBadge": coalesce(heroBadge[$locale], heroBadge.en, heroBadge),
      "heroHeadline": coalesce(heroHeadline[$locale], heroHeadline.en, heroHeadline),
      "heroSubline": coalesce(heroSubline[$locale], heroSubline.en, heroSubline),
      heroImage,
      "aboutExcerpt": coalesce(aboutExcerpt[$locale], aboutExcerpt.en, aboutExcerpt),
      "aboutHighlightOne": coalesce(aboutHighlightOne[$locale], aboutHighlightOne.en, aboutHighlightOne),
      "aboutHighlightTwo": coalesce(aboutHighlightTwo[$locale], aboutHighlightTwo.en, aboutHighlightTwo),
      "aboutHighlightThree": coalesce(aboutHighlightThree[$locale], aboutHighlightThree.en, aboutHighlightThree),
      "aboutCta": coalesce(aboutCta[$locale], aboutCta.en, aboutCta),
      "journalismExcerpt": coalesce(journalismExcerpt[$locale], journalismExcerpt.en, journalismExcerpt),
      "researchExcerpt": coalesce(researchExcerpt[$locale], researchExcerpt.en, researchExcerpt),
      "multimediaExcerpt": coalesce(multimediaExcerpt[$locale], multimediaExcerpt.en, multimediaExcerpt)
    }`,
    { locale }
  );
}

export async function getJournalismPage(
  locale: Locale
): Promise<JournalismPage | null> {
  return client.fetch<JournalismPage | null>(
    `*[_id == "journalismPage"][0]{
      _id,
      "title": coalesce(title[$locale], title.en, title),
      "description": coalesce(description[$locale], description.en, description),
      "body": coalesce(body[$locale], body.en, body)
    }`,
    { locale }
  );
}

export async function getResearchPage(
  locale: Locale
): Promise<ResearchPage | null> {
  return client.fetch<ResearchPage | null>(
    `*[_id == "researchPage"][0]{
      _id,
      "title": coalesce(title[$locale], title.en, title),
      "description": coalesce(description[$locale], description.en, description),
      "body": coalesce(body[$locale], body.en, body)
    }`,
    { locale }
  );
}

export async function getMultimediaPage(
  locale: Locale
): Promise<MultimediaPage | null> {
  return client.fetch<MultimediaPage | null>(
    `*[_id == "multimediaPage"][0]{
      _id,
      "title": coalesce(title[$locale], title.en, title),
      "description": coalesce(description[$locale], description.en, description),
      "body": coalesce(body[$locale], body.en, body)
    }`,
    { locale }
  );
}

export async function getAboutPage(locale: Locale): Promise<AboutPage | null> {
  return client.fetch<AboutPage | null>(
    `*[_id == "aboutPage"][0]{
      _id,
      "title": coalesce(title[$locale], title.en, title),
      "description": coalesce(description[$locale], description.en, description),
      "body": coalesce(body[$locale], body.en, body)
    }`,
    { locale }
  );
}

export async function getContactPage(
  locale: Locale
): Promise<ContactPage | null> {
  return client.fetch<ContactPage | null>(
    `*[_id == "contactPage"][0]{
      _id,
      "title": coalesce(title[$locale], title.en, title),
      "description": coalesce(description[$locale], description.en, description),
      "body": coalesce(body[$locale], body.en, body),
      email
    }`,
    { locale }
  );
}

// ── Content document fetchers ────────────────────────────────────────────

export async function getJournalismArticles(
  locale: Locale
): Promise<JournalismArticle[]> {
  return client.fetch<JournalismArticle[]>(
    `*[_type == "journalismArticle"] | order(publishedAt desc) {
      _id,
      "title": coalesce(title[$locale], title.en, title),
      slug,
      "excerpt": coalesce(excerpt[$locale], excerpt.en, excerpt),
      publishedAt,
      "category": coalesce(category[$locale], category.en, category),
      externalUrl
    }`,
    { locale }
  );
}

export async function getResearchPapers(
  locale: Locale
): Promise<ResearchPaper[]> {
  return client.fetch<ResearchPaper[]>(
    `*[_type == "researchPaper"] | order(publishedAt desc) {
      _id,
      "title": coalesce(title[$locale], title.en, title),
      slug,
      "abstract": coalesce(abstract[$locale], abstract.en, abstract),
      publishedAt,
      "journal": coalesce(journal[$locale], journal.en, journal),
      url
    }`,
    { locale }
  );
}

export async function getPodcastEpisodes(
  locale: Locale
): Promise<PodcastEpisode[]> {
  return client.fetch<PodcastEpisode[]>(
    `*[_type == "podcastEpisode"] | order(publishedAt desc) {
      _id,
      "title": coalesce(title[$locale], title.en, title),
      slug,
      "description": coalesce(description[$locale], description.en, description),
      publishedAt,
      audioUrl,
      duration
    }`,
    { locale }
  );
}
