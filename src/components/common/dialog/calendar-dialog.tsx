"use client"

import { useState } from "react"

import { Icon } from "../icon"
import { Text } from "../text"

import BaseDialog from "./base-dialog"
interface CalendarDialogProps {
  isOpen: boolean
  onCancel: VoidFunction
}

export const CalendarDialog = ({ isOpen, onCancel }: CalendarDialogProps) => {
  // 오늘 날짜 정보
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // 렌더링 기준이 되는 달
  const [baseYear, setBaseYear] = useState(today.getFullYear())
  const [baseMonth, setBaseMonth] = useState(today.getMonth()) // 0=1월

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

  const handleDateClick = (date: Date) => {
    const isCurrentMonth =
      date.getFullYear() === baseYear && date.getMonth() === baseMonth

    if (isCurrentMonth) {
      return
    }

    if (date.getTime() < today.getTime()) {
      handlePrevMonthClick()
    } else {
      handleNextMonthClick()
    }
  }

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onCancel}
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
              const isPast = !isCurrentMonth || date.getTime() < today.getTime()
              const dateLabel = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

              return (
                <button
                  key={dateLabel}
                  onClick={() => handleDateClick(date)}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <Text
                    variant="body"
                    size="small"
                    color={isPast || !isCurrentMonth ? "disabled" : "primary"}
                    className="text-center font-normal"
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
      <button className="bg-neutral-20 rounded-lg px-2.5 py-2">
        <Text variant="body" size="small" color="tertiary">
          완료
        </Text>
      </button>
    </BaseDialog>
  )
}
