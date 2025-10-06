import { NextRequest, NextResponse } from 'next/server';

const publicPaths = [
  '/login',
  '/signup',
];
const apiPaths = [
  // '/api/auth/logout',
  '/api/auth/google',
  '/api/auth/facebook',
];


export function middleware(request: NextRequest) {
  // return NextResponse.next();
  const path = request.nextUrl.pathname;
  const isPublicPath = publicPaths.includes(path);
  const isApiPath = apiPaths.some(apiPath => path.startsWith(apiPath));
  
  const token = request.cookies.get('admin_token')?.value || '';
  
  // Skip middleware for API paths
  if (isApiPath) {
    return NextResponse.next();
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
