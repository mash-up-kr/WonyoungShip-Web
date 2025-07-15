"use client"

import { useState } from "react"

import { useSnackbar } from "@/contexts/snackbar"
import { checkSameDay } from "@/utils/date"

import { useFetchLetterList } from "../../hooks/use-fetch-letter-list"
import { MonthSwipeNavigator } from "../../month-swipe-navigator"

import { DailyLetterList } from "./daily-letter-list"
import { LetterCalendar } from "./letter-calendar"

export const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const { showSnackbar } = useSnackbar()
  const { letterList, receivedDates } = useFetchLetterList()

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
    <MonthSwipeNavigator>
      <div className="flex flex-col gap-3 px-4">
        <LetterCalendar
          receivedDates={receivedDates}
          selectedDate={selectedDate}
          onDateSelect={handleSelctedDate}
        />
        <DailyLetterList
          letters={letterList.filter((letter) => {
            if (selectedDate === null) {
              return false
            }
            return checkSameDay(new Date(letter.scheduleDate), selectedDate)
          })}
          selectedDate={selectedDate}
        />
      </div>
    </MonthSwipeNavigator>
  )
}
