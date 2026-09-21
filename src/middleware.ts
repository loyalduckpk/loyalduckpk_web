import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // Detect business subdomain (e.g., business.loyalduck.pk or business.localhost:3000)
  const isBusinessSubdomain =
    host === 'business.loyalduck.pk' ||
    host.startsWith('business.loyalduck.pk:') ||
    host === 'business.localhost' ||
    host.startsWith('business.localhost:') ||
    host.startsWith('business.');

  if (isBusinessSubdomain) {
    const url = request.nextUrl.clone();

    // 1. Root path -> serve Flutter Business Portal entrypoint
    if (pathname === '/' || pathname === '') {
      url.pathname = '/portal/index.html';
      return NextResponse.rewrite(url);
    }

    // 2. Already starts with /portal
    if (pathname.startsWith('/portal')) {
      // If it's a deep client-side route like /portal/onboarding, rewrite to index.html
      const hasFileExtension = pathname.split('/').pop()?.includes('.');
      if (!hasFileExtension && pathname !== '/portal' && pathname !== '/portal/') {
        url.pathname = '/portal/index.html';
        return NextResponse.rewrite(url);
      }
      return NextResponse.next();
    }

    // 3. Static asset with file extension (e.g., /flutter_bootstrap.js, /main.dart.js, /assets/...)
    const hasFileExtension = pathname.split('/').pop()?.includes('.');
    if (hasFileExtension) {
      url.pathname = `/portal${pathname}`;
      return NextResponse.rewrite(url);
    }

    // 4. Client-side SPA routes (e.g. /login, /onboarding, /counter, /settings)
    url.pathname = '/portal/index.html';
    return NextResponse.rewrite(url);
  }

  // Detect customer subdomain (e.g., app.loyalduck.pk or app.localhost:3000)
  const isCustomerSubdomain =
    host === 'app.loyalduck.pk' ||
    host.startsWith('app.loyalduck.pk:') ||
    host === 'customer.loyalduck.pk' ||
    host.startsWith('customer.loyalduck.pk:') ||
    host === 'app.localhost' ||
    host.startsWith('app.localhost:') ||
    host === 'customer.localhost' ||
    host.startsWith('customer.localhost:') ||
    host.startsWith('app.') ||
    host.startsWith('customer.');

  if (isCustomerSubdomain) {
    const url = request.nextUrl.clone();

    // 1. Root path -> serve Flutter Customer App entrypoint
    if (pathname === '/' || pathname === '') {
      url.pathname = '/app/index.html';
      return NextResponse.rewrite(url);
    }

    // 2. Already starts with /app
    if (pathname.startsWith('/app')) {
      const hasFileExtension = pathname.split('/').pop()?.includes('.');
      if (!hasFileExtension && pathname !== '/app' && pathname !== '/app/') {
        url.pathname = '/app/index.html';
        return NextResponse.rewrite(url);
      }
      return NextResponse.next();
    }

    // 3. Static asset with file extension (e.g., /flutter_bootstrap.js, /main.dart.js, /assets/...)
    const hasFileExtension = pathname.split('/').pop()?.includes('.');
    if (hasFileExtension) {
      url.pathname = `/app${pathname}`;
      return NextResponse.rewrite(url);
    }

    // 4. Client-side SPA routes (e.g. /auth, /delete-account, /m/...)
    url.pathname = '/app/index.html';
    return NextResponse.rewrite(url);
  }

  // Fallback for main domain: let normal routes & Next.js config handle it
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    '/((?!_next/static|_next/image).*)',
  ],
};
