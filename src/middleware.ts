import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    return;
  }

  const slug = req.nextUrl.pathname.split("/").pop();
  const originalUrl = process.env.VERCEL_URL || req.nextUrl.origin;
  const res = await fetch(`${originalUrl}/api/get-url/${slug}`);
  const data = await res.json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
}

export const config = {
  matcher: [
    // Except for the ones starting with (use negative lookhead regex):
    "/((?!static|favicon.ico|_next).*)",
  ],
};
