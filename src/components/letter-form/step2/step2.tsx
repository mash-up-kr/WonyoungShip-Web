"use client"

import dayjs from "dayjs"
import React, { useState } from "react"

import { Button, CalendarDialog, Icon, Text } from "@/components/common"
import Checkbox from "@/components/common/checkbox"
import { useLetterForm } from "@/contexts/letter-form-context"

const Step2 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { formData, setStep, updateFormData } = useLetterForm()
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleSubmit = () => {
    // TODO: 편지 제출 로직
    console.log("편지 데이터:", formData)
    setStep(3)
  }

  return (
    <>
      <section className="px-[16px]">
        <Text as="h2" variant="heading" size="small" color="primary">
          편지를 언제 배달할까요?
        </Text>

        <article className="mt-[20px]">
          <div className="flex max-h-[68px] gap-[8px] rounded-[12px] bg-white p-[16px]">
            <Icon
              icon="letter"
              size="lg"
              className="h-[32px] w-[32px] flex-shrink-0"
            />

            <div className="flex min-w-0 flex-col">
              <Text variant="body" size="small" color="secondary">
                TO.예인
              </Text>

              <Text
                variant="body"
                size="small"
                color="tertiary"
                className="line-clamp-1"
              >
                {formData.content}
              </Text>
            </div>
          </div>

          <div className="mt-[12px] flex gap-[10px]">
            <div className="border-border-secondary bg-background-assistive flex h-[68px] w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[12px] border-[1px]">
              <Text variant="body" size="small" color="tertiary">
                보내는날
              </Text>
              <Text variant="body" size="small" color="secondary">
                24.05.0.5(토)
              </Text>
            </div>

            <div
              className="border-icon-brand flex h-[68px] w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[12px] border-[1px] bg-white"
              onClick={() => setIsOpen(true)}
            >
              <Text variant="body" size="small" color="tertiary">
                받는 날
              </Text>
              <Text variant="body" size="small" color="brand">
                {formData.scheduleDate ? formData.scheduleDate : "날짜 선택"}
              </Text>
            </div>
          </div>
        </article>

        <footer className="fixed right-0 bottom-0 left-0 px-[16px] py-[24px]">
          <div className="mx-auto max-w-[420px]">
            <div className="flex items-center justify-center gap-[8px]">
              <Checkbox
                onClick={() => {
                  updateFormData({
                    needFortuneCookie: !formData.needFortuneCookie,
                  })
                }}
              />

              <div className="flex items-center gap-[4px]">
                <Icon
                  icon="fortuneCookie"
                  className="animate-cookie-shake h-[32px] w-[32px]"
                />
                <Text variant="body" color="secondary" size="small">
                  포춘쿠키도 함께 보내기
                </Text>
              </div>
            </div>

            <Button
              variant="blue"
              text="편지 보내기"
              className="mt-[16px]"
              onClick={handleSubmit}
            />
          </div>
        </footer>
      </section>

      <CalendarDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={(date) => {
          updateFormData({
            scheduleDate: dayjs(date).format("YYYY-MM-DD"),
          })
          setIsOpen(false)
        }}
        selectedDate={selectedDate}
        onSelectDate={(date) => {
          setSelectedDate(date)
        }}
      />
    </>
  )
}

export default Step2
