import { NextResponse, type NextRequest } from "next/server";

// MATCHER

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };

// CONDITIONAL ROUTE

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/", request.nextUrl));
//   }
// }

// URL REWRITE

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.rewrite(new URL("/hello", request.nextUrl));
//   }
// }

// COOKIES AND HEADERS

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.nextUrl));
  }

  const themePrefence = request.cookies.get("theme");
  const response = NextResponse.next();

  if (!themePrefence) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");

  return response;
}
