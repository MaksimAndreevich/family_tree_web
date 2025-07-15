import { NextRequest, NextResponse } from "next/server";

import { WEB_ROUTES } from "./lib/routes";
import { getAccessToken } from "./lib/services/auth/token-processes";

export function middleware(request: NextRequest) {
  const token = getAccessToken();
  const { pathname } = request.nextUrl;

  // Если пользователь НЕ авторизован
  if (!token) {
    // Если пытается зайти на защищенные роуты
    if (pathname.startsWith(WEB_ROUTES.tree)) {
      const loginUrl = new URL("/auth/login", request.url);
      // Сохраняем URL для редиректа после логина
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    // Если на странице логина - разрешаем
    return NextResponse.next();
  }

  // Если пользователь авторизован
  if (token) {
    // Если на странице логина - редиректим на главную
    if (pathname === WEB_ROUTES.login || pathname === WEB_ROUTES.register) {
      return NextResponse.redirect(new URL("/tree", request.url));
    }
    // Для всех остальных роутов - разрешаем
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tree/:path*", "/auth/login", "/auth/register"],
};
