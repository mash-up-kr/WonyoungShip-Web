import { NextRequest, NextResponse } from "next/server"

import { ACCESS_TOKEN_KEY } from "../route"

export async function GET(req: NextRequest) {
  const tokenCookie = req.cookies.get(ACCESS_TOKEN_KEY)

  return NextResponse.json({ token: tokenCookie?.value ?? "" }, { status: 200 })
}
