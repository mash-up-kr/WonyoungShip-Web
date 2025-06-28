import { ShowSnackbarParams } from "@/contexts/snackbar"

type IconType = NonNullable<ShowSnackbarParams['icon']>

interface CopyToClipboardOptions {
  message?: string
  icon?: IconType
  onSuccess?: () => void
  onError?: () => void
}

/** 
* @param text 복사할 텍스트
* @param showSnackbar useSnackbar().showSnackbar
* @param options 메시지, 아이콘, 콜백 등 선택사항
 */

export const copyToClipboard = async (
  text: string,
  showSnackbar: (params: ShowSnackbarParams) => void,
  options?: CopyToClipboardOptions
) => {
  try {
    await navigator.clipboard.writeText(text)
    showSnackbar({
      message: options?.message ?? "주소가 복사되었습니다!",
      icon: options?.icon ?? "link",
    })
    options?.onSuccess?.()
  } catch (error) {
    console.error("복사 실패:", error)
    showSnackbar({
      message: "문제가 있어 복사에 실패했어요. 다시 시도해주세요.",
      icon: options?.icon ?? "link",
    })
    options?.onError?.()
  }
}
