"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { ToastError } from "@/constants/toast-error"
import { useSnackbar } from "@/contexts/snackbar"

export const HomeToast = () => {
     const searchParams = useSearchParams()
  const { showSnackbar } = useSnackbar()

  const error = searchParams.get("error") as ToastError

  useEffect(() => {
    if (error === "letter-detail-error") {
      showSnackbar({
        message: "편지를 조회하는데 문제가 발생했어요. 다시 시도해 주세요.",
      })
    }

    if (error === "unauthorized") {
      showSnackbar({
        message: "인증이 필요해요. 다시 로그인해주세요.",
      })
    }
  }, [error])

  return null
}