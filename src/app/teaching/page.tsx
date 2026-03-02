import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";
import { getTeachingPage } from "@/sanity/queries";

const { wrapper, main, sectionCard, sectionTitle, sectionBody, teachingBody } = styles;

const DEFAULT_TITLE = "Teaching — Antonio Rando";
const DEFAULT_DESCRIPTION =
  "Workshops, courses, and one-to-one mentoring for writers and educators.";
const DEFAULT_BODY =
  "Antonio brings the same care for language and narrative into the classroom. Workshops, courses, and one-to-one mentoring for writers and educators.";

export async function generateMetadata() {
  const page = await getTeachingPage();
  return {
    title: page?.title ? `${page.title} — Antonio Rando` : DEFAULT_TITLE,
    description: page?.description ?? DEFAULT_DESCRIPTION,
  };
}

export default async function TeachingPage() {
  const page = await getTeachingPage();
  const title = page?.title ?? "Teaching";
  const body = page?.body ?? DEFAULT_BODY;

  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(sectionCard)} aria-labelledby="teaching-title">
          <h1 className={clsx(sectionTitle)} id="teaching-title">
            {title}
          </h1>
          <p className={clsx(teachingBody, sectionBody)}>{body}</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
