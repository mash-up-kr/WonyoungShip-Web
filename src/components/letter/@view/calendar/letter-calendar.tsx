import { Text } from "@/components/common"
import { cn } from "@/utils/cn"

import { useCurrentMonth } from "../../hooks/use-current-month"

export const LetterCalendar = () => {
  const { month, year } = useCurrentMonth()

  const baseDate = new Date(`${year}-${month}`)

  baseDate.setHours(0, 0, 0, 0)

  const firstOfMonth = new Date(year, month - 1, 1)
  const lastOfMonth = new Date(year, month, 0)

  const daysInMonth = lastOfMonth.getDate()

  const startWeekday = (firstOfMonth.getDay() + 6) % 7

  const days: Date[] = []

  for (let i = startWeekday; i > 0; i--) {
    days.push(new Date(year, month, 1 - i))
  }

  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d))
  }

  while (days.length % 7 !== 0) {
    const d = days.length - startWeekday - daysInMonth + 1
    days.push(new Date(year, month + 1, d))
  }

  return (
    <div className="bg-background-white rounded-2xl px-4 py-6">
      <div className="mb-2 grid grid-cols-7">
        {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
          <Text
            variant="description"
            size="large"
            key={day}
            className="text-center font-medium"
          >
            {day}
          </Text>
        ))}
      </div>
      <div className="grid grid-cols-7 place-items-center items-center justify-center justify-items-center gap-2">
        {days.map((date) => {
          const isCurrentMonth =
            date.getFullYear() === year && date.getMonth() === month
          const isSelectedDate =
            `${baseDate.getFullYear()}-${baseDate.getMonth()}-${baseDate.getDate()}` ===
            `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
          const dateLabel = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
          const isAfterDay = new Date(dateLabel) > new Date()

          return (
            <button
              key={dateLabel}
              //   onClick={() => handleDateClick(date)}
              className="flex flex-col items-center justify-center gap-1"
            >
              <Text
                variant="body"
                size="small"
                color={isCurrentMonth ? "primary" : "disabled"}
                className={cn(
                  "h-6 rounded-md p-[1] font-normal",
                  isSelectedDate &&
                    "bg-background-brandassistive text-text-brand font-medium",
                )}
                aria-label={dateLabel}
              >
                {date.getDate()}
              </Text>
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isAfterDay ? "bg-neutral-20" : "bg-blue-100",
                )}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
