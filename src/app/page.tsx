import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";

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

export default function Home() {
  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(hero)} aria-labelledby="hero-headline">
          <div className={clsx(heroInner)}>
            <div className={clsx(heroContent)}>
              <span className={clsx(heroBadge)} id="hero-badge">
                Writer & Teacher
              </span>
              <h1 className={clsx(heroHeadline)} id="hero-headline">
                Antonio Rando
              </h1>
              <p className={clsx(heroSubline)}>
                Words that teach, stories that stay. Author and educator.
              </p>
              <div className={clsx(heroDivider)} aria-hidden />
            </div>
            <div className={clsx(heroImageWrap)}>
              <div className={clsx(heroImage)} role="img" aria-label="Antonio Rando" />
            </div>
          </div>
        </section>

        <section id="about" className={clsx(sectionCard)} aria-labelledby="about-title">
          <h2 className={clsx(sectionTitle)} id="about-title">
            About
          </h2>
          <p className={clsx(aboutBody, sectionBody)}>
            Antonio Rando is a writer and teacher whose work sits at the crossroads of
            literature and education. Through essays, fiction, and teaching, he explores how
            language shapes understanding and how stories connect us.
          </p>
        </section>

        <section id="writing" className={clsx(writing)} aria-labelledby="writing-title">
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
              <p className={clsx(cardDesc)}>
                Stories and narrative work.
              </p>
            </article>
            <article className={clsx(card)}>
              <h3 className={clsx(cardTitle)}>Publications</h3>
              <p className={clsx(cardDesc)}>
                Selected published work and collaborations.
              </p>
            </article>
          </div>
        </section>

        <section id="teaching" className={clsx(sectionCard)} aria-labelledby="teaching-title">
          <h2 className={clsx(sectionTitle)} id="teaching-title">
            Teaching
          </h2>
          <p className={clsx(teachingBody, sectionBody)}>
            Antonio brings the same care for language and narrative into the classroom.
            Workshops, courses, and one-to-one mentoring for writers and educators.
          </p>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
