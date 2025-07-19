import Cookies from "js-cookie";

import { EnumTokens } from "@/lib/types/common.interfaces";
import { NextRequest } from "next/server";

export const getAccessToken = (request?: NextRequest) => {
  let accessToken;

  if (request) {
    accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
  } else {
    accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
  }

  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.APP_DOMAIN,
    sameSite: "strict",
    expires: 1,
  });
};

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
