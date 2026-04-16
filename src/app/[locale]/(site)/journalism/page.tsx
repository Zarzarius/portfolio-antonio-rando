import clsx from 'clsx';
import { ListingCard } from '@/components/ListingCard';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { getJournalismPage, getJournalismArticles } from '@/sanity/queries';

const { main, sectionTitle, sectionBody, contentSection, contentGrid, cmsBodyText } =
  styles;

// Refresh this page periodically so newly published CMS entries appear automatically.
export const revalidate = 300;

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
  const localizeCategory = (category: string | null): string | undefined => {
    const normalizedCategory = category?.trim().toLowerCase();

    if (!normalizedCategory) {
      return undefined;
    }

    switch (normalizedCategory) {
      case 'opinion':
      case 'analysis':
      case 'reportage':
      case 'interview':
        return dictionary.journalism.categories[normalizedCategory];
      default:
        return category ?? undefined;
    }
  };

  return (
    <main className={clsx(main)}>
      <section className={clsx(contentSection)} aria-labelledby="journalism-title">
        <h1 className={clsx(sectionTitle)} id="journalism-title">
          {title}
        </h1>
        {body ? <p className={clsx(sectionBody, cmsBodyText)}>{body}</p> : null}
        {articles.length > 0 && (
          <div className={clsx(contentGrid)}>
            {articles.map((article) => (
              <ListingCard
                key={article._id}
                title={article.title ?? dictionary.common.untitled}
                meta={localizeCategory(article.category)}
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
