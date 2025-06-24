"use client"

import { Textarea } from "@headlessui/react"
import clsx from "clsx"
import React, { useState } from "react"

import { WeatherIconName } from "@/assets/svg/weather"

import { Button, Icon, Text, WeatherIcon } from "../common"
import BaseDialog from "../common/dialog/base-dialog"
import BasicHeader from "../common/header/basic-header"
import MusicDropdown from "../music-dropdown"

const WEATHER_MAP: Record<string, WeatherIconName> = {
  sunny: "sunny",
  cloudy: "cloudy",
  rainy: "rainy",
  snow: "snow",
  shiny: "shiny",
}

const WeatherList = () => {
  const [selectedWeather, setSelectedWeather] =
    useState<WeatherIconName | null>(null)

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
    setSelectedWeather(selectedWeather === weather ? null : weather)
  }

  return (
    <div className="flex w-full justify-center gap-[12px] px-[16px]">
      {Object.entries(WEATHER_MAP).map(([, value]) => {
        const isSelected = selectedWeather === value

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

const LetterForm = () => {
  const [step, setStep] = useState<number>(1)
  const [isEditNameDialogOpen, setIsEditNameDialogOpen] = useState(false)

  return (
    <>
      <section className="relative h-dvh w-full">
        {/* 헤더 */}
        <BasicHeader
          hasBackButton={step !== 1}
          onClickBackButton={() => setStep(step - 1)}
          centerText="To. 예인"
        />
        {/* 날씨영역 */}
        <WeatherList />

        {/* 음악 드롭다운 */}
        <div className="mt-[24px] flex place-content-center">
          <MusicDropdown />
        </div>

        <div className="bg-background-assistive mx-[16px] mt-[24px] flex h-[346px] flex-col rounded-[20px] px-[24px] pt-[24px]">
          <Textarea
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
              From.익명의 너구리
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
      </section>

      <BaseDialog
        isOpen={isEditNameDialogOpen}
        onClose={() => setIsEditNameDialogOpen(false)}
      >
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <input
            type="text"
            className={clsx(
              "font-ryurue border-border-primary h-[25px] w-[77px] border-b-[1.5px] pb-[4px] text-center text-[22px]",
              "focus:not-data-focus:outline-none",
            )}
          />
          <Button
            variant="primary"
            className="flex h-[32px] w-[45px] items-center justify-center"
            onClick={() => setIsEditNameDialogOpen(false)}
          >
            <Text variant="body" size="small" color="inverse">
              완료
            </Text>
          </Button>
        </div>
      </BaseDialog>
    </>
  )
}

export default LetterForm
