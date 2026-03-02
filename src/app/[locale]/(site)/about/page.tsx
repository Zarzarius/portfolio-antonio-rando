import clsx from 'clsx';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { getAboutPage } from '@/sanity/queries';

const { main, sectionCard, sectionTitle, sectionBody, aboutBody } = styles;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const page = await getAboutPage(locale);

  return buildLocaleMetadata({
    locale,
    title: page?.title ? `${page.title} — Antonio Rando` : dictionary.about.title,
    description: page?.description ?? dictionary.about.description,
    pathname: '/about',
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const page = await getAboutPage(locale);
  const title = page?.title ?? dictionary.about.title;
  const body = page?.body ?? dictionary.about.body;

  return (
    <main className={clsx(main)}>
      <section className={clsx(sectionCard)} aria-labelledby="about-title">
        <h1 className={clsx(sectionTitle)} id="about-title">
          {title}
        </h1>
        <p className={clsx(aboutBody, sectionBody)}>{body}</p>
      </section>
    </main>
  );
}
