import {
  HomeIcon,
  EnvelopeIcon,
  UserIcon,
  BookIcon,
  DocumentTextIcon,
  PlayIcon,
  SearchIcon,
} from '@sanity/icons';
import { defineField, defineType, type SchemaTypeDefinition } from 'sanity';

const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized string',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'de', title: 'German', type: 'string' }),
    defineField({ name: 'es', title: 'Spanish', type: 'string' }),
  ],
});

const localizedText = defineType({
  name: 'localizedText',
  title: 'Localized text',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', rows: 3 }),
    defineField({ name: 'de', title: 'German', type: 'text', rows: 3 }),
    defineField({ name: 'es', title: 'Spanish', type: 'text', rows: 3 }),
  ],
});

/** Shared meta fields for page documents (SEO / heading) */
const pageMetaFields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'localizedString',
    description: 'Page title (e.g. for <title> and headings)',
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'localizedText',
    description: 'Meta description for SEO',
  }),
];

// ── Page singletons ──────────────────────────────────────────────────────

const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'heroBadge', title: 'Hero badge', type: 'localizedString' }),
    defineField({ name: 'heroHeadline', title: 'Hero headline', type: 'localizedString' }),
    defineField({ name: 'heroSubline', title: 'Hero subline', type: 'localizedText' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'aboutExcerpt', title: 'About excerpt', type: 'localizedText' }),
    defineField({ name: 'aboutHighlightOne', title: 'About highlight one', type: 'localizedText' }),
    defineField({ name: 'aboutHighlightTwo', title: 'About highlight two', type: 'localizedText' }),
    defineField({ name: 'aboutHighlightThree', title: 'About highlight three', type: 'localizedText' }),
    defineField({ name: 'aboutCta', title: 'About CTA label', type: 'localizedString' }),
    defineField({ name: 'journalismExcerpt', title: 'Journalism & Analysis excerpt', type: 'localizedText' }),
    defineField({ name: 'researchExcerpt', title: 'Academic Research excerpt', type: 'localizedText' }),
    defineField({ name: 'multimediaExcerpt', title: 'Multimedia & Podcast excerpt', type: 'localizedText' }),
  ],
});

const journalismPage = defineType({
  name: 'journalismPage',
  title: 'Journalism & Analysis Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
  ],
});

const researchPage = defineType({
  name: 'researchPage',
  title: 'Academic Research Page',
  type: 'document',
  icon: SearchIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
  ],
});

const multimediaPage = defineType({
  name: 'multimediaPage',
  title: 'Multimedia & Podcast Page',
  type: 'document',
  icon: PlayIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
  ],
});

const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: UserIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
  ],
});

const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
    defineField({ name: 'email', title: 'Contact email', type: 'string' }),
  ],
});

// ── Content document types ───────────────────────────────────────────────

const journalismArticle = defineType({
  name: 'journalismArticle',
  title: 'Journalism Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.es' } }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'localizedText' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['opinion', 'analysis', 'reportage', 'interview'] } }),
    defineField({ name: 'externalUrl', title: 'External URL', type: 'url' }),
  ],
});

const researchPaper = defineType({
  name: 'researchPaper',
  title: 'Research Paper',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.es' } }),
    defineField({ name: 'abstract', title: 'Abstract', type: 'localizedText' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'journal', title: 'Journal / Publisher', type: 'localizedString' }),
    defineField({ name: 'doi', title: 'DOI', type: 'string' }),
  ],
});

const podcastEpisode = defineType({
  name: 'podcastEpisode',
  title: 'Podcast Episode',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.es' } }),
    defineField({ name: 'description', title: 'Description', type: 'localizedText' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'audioUrl', title: 'Audio URL', type: 'url' }),
    defineField({ name: 'duration', title: 'Duration (minutes)', type: 'number' }),
  ],
});

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localizedString,
    localizedText,
    homePage,
    journalismPage,
    researchPage,
    multimediaPage,
    aboutPage,
    contactPage,
    journalismArticle,
    researchPaper,
    podcastEpisode,
  ],
};
