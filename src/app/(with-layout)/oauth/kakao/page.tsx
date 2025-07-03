"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { apiApi } from "@/__generated__/Api/Api.api"
import { useSnackbar } from "@/contexts/snackbar"
import { accessTokenStorage } from "@/utils/storage"

const KakaoOauthPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { showSnackbar } = useSnackbar()

  useEffect(() => {
    const getAccessToken = async () => {
      const code = searchParams.get("code")

      if (!code) {
        showSnackbar({
          message: "잘못된 접근입니다.",
        })
        router.replace("/landing")
        return
      }

      const {
        data: { data },
      } = await apiApi.kakaoLogin({ data: { token: code } })

      const response = data as unknown as { token: string } | null

      if (!response || !response.token) {
        showSnackbar({
          message: "로그인 중 오류가 발생했어요",
        })
        router.replace("/landing")
        return
      }

      accessTokenStorage.set(response.token)
      showSnackbar({
        message: "둥둥에 찾아와주어 고마워요",
      })
      router.replace("/home")
    }

    getAccessToken()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, router])

  return null
}

export default KakaoOauthPage
