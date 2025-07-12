import { NextResponse } from "next/server"

import { ACCESS_TOKEN_KEY } from "@/constants/cookies"

export async function POST() {
  const response = NextResponse.json(
    { message: "로그아웃 되었습니다." },
    { status: 200 },
  )

  response.cookies.set(ACCESS_TOKEN_KEY, "", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
  })

  return response
}
