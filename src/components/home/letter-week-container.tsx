import { Text } from "@/components/common"
import { formatDate } from "@/utils/date"

import { LetterCountBox } from "./letter-count-box"

interface LetterWeekContainerProps {
  letterList: number[]
}

const DAY_KO_LABELS = ["월", "화", "수", "목", "금", "토", "일"]

export const LetterWeekContainer = ({ letterList }: LetterWeekContainerProps) => {
  const today = new Date()
  const currentWeekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(today.getDate() - today.getDay() + 1 + i) // 월요일부터 시작
    return date
  })

  return (
    <ul className="bg-white bg-opacity-60 flex h-[93px] w-full justify-between gap-2 rounded-2xl p-3">
      {currentWeekDates.map((date, idx) => {
        const isToday = formatDate(date) === formatDate(today)

        return (
          <li
            key={formatDate(date)}
            className="flex w-full flex-col items-center gap-1"
          >
            <Text
              variant="body"
              font="Ownglyph ryurue"
              color={isToday ? "blue-100" : "primary"}
              className="leading-[1.125rem] font-normal"
            >
              {DAY_KO_LABELS[idx]}
            </Text>
            <LetterCountBox letterCount={letterList[idx]} isToday={isToday} />
          </li>
        )
      })}
    </ul>
  )
}