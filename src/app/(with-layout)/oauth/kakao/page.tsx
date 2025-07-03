"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { useSnackbar } from "@/contexts/snackbar"

export default function KakaoOauthPage() {
  const router = useRouter()
  const params = useSearchParams()
  const { showSnackbar } = useSnackbar()

  useEffect(() => {
    const code = params.get("code")
    if (!code) {
      showSnackbar({ message: "잘못된 접근입니다." })
      router.replace("/landing")
      return
    }
    // hit your server handler which will set the cookie + redirect to /home
    router.replace(`/api/auth/kakao?code=${code}`)
  }, [params, router, showSnackbar])

  return null
}
