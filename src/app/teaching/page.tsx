import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";

const { wrapper, main, sectionCard, sectionTitle, sectionBody, teachingBody } = styles;

export const metadata = {
  title: "Teaching — Antonio Rando",
  description:
    "Workshops, courses, and one-to-one mentoring for writers and educators.",
};

export default function TeachingPage() {
  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(sectionCard)} aria-labelledby="teaching-title">
          <h1 className={clsx(sectionTitle)} id="teaching-title">
            Teaching
          </h1>
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
