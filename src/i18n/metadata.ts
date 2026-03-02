import type { Metadata } from 'next';
import { locales, withLocale, type Locale } from '@/i18n/config';

type BuildMetadataArgs = {
  locale: Locale;
  title: string;
  description: string;
  pathname: string;
};

export function buildLocaleMetadata({
  locale,
  title,
  description,
  pathname,
}: BuildMetadataArgs): Metadata {
  const languages = Object.fromEntries(
    locales.map((entry) => [entry, withLocale(entry, pathname)])
  );

  return {
    title,
    description,
    alternates: {
      canonical: withLocale(locale, pathname),
      languages,
    },
  };
}
