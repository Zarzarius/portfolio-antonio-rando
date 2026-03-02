import clsx from 'clsx';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { getResearchPage, getResearchPapers } from '@/sanity/queries';

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
  const page = await getResearchPage(locale);

  return buildLocaleMetadata({
    locale,
    title: page?.title
      ? `${page.title} — Antonio Rando`
      : `${dictionary.research.title} — Antonio Rando`,
    description: page?.description ?? dictionary.research.description,
    pathname: '/research',
  });
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const [page, papers] = await Promise.all([
    getResearchPage(locale),
    getResearchPapers(),
  ]);

  const title = page?.title ?? dictionary.research.title;
  const body = page?.body;

  return (
    <main className={clsx(main)}>
      <section className={clsx(contentSection)} aria-labelledby="research-title">
        <h1 className={clsx(sectionTitle)} id="research-title">
          {title}
        </h1>
        {body ? <p className={clsx(sectionBody)}>{body}</p> : null}
        {papers.length > 0 && (
          <div className={clsx(contentGrid)}>
            {papers.map((paper) => (
              <article key={paper._id} className={clsx(card)}>
                <h2 className={clsx(cardTitle)}>
                  {paper.doi ? (
                    <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                      {paper.title ?? dictionary.common.untitled}
                    </a>
                  ) : (
                    paper.title ?? dictionary.common.untitled
                  )}
                </h2>
                {paper.journal && (
                  <span className={clsx(cardMeta)}>{paper.journal}</span>
                )}
                {paper.abstract && (
                  <p className={clsx(cardDesc)}>{paper.abstract}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
