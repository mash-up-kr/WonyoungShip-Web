"use client"

import KakaoLogo from "@/assets/svg/kakao-logo.svg"

import { Text } from "../common"

const KAKAO_REDIRECT_URI = "/oauth/kakao"

export const KakaoLoginButton = () => {
  const handleKakaoLogin = () => {
    if (typeof window === "undefined" || !window.Kakao.isInitialized()) {
      return
    }

    window.Kakao.Auth.authorize({
      redirectUri: KAKAO_REDIRECT_URI,
    })
  }

  return (
    <div className="flex justify-center">
      <button
        className="flex cursor-pointer items-center justify-center gap-2"
        onClick={handleKakaoLogin}
      >
        <KakaoLogo />
        <Text variant="body" size="small">
          간편 로그인하기
        </Text>
      </button>
    </div>
  )
}
