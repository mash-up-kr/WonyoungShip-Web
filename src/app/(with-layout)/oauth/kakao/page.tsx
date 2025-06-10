"use client"

import { useSearchParams } from "next/navigation"

const KakaoOauthPage = () => {
  // TODO: 카카오 로그인 API 연동 및 로딩 화면 처리
  const searchParams = useSearchParams()

  const code = searchParams.get("code")

  console.log("Kakao OAuth code:", code)

  return <>{code}</>
}

export default KakaoOauthPage
