'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { locales, withLocale, withoutLocale, type Locale } from '@/i18n/config';
import type { SiteDictionary } from '@/i18n/dictionaries';
import styles from './layout.module.scss';

type SiteHeaderProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const currentPath = withoutLocale(pathname || '/');
  const menuId = 'site-navigation-menu';
  const navItems = [
    { label: dictionary.nav.journalism, href: '/journalism' },
    { label: dictionary.nav.research, href: '/research' },
    { label: dictionary.nav.multimedia, href: '/multimedia' },
    { label: dictionary.nav.about, href: '/about' },
    { label: dictionary.nav.contact, href: '/contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setIsMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) return;
    menuToggleRef.current?.focus();
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <Link href={withLocale(locale, '/')} className={styles.logo}>
        Antonio Rando
      </Link>
      <button
        type="button"
        ref={menuToggleRef}
        className={clsx(
          styles.menuToggle,
          isMenuOpen && styles.menuToggleActive,
        )}
        aria-label={
          isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
        }
        aria-expanded={isMenuOpen}
        aria-controls={menuId}
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
      >
        <span
          className={clsx(
            styles.menuToggleIcon,
            isMenuOpen && styles.menuToggleIconActive,
          )}
          aria-hidden
        />
      </button>
      <nav
        id={menuId}
        className={clsx(styles.nav, isMenuOpen && styles.navOpen)}
        aria-label={dictionary.nav.mainAriaLabel}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={withLocale(locale, item.href)}
            className={clsx(
              styles.navLink,
              currentPath === item.href && styles.navLinkActive,
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className={styles.localeSwitcher} aria-label="Language switcher">
          {locales.map((targetLocale) => {
            const isActive = targetLocale === locale;

            return (
              <Link
                key={targetLocale}
                href={withLocale(targetLocale, currentPath)}
                className={clsx(
                  styles.localeOption,
                  isActive && styles.localeOptionActive,
                )}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Switch language to ${targetLocale.toUpperCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {targetLocale.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </nav>
      <button
        type="button"
        className={clsx(
          styles.menuOverlay,
          isMenuOpen && styles.menuOverlayVisible,
        )}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
