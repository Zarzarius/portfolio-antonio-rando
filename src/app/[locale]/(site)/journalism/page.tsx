import clsx from 'clsx';
import { ListingCard } from '@/components/ListingCard';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { getJournalismPage, getJournalismArticles } from '@/sanity/queries';

const { main, sectionTitle, sectionBody, contentSection, contentGrid } = styles;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const page = await getJournalismPage(locale);

  return buildLocaleMetadata({
    locale,
    title: page?.title
      ? `${page.title} — Antonio Rando`
      : `${dictionary.journalism.title} — Antonio Rando`,
    description: page?.description ?? dictionary.journalism.description,
    pathname: '/journalism',
  });
}

export default async function JournalismPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const [page, articles] = await Promise.all([
    getJournalismPage(locale),
    getJournalismArticles(locale),
  ]);

  const title = page?.title ?? dictionary.journalism.title;
  const body = page?.body;

  return (
    <main className={clsx(main)}>
      <section className={clsx(contentSection)} aria-labelledby="journalism-title">
        <h1 className={clsx(sectionTitle)} id="journalism-title">
          {title}
        </h1>
        {body ? <p className={clsx(sectionBody)}>{body}</p> : null}
        {articles.length > 0 && (
          <div className={clsx(contentGrid)}>
            {articles.map((article) => (
              <ListingCard
                key={article._id}
                title={article.title ?? dictionary.common.untitled}
                meta={article.category ?? undefined}
                description={article.excerpt ?? undefined}
                href={article.externalUrl ?? undefined}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
