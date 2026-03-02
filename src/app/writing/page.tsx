import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";
import { getWritingPage } from "@/sanity/queries";

const { wrapper, main, sectionTitle, sectionBody, writing, writingGrid, card, cardTitle, cardDesc } =
  styles;

const DEFAULT_TITLE = "Writing — Antonio Rando";
const DEFAULT_DESCRIPTION = "Essays, fiction, and publications by Antonio Rando.";

export async function generateMetadata() {
  const page = await getWritingPage();
  return {
    title: page?.title ? `${page.title} — Antonio Rando` : DEFAULT_TITLE,
    description: page?.description ?? DEFAULT_DESCRIPTION,
  };
}

export default async function WritingPage() {
  const page = await getWritingPage();
  const title = page?.title ?? "Writing";
  const body = page?.body;

  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(writing)} aria-labelledby="writing-title">
          <h1 className={clsx(sectionTitle)} id="writing-title">
            {title}
          </h1>
          {body ? (
            <p className={clsx(sectionBody)}>{body}</p>
          ) : null}
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
      </main>
      <SiteFooter />
    </div>
  );
}
