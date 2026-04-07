import type { Metadata } from 'next';
import { locales, withLocale, type Locale } from '@/i18n/config';

type BuildMetadataArgs = {
  locale: Locale;
  title: string;
  description: string;
  pathname: string;
};

function resolveSiteOrigin(): string {
  const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envSiteUrl) {
    return envSiteUrl.replace(/\/$/, '');
  }

  const vercelProdUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProdUrl) {
    return `https://${vercelProdUrl}`;
  }

  return 'http://localhost:3000';
}

export function buildLocaleMetadata({
  locale,
  title,
  description,
  pathname,
}: BuildMetadataArgs): Metadata {
  const siteOrigin = resolveSiteOrigin();
  const languages = Object.fromEntries(
    locales.map((entry) => [entry, `${siteOrigin}${withLocale(entry, pathname)}`])
  );

  return {
    title,
    description,
    metadataBase: new URL(siteOrigin),
    alternates: {
      canonical: `${siteOrigin}${withLocale(locale, pathname)}`,
      languages,
    },
  };
}
