import { NextRequest, NextResponse } from "next/server"

import { tagApi } from "@/__generated__/Tag/Tag.api"

export async function GET(
  req: NextRequest,
  { params }: { params: { tag: string } },
) {
  const { tag } = params

  try {
    await tagApi.registerTag({
      tag: tag,
      //TODO: 지워야 됨
      data: { memberId: 0 },
    })

    return NextResponse.redirect(new URL("/tag/success", req.url))
  } catch (error) {
    console.error("Failed to register tag:", error)
    return NextResponse.redirect(new URL("/home?error=tag", req.url))
  }
}
