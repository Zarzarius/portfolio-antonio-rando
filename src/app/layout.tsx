import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ViewTransitions } from 'next-view-transitions';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { defaultLocale, isLocale } from '@/i18n/config';
import '../theme/tokens.scss';
import './globals.css';

const fontDisplay = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600'],
});

const fontBody = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Antonio Rando — Portfolio',
  description: 'Portfolio of Antonio Rando: design and development.',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Antonio Rando ',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('site-locale')?.value;
  const htmlLang =
    localeFromCookie && isLocale(localeFromCookie)
      ? localeFromCookie
      : defaultLocale;

  return (
    <ViewTransitions>
      <html lang={htmlLang}>
        <body className={`${fontDisplay.variable} ${fontBody.variable}`}>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
