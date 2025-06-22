"use client"

import { Textarea } from "@headlessui/react"
import clsx from "clsx"
import React, { useState } from "react"

import { WeatherIconName } from "@/assets/svg/weather"

import { Icon, Text, WeatherIcon } from "../common"
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

  return (
    <div className="flex w-full justify-center gap-[12px] px-[16px]">
      {Object.entries(WEATHER_MAP).map(([, value]) => (
        <div
          key={`weather-item-${value}`}
          className="j flex min-w-[50px] flex-col items-center gap-[6px]"
        >
          <WeatherIcon weather={value} size="lg" />
          <Text variant="description" size="large" color="secondary">
            {getWeatherLabel(value)}
          </Text>
        </div>
      ))}
    </div>
  )
}

const LetterForm = () => {
  const [step, setStep] = useState<number>(1)

  return (
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
            "text-text-primary font-ryurue size-[18px] min-h-[260px] w-full resize-none pb-[8px]",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
          )}
          placeholder="미래의 나에게 편지를 자유롭게 작성해주세요!"
        />
        <div className="flex items-center justify-end gap-[4px]">
          <Text variant="body" size="medium" color="secondary">
            From.익명의 너구리F
          </Text>
          <Icon icon="pencil" size="md" />
        </div>
      </div>
    </section>
  )
}

export default LetterForm
