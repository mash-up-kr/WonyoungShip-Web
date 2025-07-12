"use client"

import { useParams } from "next/navigation"

import { ROUTES } from "@/constants/routes"

import { Button } from "../common"

export const LoginButton = () => {
  const tagId = useParams().id as string

  const handleLogin = () => {
    if (typeof window === "undefined" || !window.Kakao.isInitialized()) {
      return
    }

    const redirectUri = `${window.location.origin}${ROUTES.API.REDIRECT_LOGIN}`

    window.Kakao.Auth.authorize({
      redirectUri,
      state: tagId,
    })
  }

  return (
    <Button variant="blue" className="w-[167.5px]" onClick={handleLogin}>
      로그인해서 등록하기
    </Button>
  )
}
