import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Handle ALL WordPress query parameters (old site URLs)
  // This catches ?page_id=*, ?p=*, ?cat=*, ?m=*, etc.
  const hasWordPressParams = url.searchParams.has('page_id') || 
                             url.searchParams.has('p') || 
                             url.searchParams.has('cat') || 
                             url.searchParams.has('m') ||
                             url.searchParams.has('author') ||
                             url.searchParams.has('year') ||
                             url.searchParams.has('monthnum') ||
                             url.searchParams.has('day') ||
                             url.searchParams.has('feed') ||
                             url.searchParams.has('paged');

  if (hasWordPressParams) {
    const pageId = url.searchParams.get('page_id');
    
    // Map known WordPress page IDs to clean URLs
    const pageIdMap: { [key: string]: string } = {
      '2': '/',           // Home page
      '5': '/about',      // About page
      '17': '/careers',   // Careers page
      '7': '/services',   // Services
      '9': '/gallery',    // Gallery
      '11': '/contact',   // Contact (if this was your contact page)
      '14': '/',          // Unknown page - redirect to home
    };

    if (pageId && pageIdMap[pageId]) {
      // Known page ID - redirect to mapped URL
      return NextResponse.redirect(new URL(pageIdMap[pageId], request.url), { status: 301 });
    } else {
      // Unknown WordPress param - redirect to home
      return NextResponse.redirect(new URL('/', request.url), { status: 301 });
    }
  }

  // Block common malicious paths
  const blockedPatterns = [
    /\.php$/i,              // PHP files
    /\/wp-admin/i,          // WordPress admin
    /\/wp-includes/i,       // WordPress includes
    /\/wp-content/i,        // WordPress content
    /\/cgi-bin/i,           // CGI bin
    /\/ntc\//i,             // Suspicious ntc path
    /\/phpmyadmin/i,        // phpMyAdmin
    /\/admin/i,             // Generic admin
    /\/xmlrpc\.php/i,       // WordPress XML-RPC
    /\/\.env/i,             // Environment files
    /\/\.git/i,             // Git directories
  ];

  // Check if the path matches any blocked pattern
  for (const pattern of blockedPatterns) {
    if (pattern.test(pathname)) {
      // Return a 404 response for blocked paths
      return new NextResponse(null, { status: 404 });
    }
  }

  // Continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff|woff2)$).*)',
  ],
};

