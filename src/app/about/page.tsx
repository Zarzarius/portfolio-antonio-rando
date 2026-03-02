import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";
import { getAboutPage } from "@/sanity/queries";

const { wrapper, main, sectionCard, sectionTitle, sectionBody, aboutBody } = styles;

const DEFAULT_TITLE = "About — Antonio Rando";
const DEFAULT_DESCRIPTION =
  "Antonio Rando is a writer, teacher, and Doctor in History with a PhD specialized in the Balkan countries.";
const DEFAULT_BODY =
  "Antonio Rando is a writer, teacher, and Doctor in History with a PhD specialized in the Balkan countries. His work sits at the crossroads of literature, education, and historical scholarship. Through essays, fiction, and teaching, he explores how language shapes understanding and how stories connect us.";

export async function generateMetadata() {
  const page = await getAboutPage();
  return {
    title: page?.title ? `${page.title} — Antonio Rando` : DEFAULT_TITLE,
    description: page?.description ?? DEFAULT_DESCRIPTION,
  };
}

export default async function AboutPage() {
  const page = await getAboutPage();
  const title = page?.title ?? "About";
  const body = page?.body ?? DEFAULT_BODY;

  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(sectionCard)} aria-labelledby="about-title">
          <h1 className={clsx(sectionTitle)} id="about-title">
            {title}
          </h1>
          <p className={clsx(aboutBody, sectionBody)}>{body}</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
