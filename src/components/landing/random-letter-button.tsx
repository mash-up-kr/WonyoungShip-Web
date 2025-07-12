"use client"

import Link from "next/link"
import { useState } from "react"

import FortuneCookie from "@/assets/svg/fortune-cookie.svg"
import { LETTER_TYPE } from "@/constants/letter"
import { ROUTES } from "@/constants/routes"

import { Button, Tooltip } from "../common"

export const RandomLetterButton = () => {
  const [openTooltip, setOpenTooltip] = useState(true)

  return (
    <div className="absolute right-0 bottom-6 left-0 flex justify-center px-4">
      <Tooltip
        open={openTooltip}
        label="포춘쿠키를 랜덤으로 보내보세요!"
        wrapperClassName="flex-1 flex justify-center"
        onClose={() => setOpenTooltip(false)}
      >
        <Link href={`${ROUTES.PAGE.LETTER_FORM}?type=${LETTER_TYPE.RANDOM}`} className="w-full">
          <Button
            variant="blue"
            className="flex h-12 items-center justify-center gap-2.5 py-4"
          >
            <FortuneCookie className="animate-cookie-shake h-8 w-8" />
            <span>랜덤하게 마음 전하기</span>
          </Button>
        </Link>
      </Tooltip>
    </div>
  )
}
