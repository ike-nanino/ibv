import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect to homepage
  }

  return NextResponse.next();
}

// Protect only the `/profile` route
export const config = {
  matcher: "/profile",
};
