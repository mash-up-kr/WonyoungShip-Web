"use client"

import { useState } from "react"

import { IconButton, Tooltip } from "@/components/common"
import { LETTER_TYPE } from "@/constants/letter"
import { ROUTES } from "@/constants/routes"
import { useSnackbar } from "@/contexts/snackbar"
import { copyToClipboard } from "@/utils/copy-to-clipboard"

interface CopyAddressButtonProps {
  receiverId: number
}

export const CopyAddressButton = ({ receiverId }: CopyAddressButtonProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true)

  const { showSnackbar } = useSnackbar()

  const handleClickCopy = async () => {
    const siteUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_PRODUCTION_URL
    const tempAddress = `${siteUrl}${ROUTES.PAGE.LETTER_FORM}?receiverId=${receiverId}&type=${LETTER_TYPE.TARGET}`

    copyToClipboard(tempAddress, showSnackbar)
  }

  const handleTooltipClose = () => {
    setIsTooltipOpen(false)
  }

  return (
    <div>
      <Tooltip
        open={isTooltipOpen}
        label="주소를 공유해 편지를 받아보세요!"
        onClose={handleTooltipClose}
        arrowPosition="right"
      />
      <IconButton icon="link" onClick={handleClickCopy}>
        주소 복사
      </IconButton>
    </div>
  )
}
