import { locales } from '@/i18n/config';
import { readLocale } from '@/i18n/params';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  await readLocale(params);
  return children;
}
