import { Text } from "@/components/common"
import { LetterCountBox } from "@/components/common"
import { formatDate, currentWeekDates } from "@/utils/date"

// TODO : API 연결할 때 letter-countdown 확인해서 공통으로 옮기기
interface Letter {
  id: number
  scheduleDate: string
}

interface LetterCountdownProps {
  letterList: Letter[]
}

const DAY_KO_LABELS = ["월", "화", "수", "목", "금", "토", "일"]

export const LetterWeekContainer = ({ letterList }: LetterCountdownProps) => {
  const today = new Date()

  const countMap: Record<string, number> = {}

  letterList.forEach(({ scheduleDate }) => {
    countMap[scheduleDate] = (countMap[scheduleDate] || 0) + 1
  })

  const currentWeekDate = currentWeekDates

  const countsByDay = currentWeekDate.map((date) => {
    const key = formatDate(date)
    return countMap[key] || 0
  })

  return (
    <ul className="bg-alpha-60 flex h-[93px] w-full justify-between gap-2 rounded-2xl p-3">
      {currentWeekDate.map((date, idx) => {
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
            <LetterCountBox letterCount={countsByDay[idx]} isToday={isToday} />
          </li>
        )
      })}
    </ul>
  )
}
