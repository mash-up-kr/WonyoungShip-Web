"use client"

import { useState } from "react"

import FortuneCookie from "@/assets/svg/fortune-cookie.svg"

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
        <Button
          variant="blue"
          className="flex h-12 items-center justify-center gap-2.5 py-4"
        >
          <FortuneCookie className="animate-cookie-shake" />
          <span>랜덤하게 마음 전하기</span>
        </Button>
      </Tooltip>
    </div>
  )
}
