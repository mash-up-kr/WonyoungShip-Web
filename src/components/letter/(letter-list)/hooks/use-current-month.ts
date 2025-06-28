"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const MONTH_PARAM_KEY = "month"

export const useCurrentMonth = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams()

  const currentDate = new Date(searchParams.get(MONTH_PARAM_KEY) ?? new Date())

  const isValidDate = !isNaN(currentDate.getTime())

  const currentYear = isValidDate
    ? currentDate.getFullYear()
    : new Date().getFullYear()
  const currentMonth = isValidDate
    ? currentDate.getMonth() + 1
    : new Date().getMonth() + 1

  const handlePrevMonth = () => {
    const current = new Date(`${currentYear}-${currentMonth}-01`)
    current.setMonth(current.getMonth() - 1)

    params.set(
      MONTH_PARAM_KEY,
      `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, "0")}`,
    )

    router.push(`${pathname}?${params.toString()}`)
  }

  const handleNextMonth = () => {
    const current = new Date(`${currentYear}-${currentMonth}-01`)
    current.setMonth(current.getMonth() + 1)

    params.set(
      MONTH_PARAM_KEY,
      `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, "0")}`,
    )

    router.push(`${pathname}?${params.toString()}`)
  }

  return {
    year: currentYear,
    month: currentMonth,
    handleNextMonth,
    handlePrevMonth,
  }
}
