import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import validURLParser from "./utils/validURLParser";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathArray = request.nextUrl.pathname.split("/").slice(2);
  const isValidURL = validURLParser(
    pathArray,
    /^chapter[0-9]$/,
    /^chapter[0-9]$/
  );

  if (!isValidURL) {
    const url = request.nextUrl;
    url.pathname = `/404`;
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/curriculum/js/:path*", "/curriculum/data-structure/:path*"],
};
