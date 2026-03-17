import clsx from 'clsx';
import { ListingCard } from '@/components/ListingCard';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { getResearchPage, getResearchPapers } from '@/sanity/queries';

const { main, sectionTitle, sectionBody, contentSection, contentGrid } = styles;

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
              <ListingCard
                key={paper._id}
                title={paper.title ?? dictionary.common.untitled}
                meta={paper.journal ?? undefined}
                description={paper.abstract ?? undefined}
                href={paper.doi ? `https://doi.org/${paper.doi}` : undefined}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
