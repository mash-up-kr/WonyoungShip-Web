import KakaoLogo from "@/assets/svg/kakao-logo.svg"

import { Text } from "../common"

export const KakaoLoginButton = () => {
  return (
    <div className="flex justify-center">
      <button className="flex cursor-pointer items-center justify-center gap-2">
        <KakaoLogo />
        <Text variant="body" size="small">
          간편 로그인하기
        </Text>
      </button>
    </div>
  )
}
