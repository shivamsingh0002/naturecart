import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) =>
      token?.role === "ADMIN",
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !token
  ) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}