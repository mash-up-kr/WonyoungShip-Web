"use client"

import { useState } from "react"

import { IconButton, Tooltip } from "@/components/common"
import { useSnackbar } from "@/contexts/snackbar"
import { copyToClipboard } from "@/utils/copy-to-clipboard"

export const CopyAddressButton = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true)

  const { showSnackbar } = useSnackbar()

  const handleClickCopy = async () => {
      // TODO : 추후 복사할 url 결정되면 수정
      const tempAddress = "https://doong-doong/~"

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
