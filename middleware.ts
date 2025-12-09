import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
