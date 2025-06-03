import { Text } from "@/components/common"
import { formatDate, weekDates } from "@/utils/date"

// TODO : API 연결할 때 letter-countdown 확인해서 공통으로 옮기기
interface Letter {
  id: number
  scheduleDate: string
}

interface LetterCountdownProps {
  letterList: Letter[]
}

const dayLabels = ["월", "화", "수", "목", "금", "토", "일"]

export const LetterWeekContainer = ({ letterList }: LetterCountdownProps) => {
  const today = new Date()

  const countMap: Record<string, number> = {}

  letterList.forEach(({ scheduleDate }) => {
    countMap[scheduleDate] = (countMap[scheduleDate] || 0) + 1
  })

  const countsByDay = weekDates.map((date) => {
    const key = formatDate(date)
    return countMap[key] || 0
  })

  return (
    <section className="bg-alpha-60 flex h-[93px] w-full justify-between rounded-2xl p-3">
      {weekDates.map((date, idx) => {
        const isToday = formatDate(date) === formatDate(today)
        return (
          <div
            key={idx}
            className="flex flex-col items-center gap-1"
          >
            <Text
              variant="body"
              font="Ownglyph ryurue"
              color={`${isToday ? "blue-100" : "primary"}`}
              className="font-normal leading-[1.125rem]"
            >
              {dayLabels[idx]}
            </Text>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${isToday ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {countsByDay[idx]}
            </div>
          </div>
        )
      })}
    </section>
  )
}
