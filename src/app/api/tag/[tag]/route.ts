import { NextRequest, NextResponse } from "next/server"

import { apiApi } from "@/__generated__/Api/Api.api"

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ tag: string }> },
) {
  const { tag } = await params

  try {
    await apiApi.registerTag({
      tag,
    })

    return NextResponse.redirect(new URL("/tag/success", req.url))
  } catch (error) {
    console.error("Failed to register tag:", error)
    return NextResponse.redirect(new URL("/home?error=tag", req.url))
  }
}
