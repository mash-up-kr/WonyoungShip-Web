"use client"

import { useState } from "react"

import { cn } from "@/utils/cn"

import { Icon } from "../icon"
import { Text } from "../text"

import BaseDialog from "./base-dialog"
interface CalendarDialogProps {
  isOpen: boolean
  onClose: VoidFunction
  onConfirm: (data: Date) => void
  selectedDate?: Date | null
  onSelectDate?: (date: Date) => void
}

export const CalendarDialog = ({
  isOpen,
  selectedDate = new Date(),
  onSelectDate,
  onClose,
  onConfirm,
}: CalendarDialogProps) => {
  const TODAY = new Date()
  TODAY.setHours(0, 0, 0, 0)

  const [baseYear, setBaseYear] = useState(TODAY.getFullYear())
  const [baseMonth, setBaseMonth] = useState(TODAY.getMonth())
  const [currentSelectedDate, setCurrentSelectedDate] = useState<Date | null>(
    selectedDate ? selectedDate : null,
  )

  const firstOfMonth = new Date(baseYear, baseMonth, 1)
  const lastOfMonth = new Date(baseYear, baseMonth + 1, 0)
  const daysInMonth = lastOfMonth.getDate()

  const startWeekday = (firstOfMonth.getDay() + 6) % 7

  const days: Date[] = []

  for (let i = startWeekday; i > 0; i--) {
    days.push(new Date(baseYear, baseMonth, 1 - i))
  }

  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(baseYear, baseMonth, d))
  }

  while (days.length % 7 !== 0) {
    const d = days.length - startWeekday - daysInMonth + 1
    days.push(new Date(baseYear, baseMonth + 1, d))
  }

  const handlePrevMonthClick = () => {
    if (baseMonth === 0) {
      setBaseYear(baseYear - 1)
      setBaseMonth(11)
    } else {
      setBaseMonth((prev) => prev - 1)
    }
  }

  const handleNextMonthClick = () => {
    setBaseMonth((prev) => (prev + 1) % 12)
    if (baseMonth === 11) {
      setBaseYear((prev) => prev + 1)
    }
  }
  console.log("currentSelectedDate", currentSelectedDate)
  const handleDateClick = (date: Date) => {
    if (date.getTime() < TODAY.getTime()) {
      return
    }

    const isCurrentMonth =
      date.getFullYear() === baseYear && date.getMonth() === baseMonth

    if (isCurrentMonth) {
      setCurrentSelectedDate(date)
      onSelectDate?.(date)
    } else if (date.getTime() < TODAY.getTime()) {
      handlePrevMonthClick()
    } else {
      handleNextMonthClick()
    }
  }

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      dialogPanelProps={{
        className: "w-[306px] flex flex-col items-center gap-4",
      }}
    >
      <div className="bg-background-white flex w-full flex-col gap-3 rounded-[1.25rem] p-6">
        <div className="flex items-center justify-center gap-5">
          <button onClick={handlePrevMonthClick}>
            <Icon
              icon="chevronLeft"
              fill="tertiary"
              ariaLabel="이전 달로 이동"
            />
          </button>
          <h1 className="flex items-center justify-center gap-1.5">
            <Text variant="body" size="large" className="font-semi-bold">
              {baseMonth + 1}월
            </Text>
            <Text variant="body" size="small" color="secondary">
              {baseYear}
            </Text>
          </h1>
          <button onClick={handleNextMonthClick}>
            <Icon
              icon="chevronRight"
              fill="tertiary"
              ariaLabel="다음 달로 이동"
            />
          </button>
        </div>
        <div>
          <div className="mb-2 grid grid-cols-7">
            {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
              <Text
                variant="body"
                size="small"
                key={day}
                className="text-center font-medium"
              >
                {day}
              </Text>
            ))}
          </div>
          <div className="grid grid-cols-7 items-center justify-center gap-2">
            {days.map((date) => {
              const isCurrentMonth =
                date.getFullYear() === baseYear && date.getMonth() === baseMonth
              const isSelectedDate =
                `${currentSelectedDate?.getFullYear()}-${currentSelectedDate?.getMonth()}-${currentSelectedDate?.getDate()}` ===
                `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
              // 오늘 이전 날짜인지 체크 (선택된 날짜가 아닌 오늘 날짜 기준)
              const isPastDate = date.getTime() < TODAY.getTime()
              const dateLabel = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

              const isToday = date.getTime() === TODAY.getTime()

              return (
                <button
                  key={dateLabel}
                  onClick={() => handleDateClick(date)}
                  className="flex items-center justify-center"
                  disabled={isPastDate}
                >
                  <Text
                    variant="body"
                    size="small"
                    color={
                      !isCurrentMonth || isPastDate ? "disabled" : "primary"
                    }
                    className={cn(
                      "h-6 w-6 rounded-md p-[1] text-center font-normal",
                      isToday &&
                        "bg-background-brandassistive text-text-brand font-medium",
                      isSelectedDate && "bg-blue-100 text-white",
                    )}
                    aria-label={dateLabel}
                  >
                    {date.getDate()}
                  </Text>
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <button
        className={cn(
          "bg-neutral-20 cursor-pointer rounded-lg px-2.5 py-2 disabled:cursor-not-allowed",
          currentSelectedDate && "bg-black",
        )}
        disabled={!currentSelectedDate}
        onClick={() => {
          if (currentSelectedDate) {
            onConfirm(currentSelectedDate)
          }
        }}
      >
        <Text
          variant="body"
          size="small"
          color={currentSelectedDate ? "neutral-10" : "tertiary"}
        >
          완료
        </Text>
      </button>
    </BaseDialog>
  )
}
