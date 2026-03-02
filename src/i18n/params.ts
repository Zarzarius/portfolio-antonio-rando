import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';

type LocaleParams = Promise<{ locale: string }>;

export async function readLocale(params: LocaleParams): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}
