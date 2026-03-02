export const locales = ['de', 'en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}

export function withoutLocale(pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const [, maybeLocale, ...rest] = normalized.split('/');

  if (!maybeLocale || !isLocale(maybeLocale)) {
    return normalized;
  }

  if (rest.length === 0) {
    return '/';
  }

  return `/${rest.join('/')}`;
}
