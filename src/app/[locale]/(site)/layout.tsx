import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import styles from '@/components/layout.module.scss';
import { getDictionary } from '@/i18n/dictionaries';
import { readLocale } from '@/i18n/params';

export default async function SiteLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <div className={styles.wrapper}>
      <SiteHeader locale={locale} dictionary={dictionary} />
      {children}
      <SiteFooter locale={locale} dictionary={dictionary} />
    </div>
  );
}
