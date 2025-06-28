"use client"

import { Text } from "@/components/common"

import { useCurrentMonth } from "../hooks/use-current-month"

export const CurrentDate = () => {
  const { year, month } = useCurrentMonth()

  return (
    <h2 className="flex items-center justify-center gap-1.5 px-4 py-1.5">
      <Text variant="body" size="large" className="font-semi-bold">
        {month}월
      </Text>
      <Text
        variant="body"
        size="small"
        color="secondary"
        className="font-normal"
      >
        {year}
      </Text>
    </h2>
  )
}
