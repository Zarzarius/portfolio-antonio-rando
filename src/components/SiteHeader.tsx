"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./layout.module.scss";

const navItems = [
  { label: "Writing", href: "/writing" },
  { label: "Teaching", href: "/teaching" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Antonio Rando
      </Link>
      <nav className={styles.nav} aria-label="Main">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(styles.navLink, pathname === item.href && styles.navLinkActive)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
