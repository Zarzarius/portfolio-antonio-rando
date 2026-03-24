import type { NextRequest } from 'next/server';
import { proxy as sourceProxy } from './src/proxy';

export function proxy(request: NextRequest) {
  return sourceProxy(request);
}

// Next.js requires route/proxy config to be statically analyzable in-file.
export const config = {
  matcher: ['/((?!_next|api|studio|.*\\..*).*)'],
};
