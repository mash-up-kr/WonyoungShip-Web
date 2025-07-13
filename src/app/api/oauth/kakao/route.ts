import { NextRequest, NextResponse } from "next/server"

import { apiApi } from "@/__generated__/Api/Api.api"
import { ACCESS_TOKEN_KEY } from "@/constants/cookies"

const THREE_DAYS = 60 * 60 * 24 * 3 // 3일

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get("code")
  const tag = searchParams.get("state")

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

  const hasTag = !!tag
  const redirectUrl = hasTag ? `/api/tag/${tag}` : "/home"
  const res = NextResponse.redirect(new URL(redirectUrl, req.url))

  res.cookies.set({
    name: ACCESS_TOKEN_KEY,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: THREE_DAYS, // 유효 기간 3일
    path: "/", // root-level
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  })

  return res
}
