import { NextRequest, NextResponse } from "next/server";
import { baseUrl } from "./utils/helpers";

export async function middleware(req: NextRequest) {
if (req.nextUrl.pathname === "/") {
return;
}
const slug = req.nextUrl.pathname.split("/").pop();
const res = await fetch(`${baseUrl()}/api/get-url/${slug}`);
const data = await res.json();
if (data?.url) {
return NextResponse.redirect(data.url);
}
}
export const config = {
matcher: [
// Except for the ones starting with (use negative lookhead regex):
"/((?!api|_next/static|favicon.ico).*)",
],
};
