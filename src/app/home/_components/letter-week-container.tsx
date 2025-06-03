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
  const countMap: Record<string, number> = {}

  letterList.forEach(({ scheduleDate }) => {
    countMap[scheduleDate] = (countMap[scheduleDate] || 0) + 1
  })

  const countsByDay = weekDates.map((date) => {
    const key = formatDate(date)
    return countMap[key] || 0
  })

  return (
    <section className="bg-alpha-60 flex h-[93px] w-[327px] gap-2 rounded-2xl p-3">
      <div>
        <span></span>
      </div>
      {weekDates.map((date, idx) => {
        return (
          <div key={idx} className="flex flex-col">
            <span>{dayLabels[idx]}</span>
            <div>{countsByDay[idx]}</div>
          </div>
        )
      })}
    </section>
  )
}
