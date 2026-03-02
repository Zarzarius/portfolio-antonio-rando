"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { withLocale, withoutLocale, type Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/dictionaries";
import styles from "./layout.module.scss";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const pathname = usePathname();
  const currentPath = withoutLocale(pathname || "/");
  const navItems = [
    { label: dictionary.nav.journalism, href: "/journalism" },
    { label: dictionary.nav.research, href: "/research" },
    { label: dictionary.nav.multimedia, href: "/multimedia" },
    { label: dictionary.nav.about, href: "/about" },
    { label: dictionary.nav.contact, href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <Link href={withLocale(locale, "/")} className={styles.logo}>
        Antonio Rando
      </Link>
      <nav className={styles.nav} aria-label={dictionary.nav.mainAriaLabel}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={withLocale(locale, item.href)}
            className={clsx(
              styles.navLink,
              currentPath === item.href && styles.navLinkActive
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
