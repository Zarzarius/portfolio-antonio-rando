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
