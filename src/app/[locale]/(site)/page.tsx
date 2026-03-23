import clsx from 'clsx';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import styles from '@/components/layout.module.scss';
import { withLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocaleMetadata } from '@/i18n/metadata';
import { readLocale } from '@/i18n/params';
import { urlFor } from '@/sanity/lib/image';
import { getHomePage } from '@/sanity/queries';

const {
  main,
  hero,
  heroInner,
  heroContent,
  heroBadge,
  heroHeadline,
  heroSubline,
  heroDivider,
  heroImageWrap,
  heroImage,
  heroImageImg,
  sectionCard,
  sectionTitle,
  sectionBody,
  aboutBody,
  contentSection,
  contentGrid,
  card,
  cardLink,
  cardTitle,
  cardDesc,
} = styles;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const home = await getHomePage(locale);

  return buildLocaleMetadata({
    locale,
    title: home?.title ?? 'Antonio Rando',
    description: home?.description ?? dictionary.home.heroSubline,
    pathname: '/',
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const home = await getHomePage(locale);

  const heroBadgeText = home?.heroBadge ?? dictionary.home.heroBadge;
  const heroHeadlineText = home?.heroHeadline ?? 'Antonio Rando';
  const heroSublineText = home?.heroSubline ?? dictionary.home.heroSubline;
  const aboutExcerpt = home?.aboutExcerpt ?? dictionary.home.aboutExcerpt;
  const journalismExcerpt =
    home?.journalismExcerpt ?? dictionary.home.journalismExcerpt;
  const researchExcerpt = home?.researchExcerpt ?? dictionary.home.researchExcerpt;
  const multimediaExcerpt =
    home?.multimediaExcerpt ?? dictionary.home.multimediaExcerpt;

  const heroImageUrl =
    home?.heroImage && urlFor(home.heroImage).width(500).height(500).url();

  return (
    <main className={clsx(main)}>
      <section className={clsx(hero)} aria-labelledby="hero-headline">
        <div className={clsx(heroInner)}>
          <div className={clsx(heroContent)}>
            <span className={clsx(heroBadge)} id="hero-badge">
              {heroBadgeText}
            </span>
            <h1 className={clsx(heroHeadline)} id="hero-headline">
              {heroHeadlineText}
            </h1>
            <p className={clsx(heroSubline)}>{heroSublineText}</p>
            <div className={clsx(heroDivider)} aria-hidden />
          </div>
          <div className={clsx(heroImageWrap)}>
            <div
              className={clsx(heroImage)}
              role="img"
              aria-label={heroHeadlineText}
            >
              {heroImageUrl ? (
                <Image
                  src={heroImageUrl}
                  alt={heroHeadlineText}
                  width={500}
                  height={500}
                  className={heroImageImg}
                />
              ) : (
                <Image
                  src="/images/antonio.png"
                  alt={heroHeadlineText}
                  width={500}
                  height={500}
                  className={heroImageImg}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={clsx(sectionCard)}
        aria-labelledby="about-title"
      >
        <h2 className={clsx(sectionTitle)} id="about-title">
          {dictionary.home.aboutHeading}
        </h2>
        <p className={clsx(aboutBody, sectionBody)}>{aboutExcerpt}</p>
      </section>

      <section
        id="sections"
        className={clsx(contentSection)}
        aria-labelledby="sections-title"
      >
        <h2 className={clsx(sectionTitle)} id="sections-title">
          {dictionary.common.work}
        </h2>
        <div className={clsx(contentGrid)}>
          <Link
            href={withLocale(locale, '/journalism')}
            className={clsx(card, cardLink)}
          >
            <h3 className={clsx(cardTitle)}>{dictionary.home.journalismCardTitle}</h3>
            <p className={clsx(cardDesc)}>{journalismExcerpt}</p>
          </Link>
          <Link
            href={withLocale(locale, '/research')}
            className={clsx(card, cardLink)}
          >
            <h3 className={clsx(cardTitle)}>{dictionary.home.researchCardTitle}</h3>
            <p className={clsx(cardDesc)}>{researchExcerpt}</p>
          </Link>
          <Link
            href={withLocale(locale, '/multimedia')}
            className={clsx(card, cardLink)}
          >
            <h3 className={clsx(cardTitle)}>{dictionary.home.multimediaCardTitle}</h3>
            <p className={clsx(cardDesc)}>{multimediaExcerpt}</p>
          </Link>
        </div>
      </section>

      <section
        id="blog-embed"
        className={clsx(sectionCard)}
        aria-labelledby="blog-embed-title"
      >
        <h2 className={clsx(sectionTitle)} id="blog-embed-title">
          El mundo desde un taburete
        </h2>
        <iframe
          src="https://www.elmundodesdeuntaburete.es/"
          title="El mundo desde un taburete"
          loading="lazy"
          style={{
            width: '100%',
            minHeight: '720px',
            border: 0,
          }}
        />
      </section>
    </main>
  );
}
