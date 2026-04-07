import clsx from 'clsx';
import { ListingCard } from '@/components/ListingCard';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { getMultimediaPage, getPodcastEpisodes } from '@/sanity/queries';

const { main, sectionTitle, sectionBody, contentSection, contentGrid, cmsBodyText } =
  styles;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const page = await getMultimediaPage(locale);

  return buildLocaleMetadata({
    locale,
    title: page?.title
      ? `${page.title} — Antonio Rando`
      : `${dictionary.multimedia.title} — Antonio Rando`,
    description: page?.description ?? dictionary.multimedia.description,
    pathname: '/multimedia',
  });
}

export default async function MultimediaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const [page, episodes] = await Promise.all([
    getMultimediaPage(locale),
    getPodcastEpisodes(locale),
  ]);

  const title = page?.title ?? dictionary.multimedia.title;
  const body = page?.body;

  return (
    <main className={clsx(main)}>
      <section className={clsx(contentSection)} aria-labelledby="multimedia-title">
        <h1 className={clsx(sectionTitle)} id="multimedia-title">
          {title}
        </h1>
        {body ? <p className={clsx(sectionBody, cmsBodyText)}>{body}</p> : null}
        {episodes.length > 0 && (
          <div className={clsx(contentGrid)}>
            {episodes.map((episode) => (
              <ListingCard
                key={episode._id}
                title={episode.title ?? dictionary.common.untitled}
                meta={
                  episode.duration != null
                    ? `${episode.duration} ${dictionary.common.minutesShort}`
                    : undefined
                }
                description={episode.description ?? undefined}
                href={episode.audioUrl ?? undefined}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
