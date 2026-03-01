import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";

const { wrapper, main, sectionCard, sectionTitle, sectionBody, footerLink } = styles;

export const metadata = {
  title: "Contact — Antonio Rando",
  description: "Get in touch with Antonio Rando.",
};

export default function ContactPage() {
  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(sectionCard)} aria-labelledby="contact-title">
          <h1 className={clsx(sectionTitle)} id="contact-title">
            Contact
          </h1>
          <p className={clsx(sectionBody)}>
            For inquiries about writing, teaching, or collaborations, please reach out by
            email.
          </p>
          <p className={clsx(sectionBody)}>
            <a href="mailto:contact@example.com" className={clsx(footerLink)}>
              contact@example.com
            </a>
          </p>
        </section>
        <SiteFooter />
      </main>
    </div>
  );
}
