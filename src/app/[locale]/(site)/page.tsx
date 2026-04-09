import clsx from 'clsx';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import styles from '@/components/layout.module.scss';
import homeStyles from './home.module.scss';
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
  blogEmbed,
  blogEmbedHeader,
  blogEmbedLogoWrap,
  blogEmbedLogo,
  blogEmbedTitleWrap,
  blogEmbedKicker,
  blogEmbedFrame,
  blogEmbedIframe,
  aboutBody,
  aboutLead,
  aboutHighlights,
  aboutHighlight,
  aboutCta,
} = styles;

const {
  workShowcase,
  workShowcaseHeader,
  workShowcaseIntro,
  workShowcaseGrid,
  workPanel,
  workPanelHeader,
  workPanelIndex,
  workPanelIconWrap,
  workPanelIcon,
  workPanelTitle,
  workPanelDesc,
  workPanelMeta,
} = homeStyles;

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
  const aboutHighlightItems = [
    home?.aboutHighlightOne ?? dictionary.home.aboutHighlightOne,
    home?.aboutHighlightTwo ?? dictionary.home.aboutHighlightTwo,
    home?.aboutHighlightThree ?? dictionary.home.aboutHighlightThree,
  ];
  const aboutCtaText = home?.aboutCta ?? dictionary.home.aboutCta;
  const journalismExcerpt =
    home?.journalismExcerpt ?? dictionary.home.journalismExcerpt;
  const researchExcerpt =
    home?.researchExcerpt ?? dictionary.home.researchExcerpt;
  const multimediaExcerpt =
    home?.multimediaExcerpt ?? dictionary.home.multimediaExcerpt;

  const heroImageUrl =
    home?.heroImage && urlFor(home.heroImage).width(500).height(500).url();

  const workPanels: Array<{
    href: string;
    title: string;
    description: string;
    icon: string;
    navLabel: string;
  }> = [
    {
      href: withLocale(locale, '/journalism'),
      title: dictionary.home.journalismCardTitle,
      description: journalismExcerpt,
      icon: '/icons/journalism.svg',
      navLabel: dictionary.nav.journalism,
    },
    {
      href: withLocale(locale, '/research'),
      title: dictionary.home.researchCardTitle,
      description: researchExcerpt,
      icon: '/icons/research.svg',
      navLabel: dictionary.nav.research,
    },
    {
      href: withLocale(locale, '/multimedia'),
      title: dictionary.home.multimediaCardTitle,
      description: multimediaExcerpt,
      icon: '/icons/multimedia.svg',
      navLabel: dictionary.nav.multimedia,
    },
  ];

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
              <Image
                src={heroImageUrl || '/images/antonio.png'}
                alt={heroHeadlineText}
                loading="eager"
                width={500}
                height={500}
                priority
                className={heroImageImg}
              />
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
        <p className={clsx(aboutBody, sectionBody, aboutLead)}>
          {aboutExcerpt}
        </p>
        <ul
          className={clsx(aboutHighlights)}
          aria-label={dictionary.home.aboutHeading}
        >
          {aboutHighlightItems.map((item) => (
            <li key={item} className={clsx(aboutHighlight, sectionBody)}>
              {item}
            </li>
          ))}
        </ul>
        <Link href={withLocale(locale, '/about')} className={clsx(aboutCta)}>
          {aboutCtaText}
        </Link>
      </section>

      <section
        id="sections"
        className={clsx(sectionCard, workShowcase)}
        aria-labelledby="sections-title"
      >
        <div className={workShowcaseHeader}>
          <h2 className={clsx(sectionTitle)} id="sections-title">
            {dictionary.common.work}
          </h2>
          {/* <p className={clsx(sectionBody, workShowcaseIntro)}>{heroSublineText}</p> */}
        </div>
        <div className={workShowcaseGrid}>
          {workPanels.map((panel, index) => (
            <Link key={panel.href} href={panel.href} className={workPanel}>
              <div className={workPanelHeader}>
                <span className={workPanelIndex}>{`0${index + 1}`}</span>
                <span className={workPanelIconWrap} aria-hidden>
                  <Image
                    src={panel.icon}
                    alt=""
                    width={32}
                    height={32}
                    className={workPanelIcon}
                  />
                </span>
              </div>
              <h3 className={workPanelTitle}>{panel.title}</h3>
              <p className={workPanelDesc}>{panel.description}</p>
              <span className={workPanelMeta}>{panel.navLabel}</span>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="blog-embed"
        className={clsx(sectionCard, blogEmbed)}
        aria-labelledby="blog-embed-title"
      >
        <div className={blogEmbedHeader}>
          <div className={blogEmbedLogoWrap}>
            <Image
              src="/images/elmundodesdeuntaburete-logo.jpeg"
              alt="El mundo desde un taburete logo"
              width={240}
              height={180}
              className={blogEmbedLogo}
            />
          </div>
          <div className={blogEmbedTitleWrap}>
            <span className={blogEmbedKicker}>Featured Blog</span>
            <h2 className={clsx(sectionTitle)} id="blog-embed-title">
              El mundo desde un taburete
            </h2>
          </div>
        </div>
        <div className={blogEmbedFrame}>
          <iframe
            src="https://www.elmundodesdeuntaburete.es/"
            title="El mundo desde un taburete"
            loading="lazy"
            className={blogEmbedIframe}
          />
        </div>
      </section>
    </main>
  );
}
