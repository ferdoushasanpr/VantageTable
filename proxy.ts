// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("admin_session")?.value;

  const isLoginRoute = request.nextUrl.pathname === "/login";
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
  const isAddMenuRoute = request.nextUrl.pathname === "/addmenu";
  const isMenuListRoute = request.nextUrl.pathname === "/menulist";
  const isReservationsRoute = request.nextUrl.pathname === "/reservations";
  const isSettingsRoute = request.nextUrl.pathname === "/settings";

  if (
    (isDashboardRoute ||
      isAddMenuRoute ||
      isMenuListRoute ||
      isReservationsRoute ||
      isSettingsRoute) &&
    !session
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoginRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/addmenu",
    "/menulist",
    "/reservations",
    "/settings",
    "/login",
  ],
};
