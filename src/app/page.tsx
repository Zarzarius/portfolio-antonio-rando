import clsx from 'clsx';
import Image from 'next/image';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import styles from '@/components/layout.module.scss';
import { urlFor } from '@/sanity/lib/image';
import { getHomePage, getPublications } from '@/sanity/queries';

const DEFAULT_HERO = {
  badge: 'Writer & Teacher',
  headline: 'Antonio Rando',
  subline: 'Words that teach, stories that stay. Author and educator.',
};
const DEFAULT_ABOUT =
  "I'm a writer and teacher, with a focus on Balkan history. I teach Spanish in Germany and collaborate with different digital blogs for opinion pieces and networking. Through essays, fiction, and teaching, I explore how language shapes understanding and how stories connect people.";
const DEFAULT_TEACHING =
  'I teach Spanish in Germany and bring the same care for language and narrative into the classroom. Workshops, courses, and one-to-one mentoring for writers and educators.';

const {
  wrapper,
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
  writing,
  writingGrid,
  card,
  cardTitle,
  cardDesc,
  teachingBody,
} = styles;

export default async function Home() {
  const [home, publications] = await Promise.all([
    getHomePage(),
    getPublications(),
  ]);

  const heroBadgeText = home?.heroBadge ?? DEFAULT_HERO.badge;
  const heroHeadlineText = home?.heroHeadline ?? DEFAULT_HERO.headline;
  const heroSublineText = home?.heroSubline ?? DEFAULT_HERO.subline;
  const aboutExcerpt = home?.aboutExcerpt ?? DEFAULT_ABOUT;
  const teachingExcerpt = home?.teachingExcerpt ?? DEFAULT_TEACHING;

  const heroImageUrl =
    home?.heroImage &&
    urlFor(home.heroImage).width(500).height(500).url();

  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
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
            About
          </h2>
          <p className={clsx(aboutBody, sectionBody)}>{aboutExcerpt}</p>
        </section>

        <section
          id="writing"
          className={clsx(writing)}
          aria-labelledby="writing-title"
        >
          <h2 className={clsx(sectionTitle)} id="writing-title">
            Writing
          </h2>
          <div className={clsx(writingGrid)}>
            <article className={clsx(card)}>
              <h3 className={clsx(cardTitle)}>Essays & Articles</h3>
              <p className={clsx(cardDesc)}>
                Long-form pieces on culture, education, and language.
              </p>
            </article>
            <article className={clsx(card)}>
              <h3 className={clsx(cardTitle)}>Fiction</h3>
              <p className={clsx(cardDesc)}>Stories and narrative work.</p>
            </article>
            <article className={clsx(card)}>
              <h3 className={clsx(cardTitle)}>Publications</h3>
              <p className={clsx(cardDesc)}>
                Selected published work and collaborations.
              </p>
              {publications.length > 0 && (
                <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem' }}>
                  {publications.map((pub) => (
                    <li key={pub._id}>{pub.title ?? 'Untitled'}</li>
                  ))}
                </ul>
              )}
            </article>
          </div>
        </section>

        <section
          id="teaching"
          className={clsx(sectionCard)}
          aria-labelledby="teaching-title"
        >
          <h2 className={clsx(sectionTitle)} id="teaching-title">
            Teaching
          </h2>
          <p className={clsx(teachingBody, sectionBody)}>{teachingExcerpt}</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
