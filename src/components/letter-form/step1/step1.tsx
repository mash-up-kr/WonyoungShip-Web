"use client"

import { Textarea } from "@headlessui/react"
import clsx from "clsx"
import React, { useState } from "react"

import { WeatherIconName } from "@/assets/svg/weather"
import { Button, Icon, Text, WeatherIcon } from "@/components/common"
import BaseDialog from "@/components/common/dialog/base-dialog"
import MusicDropdown from "@/components/music-dropdown"
import { useLetterForm } from "@/contexts/letter-form-context"

const WEATHER_MAP: Record<string, WeatherIconName> = {
  sunny: "sunny",
  cloudy: "cloudy",
  rainy: "rainy",
  snow: "snow",
  shiny: "shiny",
}

const WeatherList = () => {
  const { formData, updateFormData } = useLetterForm()

  const getWeatherLabel = (weather: WeatherIconName) => {
    switch (weather) {
      case "sunny":
        return "맑은 날"
      case "cloudy":
        return "흐린 날"
      case "rainy":
        return "비오는 날"
      case "snow":
        return "눈오는 날"
      case "shiny":
        return "빛나는 날"
    }
  }

  const handleWeatherClick = (weather: WeatherIconName) => {
    updateFormData({
      weather: formData.weather === weather ? null : weather,
    })
  }

  return (
    <div className="flex w-full justify-center gap-[12px] px-[16px]">
      {Object.entries(WEATHER_MAP).map(([, value]) => {
        const isSelected = formData.weather === value

        return (
          <button
            key={`weather-item-${value}`}
            onClick={() => handleWeatherClick(value)}
            className="flex min-w-[50px] cursor-pointer flex-col items-center gap-[6px]"
            type="button"
          >
            <WeatherIcon
              weather={value}
              size="lg"
              color={isSelected ? undefined : "disabled"}
            />
            <Text
              variant="description"
              size="large"
              color={isSelected ? "secondary" : "neutral-30"}
            >
              {getWeatherLabel(value)}
            </Text>
          </button>
        )
      })}
    </div>
  )
}

const Step1 = () => {
  const { formData, updateFormData, setStep } = useLetterForm()
  const [isEditNameDialogOpen, setIsEditNameDialogOpen] = useState(false)
  const [tempAuthorName, setTempAuthorName] = useState(formData.authorName)

  const handleNext = () => {
    // 필수 필드 검증
    if (!formData.weather || !formData.content.trim()) {
      // TODO: 에러 처리 (스낵바나 토스트 메시지)
      return
    }
    setStep(2)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({ content: e.target.value })
  }

  const handleAuthorNameSave = () => {
    updateFormData({ authorName: tempAuthorName })
    setIsEditNameDialogOpen(false)
  }

  const handleCancel = () => {
    // TODO: 작성 취소 확인 다이얼로그
    // resetForm() 호출
  }

  return (
    <section>
      {/* 날씨영역 */}
      <WeatherList />

      {/* 음악 드롭다운 */}
      <div className="mt-[24px] flex place-content-center">
        <MusicDropdown />
      </div>

      <div className="bg-background-assistive mx-[16px] mt-[24px] flex h-[346px] flex-col rounded-[20px] px-[24px] pt-[24px]">
        <Textarea
          value={formData.content}
          onChange={handleContentChange}
          className={clsx(
            "text-text-primary font-ryurue min-h-[260px] w-full resize-none pb-[8px] text-[18px]",
            "data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
            "custom-scrollbar pr-[10px]",
          )}
          placeholder="미래의 나에게 편지를 자유롭게 작성해주세요!"
        />
        <div className="flex items-center justify-end gap-[4px]">
          <Text
            variant="body"
            size="medium"
            color="secondary"
            font="Ownglyph ryurue"
          >
            From.{formData.authorName}
          </Text>
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setIsEditNameDialogOpen(true)}
          >
            <Icon icon="pencil" size="md" />
          </button>
        </div>
      </div>

      <footer className="fixed right-0 bottom-0 left-0 px-[16px] py-[24px]">
        <div className="mx-auto max-w-[420px]">
          <div className="flex gap-[8px]">
            <Button
              variant="gray"
              className="flex h-[48px] flex-1 items-center justify-center"
              onClick={handleCancel}
            >
              <Text variant="body" size="small" color="tertiary">
                작성취소
              </Text>
            </Button>
            <Button
              variant="blue"
              className="flex h-[48px] flex-1 items-center justify-center"
              onClick={handleNext}
            >
              <Text variant="body" size="small" color="inverse">
                다음
              </Text>
            </Button>
          </div>
        </div>
      </footer>

      <BaseDialog
        isOpen={isEditNameDialogOpen}
        onClose={() => setIsEditNameDialogOpen(false)}
      >
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <input
            type="text"
            value={tempAuthorName}
            onChange={(e) => setTempAuthorName(e.target.value)}
            className={clsx(
              "font-ryurue border-border-primary h-[25px] w-[77px] border-b-[1.5px] pb-[4px] text-center text-[22px]",
              "focus:not-data-focus:outline-none",
            )}
          />
          <Button
            variant="primary"
            className="flex h-[32px] w-[45px] items-center justify-center"
            onClick={handleAuthorNameSave}
          >
            <Text variant="body" size="small" color="inverse">
              완료
            </Text>
          </Button>
        </div>
      </BaseDialog>
    </section>
  )
}

export default Step1
