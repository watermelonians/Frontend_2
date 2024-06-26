import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("token");

  if (cookie) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}
export const config = {
  matcher: ["/DiscussionSpace", "/FeedbackBoard", "/profile", "/PublicSpace", "/Analytics, /Overview"]
}

