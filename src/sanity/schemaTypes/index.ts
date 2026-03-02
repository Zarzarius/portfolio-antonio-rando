import {
  HomeIcon,
  EnvelopeIcon,
  UserIcon,
  BookIcon,
  DocumentTextIcon,
} from '@sanity/icons';
import { defineField, defineType, type SchemaTypeDefinition } from 'sanity';

const document = (name: string, title: string) =>
  defineType({
    name,
    title,
    type: 'document',
    fields: [
      defineField({ name: 'title', title: 'Title', type: 'string' }),
      defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    ],
  }) as SchemaTypeDefinition;

/** Shared meta fields for page documents (SEO / heading) */
const pageMetaFields = [
  defineField({ name: 'title', title: 'Title', type: 'string', description: 'Page title (e.g. for <title> and headings)' }),
  defineField({ name: 'description', title: 'Description', type: 'text', description: 'Meta description for SEO' }),
];

const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'heroBadge', title: 'Hero badge', type: 'string' }),
    defineField({ name: 'heroHeadline', title: 'Hero headline', type: 'string' }),
    defineField({ name: 'heroSubline', title: 'Hero subline', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'aboutExcerpt', title: 'About excerpt', type: 'text' }),
    defineField({ name: 'writingIntro', title: 'Writing intro', type: 'text' }),
    defineField({ name: 'teachingExcerpt', title: 'Teaching excerpt', type: 'text' }),
  ],
});

const writingPage = defineType({
  name: 'writingPage',
  title: 'Writing Page',
  type: 'document',
  icon: BookIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'text' }),
  ],
});

const teachingPage = defineType({
  name: 'teachingPage',
  title: 'Teaching Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'text' }),
  ],
});

const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: UserIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'text' }),
  ],
});

const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    ...pageMetaFields,
    defineField({ name: 'body', title: 'Body', type: 'text' }),
    defineField({ name: 'email', title: 'Contact email', type: 'string' }),
  ],
});

const project = document('project', 'Project');
const article = document('article', 'Article');
const essay = document('essay', 'Essay');
const fiction = document('fiction', 'Fiction');
const publication = document('publication', 'Publication');
const workshop = document('workshop', 'Workshop');
const course = document('course', 'Course');
const mentoring = document('mentoring', 'Mentoring');

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    writingPage,
    teachingPage,
    aboutPage,
    contactPage,
    project,
    article,
    essay,
    fiction,
    publication,
    workshop,
    course,
    mentoring,
  ],
};
