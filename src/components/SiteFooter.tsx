import Link from "next/link";
import styles from "./layout.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerName}>Antonio Rando</span>
      <span className={styles.footerTagline}>Writer & Teacher</span>
      <div className={styles.footerContact}>
        <Link href="/contact" className={styles.footerLink}>
          Contact
        </Link>
      </div>
    </footer>
  );
}
