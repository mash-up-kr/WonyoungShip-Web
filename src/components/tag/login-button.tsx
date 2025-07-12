"use client"

import { useParams } from "next/navigation"

import { Button } from "../common"

export const LoginButton = () => {
  const tagId = useParams().id as string

  const handleLogin = () => {
    if (typeof window === "undefined" || !window.Kakao.isInitialized()) {
      return
    }

    const redirectUri = `${window.location.origin}/api/oauth/kakao?tag=${tagId}`

    window.Kakao.Auth.authorize({
      redirectUri,
    })
  }

  return (
    <Button variant="blue" className="w-[167.5px]" onClick={handleLogin}>
      로그인해서 등록하기
    </Button>
  )
}
