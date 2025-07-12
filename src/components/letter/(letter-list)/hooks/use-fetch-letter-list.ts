"use client"

import { useEffect, useState } from "react"

import {
  LetterPreviewResponseType,
  LettersMonthlyResponseType,
} from "@/__generated__/@types"
import { apiApi } from "@/__generated__/Api/Api.api"
import { useSnackbar } from "@/contexts/snackbar"

import { useCurrentMonth } from "./use-current-month"

export const useFetchLetterList = () => {
  const [letterList, setLetterList] = useState<LetterPreviewResponseType[]>([])
  const [receivedDates, setReceivedDates] = useState<
    LettersMonthlyResponseType["days"]
  >([])

  const { year, month } = useCurrentMonth()
  const { showSnackbar } = useSnackbar()

  useEffect(() => {
    const fetchLetterList = async () => {
      try {
        const { data } = await apiApi.readLetters({
          query: {
            year,
            month,
          },
        })

        const letters = data.data?.letters ?? []
        const days = data.data?.days ?? []

        setLetterList(letters)
        setReceivedDates(days)
      } catch (error) {
        showSnackbar({
          message: "편지 목록을 가지고 오지 못했어요" + error,
        })
      }
    }

    fetchLetterList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month])

  return { letterList, receivedDates }
}
