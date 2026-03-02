import clsx from 'clsx';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { getJournalismPage, getJournalismArticles } from '@/sanity/queries';

const {
  main,
  sectionTitle,
  sectionBody,
  contentSection,
  contentGrid,
  card,
  cardTitle,
  cardDesc,
  cardMeta,
} = styles;

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
    getJournalismArticles(),
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
              <article key={article._id} className={clsx(card)}>
                <h2 className={clsx(cardTitle)}>
                  {article.externalUrl ? (
                    <a href={article.externalUrl} target="_blank" rel="noopener noreferrer">
                      {article.title ?? dictionary.common.untitled}
                    </a>
                  ) : (
                    article.title ?? dictionary.common.untitled
                  )}
                </h2>
                {article.category && (
                  <span className={clsx(cardMeta)}>{article.category}</span>
                )}
                {article.excerpt && (
                  <p className={clsx(cardDesc)}>{article.excerpt}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
