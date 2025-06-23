"use client"

import { IconButton } from "@/components/common"
import { useSnackbar } from "@/contexts/snackbar"

export const CopyAddressButton = () => {
  const { showSnackbar } = useSnackbar()

  const handleClickCopy = async () => {
    try {
      // TODO : 추후 복사할 url 결정되면 수정
      const tempAddress = "https://doong-doong/~"

      await navigator.clipboard.writeText(tempAddress)

      showSnackbar({
        message: "주소가 복사되었습니다!",
        icon: "link",
      })

    // TODO : 복사 실패 시... 굳이인가 싶기도 해서 얘기 나눠보고 수정하기
    } catch (error) {
      console.error("복사 실패:", error)
      showSnackbar({
        message: "복사에 실패했습니다. 다시 시도해주세요.",
        icon: "link",
      })
    }
  }

  return (
    <IconButton icon="link" onClick={handleClickCopy}>
      주소 복사
    </IconButton>
  )
}
