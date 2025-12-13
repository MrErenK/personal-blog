import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const actionId =
    request.headers.get("next-action") || request.headers.get("rsc-action-id");

  if (actionId) {
    // 1. ORIGIN/REFERER VALIDATION
    // Verify the request comes from your own domain, not external sources
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");
    const host = request.headers.get("host");

    // Get allowed origins from environment or use current host
    const allowedOrigins = process.env.NEXT_PUBLIC_APP_URL
      ? [process.env.NEXT_PUBLIC_APP_URL, `https://${host}`, `http://${host}`]
      : [`https://${host}`, `http://${host}`, `http://localhost:3000`];

    const isValidOrigin =
      origin && allowedOrigins.some((allowed) => origin.startsWith(allowed));
    const isValidReferer =
      referer && allowedOrigins.some((allowed) => referer.startsWith(allowed));

    // Server Actions should always have origin or referer from same domain
    if (!isValidOrigin && !isValidReferer) {
      console.warn(
        `[BLOCKED] Invalid origin/referer for action: origin=${origin}, referer=${referer}`,
      );
      return new NextResponse(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
      });
    }

    // 2. BLOCK: The "React2Shell" Scanner uses "x" or short strings.
    // Real Next.js action IDs are long hashes (usually 40 characters).
    // Blocking anything under 10 chars is extremely safe and kills this scanner.
    if (actionId.length < 15) {
      console.warn(`[BLOCKED] Action ID too short (Scanner): ${actionId}`);
      return new NextResponse(JSON.stringify({ error: "Invalid Action ID" }), {
        status: 403,
      });
    }

    // 3. BLOCK: Check for malicious symbols in the header
    const dangerousPattern = /[\$\(\)\{\};`]/;
    if (dangerousPattern.test(actionId)) {
      console.warn(`[BLOCKED] Suspicious characters in Header: ${actionId}`);
      return new NextResponse(JSON.stringify({ error: "Invalid Request" }), {
        status: 403,
      });
    }

    // 4. CONTENT-TYPE VALIDATION
    // Server Actions should use specific content types
    const contentType = request.headers.get("content-type");
    if (
      contentType &&
      !contentType.includes("multipart/form-data") &&
      !contentType.includes("text/plain") &&
      !contentType.includes("application/x-www-form-urlencoded")
    ) {
      console.warn(`[BLOCKED] Invalid content-type for action: ${contentType}`);
      return new NextResponse(
        JSON.stringify({ error: "Invalid Content-Type" }),
        {
          status: 403,
        },
      );
    }

    // 5. METHOD VALIDATION
    // Server Actions only use POST
    if (request.method !== "POST") {
      console.warn(`[BLOCKED] Invalid method for action: ${request.method}`);
      return new NextResponse(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
