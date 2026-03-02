import clsx from 'clsx';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { getContactPage } from '@/sanity/queries';

const { main, sectionCard, sectionTitle, sectionBody, footerLink } = styles;

const DEFAULT_EMAIL = 'casermeiro@gmail.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const page = await getContactPage(locale);

  return buildLocaleMetadata({
    locale,
    title: page?.title
      ? `${page.title} — Antonio Rando`
      : `${dictionary.contact.title} — Antonio Rando`,
    description: page?.description ?? dictionary.contact.description,
    pathname: '/contact',
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const page = await getContactPage(locale);
  const title = page?.title ?? dictionary.contact.title;
  const body = page?.body ?? dictionary.contact.body;
  const email = page?.email ?? DEFAULT_EMAIL;

  return (
    <main className={clsx(main)}>
      <section className={clsx(sectionCard)} aria-labelledby="contact-title">
        <h1 className={clsx(sectionTitle)} id="contact-title">
          {title}
        </h1>
        <p className={clsx(sectionBody)}>{body}</p>
        <p className={clsx(sectionBody)}>
          <a href={`mailto:${email}`} className={clsx(footerLink)}>
            {email}
          </a>
        </p>
      </section>
    </main>
  );
}
