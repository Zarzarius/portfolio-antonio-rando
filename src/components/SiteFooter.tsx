import { Link } from "next-view-transitions";
import { withLocale, type Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/dictionaries";
import styles from "./layout.module.scss";

type SiteFooterProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerName}>Antonio Rando</span>
        <span className={styles.footerTagline}>{dictionary.footer.tagline}</span>
        <div className={styles.footerContact}>
          <Link href={withLocale(locale, "/contact")} className={styles.footerLink}>
            {dictionary.footer.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
