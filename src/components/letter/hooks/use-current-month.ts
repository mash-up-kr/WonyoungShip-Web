"use client"

import { useSearchParams } from "next/navigation"

export const useCurrentMonth = () => {
  const searchParams = useSearchParams()

  const currentDate = new Date(searchParams.get("month") ?? new Date())

  const isValidDate = !isNaN(currentDate.getTime())

  const currentYear = isValidDate
    ? currentDate.getFullYear()
    : new Date().getFullYear()
  const currentMonth = isValidDate
    ? currentDate.getMonth() + 1
    : new Date().getMonth() + 1

  return {
    year: currentYear,
    month: currentMonth,
  }
}
