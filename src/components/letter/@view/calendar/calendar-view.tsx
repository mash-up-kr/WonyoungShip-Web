"use client"

import { useState } from "react"

import { useSnackbar } from "@/contexts/snackbar"
import { checkSameDay } from "@/utils/date"

import { DailyLetterList } from "./daily-letter-list"
import { LetterCalendar } from "./letter-calendar"

export interface LetterResponse {
  days: string[]
  letters: { letterId: string; scheduleDate: string; content: string | null }[]
}

const LETTERS_RESPONSE: LetterResponse = {
  days: [
    "2025-05-27",
    "2025-06-11",
    "2025-06-10",
    "2025-06-12",
    "2025-07-01",
    "2025-07-03",
  ],
  letters: [
    {
      content: "dsgfhjkhgfdghjklhgfdghjklhgfd",
      letterId: "1",
      scheduleDate: "2025-06-12",
    },
    {
      content: null,
      letterId: "2",
      scheduleDate: "2025-06-12",
    },
    {
      content:
        "dsgfhjkhgfdghjklhgfdghjklhgfasdkjahsjdhkajsfsdnfdksjfkjsdhfsdsdgjahsdad",
      letterId: "3",
      scheduleDate: "2025-06-12",
    },
    {
      content: "dsgfhjkhgfdghjklhgfdghjklhgfasfdjhjkljjhjgkld",
      letterId: "4",
      scheduleDate: "2025-06-12",
    },
  ],
}

export const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const { showSnackbar } = useSnackbar()

  const handleSelctedDate = (date: Date) => {
    if (date > new Date()) {
      showSnackbar({
        message: "아직 편지를 보려면 시간이 남았어요",
      })
      return
    }

    setSelectedDate(date)
  }

  return (
    <div className="flex flex-col gap-3 px-4">
      <LetterCalendar
        receivedDates={LETTERS_RESPONSE.days}
        selectedDate={selectedDate}
        onDateSelect={handleSelctedDate}
      />
      <DailyLetterList
        letters={LETTERS_RESPONSE.letters.filter((letter) => {
          if (selectedDate === null) {
            return false
          }
          return checkSameDay(new Date(letter.scheduleDate), selectedDate)
        })}
        selectedDate={selectedDate}
      />
    </div>
  )
}
