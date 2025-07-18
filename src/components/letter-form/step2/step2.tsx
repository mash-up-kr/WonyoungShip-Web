"use client"

import dayjs from "dayjs"
import { useSearchParams } from "next/navigation"
import React, { useState } from "react"

import { apiApi } from "@/__generated__/Api/Api.api"
import { Button, CalendarDialog, Icon, Text } from "@/components/common"
import Checkbox from "@/components/common/checkbox"
import { LETTER_TYPE } from "@/constants/letter"
import { useLetterForm } from "@/contexts/letter-form-context"
import { useSnackbar } from "@/contexts/snackbar"

import { MESSAGE_MAP, validateStep2 } from "../utils/step-validate"

const Step2 = ({ receiverName }: { receiverName: string }) => {
  const { showSnackbar } = useSnackbar()
  const { formData, setStep, updateFormData } = useLetterForm()
  const searchParams = useSearchParams()
  const receiverId = searchParams.get("receiverId")
  const type = searchParams.get("type") as keyof typeof LETTER_TYPE

  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    formData.scheduleDate ? new Date(formData.scheduleDate) : null,
  )

  const onSubmit = async () => {
    try {
      const response = await apiApi.writeLetter({
        query: {
          type,
        },
        data: {
          ...formData,
          receiverId: receiverId ? Number(receiverId) : undefined,
        },
      })
      return {
        success: true,
        data: response.data,
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        data: null,
      }
    }
  }

  const handleSubmit = async () => {
    const validateResult = validateStep2({ formData })
    const { message } = validateResult
    if (message !== MESSAGE_MAP.IS_PASS) {
      showSnackbar({ message, icon: "clear" })
      return
    }

    const { success } = await onSubmit()
    if (success) setStep(3)
    else {
      showSnackbar({ message: "편지 전송에 실패했습니다.", icon: "clear" })
    }
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
                {receiverName}
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
                {dayjs(new Date()).format("YYYY.MM.DD(ddd)")}
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
                {formData.scheduleDate
                  ? dayjs(formData.scheduleDate).format("YYYY.MM.DD(ddd)")
                  : "날짜 선택"}
              </Text>
            </div>
          </div>
        </article>

        <footer className="fixed right-0 bottom-0 left-0 px-[16px] py-[24px]">
          <div className="mx-auto max-w-[420px]">
            <div className="flex items-center justify-center gap-[8px]">
              <Checkbox
                isChecked={formData.needFortuneCookie}
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
        selectedDate={selectedDate ?? null}
        onSelectDate={(date) => {
          setSelectedDate(date)
        }}
      />
    </>
  )
}

export default Step2
