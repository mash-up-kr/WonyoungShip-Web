import { NextRequest, NextResponse } from "next/server"

import { apiApi } from "@/__generated__/Api/Api.api"

export const ACCESS_TOKEN_KEY = "access_token"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get("code")
  if (!code) {
    return NextResponse.redirect(new URL("/landing", req.url))
  }

  const {
    data: { data },
  } = await apiApi.kakaoLogin({
    data: { token: code, url: req.url.split("?")[0] ?? "" },
  })

  const token = data?.accessToken

  if (!token) {
    return NextResponse.redirect(new URL("/landing?error=login", req.url))
  }

  const res = NextResponse.redirect(new URL("/home", req.url))

  res.cookies.set({
    name: ACCESS_TOKEN_KEY,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 3, // 유효 기간 3일
    path: "/", // root-level
    sameSite: "lax",
  })
  return res
}
