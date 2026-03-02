import clsx from "clsx";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/layout.module.scss";
import { getContactPage } from "@/sanity/queries";

const { wrapper, main, sectionCard, sectionTitle, sectionBody, footerLink } = styles;

const DEFAULT_TITLE = "Contact — Antonio Rando";
const DEFAULT_DESCRIPTION = "Get in touch with Antonio Rando.";
const DEFAULT_BODY =
  "For inquiries about writing, teaching, or collaborations, please reach out by email.";
const DEFAULT_EMAIL = "casermeiro@gmail.com";

export async function generateMetadata() {
  const page = await getContactPage();
  return {
    title: page?.title ? `${page.title} — Antonio Rando` : DEFAULT_TITLE,
    description: page?.description ?? DEFAULT_DESCRIPTION,
  };
}

export default async function ContactPage() {
  const page = await getContactPage();
  const title = page?.title ?? "Contact";
  const body = page?.body ?? DEFAULT_BODY;
  const email = page?.email ?? DEFAULT_EMAIL;

  return (
    <div className={clsx(wrapper)}>
      <SiteHeader />
      <main className={clsx(main)}>
        <section className={clsx(sectionCard)} aria-labelledby="contact-title">
          <h1 className={clsx(sectionTitle)} id="contact-title">
            {title}
          </h1>
          <p className={clsx(sectionBody)}>{body}</p>
          <p className={clsx(sectionBody)}>
            <a href={`mailto:${email}`} className={clsx(footerLink)}>
              {email}
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
