import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl;

  // Extract subdomain
  const subdomain = hostname.split(".")[0];

  // List of reserved subdomains that should not be treated as tenant subdomains
  const reservedSubdomains = ["www", "skulafrica", "app", "api", "admin", "localhost"];

  // Check if this is a tenant subdomain
  const isTenantSubdomain =
    subdomain &&
    !reservedSubdomains.includes(subdomain) &&
    !hostname.startsWith("localhost");

  if (isTenantSubdomain) {
    // Rewrite to tenant route
    // Example: modernschool.vax.com/about -> /tenant/modernschool/about
    return NextResponse.rewrite(
      new URL(`/tenant/${subdomain}${url.pathname}${url.search}`, request.url)
    );
  }

  // Continue with normal routing for main platform
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
