import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log(req.nextUrl.pathname);
  // if (req.nextUrl.pathname.startsWith("/api/get-url/")) {
  //   return;
  // }
  const slug = req.nextUrl.pathname.split("/").pop();

  const data = await (
    await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)
  ).json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
}

export const config = {
  matcher: [
    //  Match all request paths except for the ones starting with:
    //  - static (static files)
    //  - favicon.ico (favicon file)
    "/((?!static|favicon.ico).*)",
  ],
};
