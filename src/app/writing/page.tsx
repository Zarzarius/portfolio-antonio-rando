import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";

const { wrapper, main, sectionTitle, writing, writingGrid, card, cardTitle, cardDesc } =
  styles;

export const metadata = {
  title: "Writing — Antonio Rando",
  description:
    "Essays, fiction, and publications by Antonio Rando.",
};

export default function WritingPage() {
  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(writing)} aria-labelledby="writing-title">
          <h1 className={clsx(sectionTitle)} id="writing-title">
            Writing
          </h1>
          <div className={clsx(writingGrid)}>
            <article className={clsx(card)}>
              <h2 className={clsx(cardTitle)}>Essays & Articles</h2>
              <p className={clsx(cardDesc)}>
                Long-form pieces on culture, education, and language.
              </p>
            </article>
            <article className={clsx(card)}>
              <h2 className={clsx(cardTitle)}>Fiction</h2>
              <p className={clsx(cardDesc)}>
                Stories and narrative work.
              </p>
            </article>
            <article className={clsx(card)}>
              <h2 className={clsx(cardTitle)}>Publications</h2>
              <p className={clsx(cardDesc)}>
                Selected published work and collaborations.
              </p>
            </article>
          </div>
        </section>
        <SiteFooter />
      </main>
    </div>
  );
}
