import { NextRequest, NextResponse } from "next/server"

import { tagApi } from "@/__generated__/Tag/Tag.api"

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ tag: string }> },
) {
  const { tag } = await params

  try {
    await tagApi.registerTag({
      tag: tag,
    })

    return NextResponse.redirect(new URL("/tag/success", req.url))
  } catch (error) {
    console.error("Failed to register tag:", error)
    return NextResponse.redirect(new URL("/home?error=tag", req.url))
  }
}
