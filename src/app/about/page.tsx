import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";

const { wrapper, main, sectionCard, sectionTitle, sectionBody, aboutBody } = styles;

export const metadata = {
  title: "About — Antonio Rando",
  description:
    "Antonio Rando is a writer, teacher, and Doctor in History with a PhD specialized in the Balkan countries.",
};

export default function AboutPage() {
  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(sectionCard)} aria-labelledby="about-title">
          <h1 className={clsx(sectionTitle)} id="about-title">
            About
          </h1>
          <p className={clsx(aboutBody, sectionBody)}>
            Antonio Rando is a writer, teacher, and Doctor in History with a PhD
            specialized in the Balkan countries. His work sits at the crossroads of
            literature, education, and historical scholarship. Through essays, fiction,
            and teaching, he explores how language shapes understanding and how stories
            connect us.
          </p>
        </section>
        <SiteFooter />
      </main>
    </div>
  );
}
