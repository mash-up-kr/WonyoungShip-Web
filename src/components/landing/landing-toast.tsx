"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { ToastError } from "@/constants/toast-error"
import { useSnackbar } from "@/contexts/snackbar"

export const LandingToast = () => {
  const searchParams = useSearchParams()
  const { showSnackbar } = useSnackbar()

  const error = searchParams.get("error") as ToastError

  useEffect(() => {
    if (error === "login") {
      showSnackbar({
        message: "로그인에 실패했어요.",
      })
    }

    if (error === "unauthorized") {
      showSnackbar({
        message: "인증이 필요해요. 다시 로그인해주세요.",
      })
    }

    if (error === "not-found") {
      showSnackbar({
        message: "잘못된 페이지예요.",
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return null
}
