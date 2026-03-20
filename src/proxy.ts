import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isLocale } from '@/i18n/config';

const PUBLIC_FILE = /\.[^/]+$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/studio') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (!firstSegment) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    const response = NextResponse.redirect(url);
    response.cookies.set('site-locale', defaultLocale);
    return response;
  }

  if (isLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-site-locale', firstSegment);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set('site-locale', defaultLocale);
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|studio|.*\\..*).*)'],
};
