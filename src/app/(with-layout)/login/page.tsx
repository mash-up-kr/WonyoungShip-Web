"use client"

import { Button } from "@/components/common"

// TODO: 카카오 로그인 테스트용 페이지. 삭제 예정
const LoginPage = () => {
  const handleKakaoLogin = () => {
    if (typeof window === "undefined" || !window.Kakao.isInitialized()) {
      return
    }

    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/oauth/kakao`,
    })
  }

  return (
    <Button variant="primary" onClick={handleKakaoLogin}>
      카카오 로그인
    </Button>
  )
}

export default LoginPage
