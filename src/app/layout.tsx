import { ViewTransitions } from 'next-view-transitions';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { defaultLocale } from '@/i18n/config';
import '../theme/tokens.scss';
import './globals.css';

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

export const metadata = {
  title: 'Antonio F. Rando Casermeiro — Portfolio',
  description:
    'Portfolio of Antonio F. Rando Casermeiro: design and development.',
  metadataBase: new URL(resolveSiteOrigin()),
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Antonio F. Rando Casermeiro Portfolio',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const htmlLang = defaultLocale;

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
