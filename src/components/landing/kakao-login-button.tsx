"use client"

import KakaoLogo from "@/assets/svg/kakao-logo.svg"

import { Text } from "../common"

export const KakaoLoginButton = () => {
  const handleKakaoLogin = () => {
    if (typeof window === "undefined" || !window.Kakao.isInitialized()) {
      return
    }

    const redirectUri = `${window.location.origin}/api/oauth/kakao`

    window.Kakao.Auth.authorize({
      redirectUri,
    })
  }

  return (
    <div className="flex justify-center">
      <button
        className="flex cursor-pointer items-center justify-center gap-2"
        onClick={handleKakaoLogin}
      >
        <KakaoLogo />
        <Text variant="body" size="small" className="font-medium">
          간편 로그인하기
        </Text>
      </button>
    </div>
  )
}
