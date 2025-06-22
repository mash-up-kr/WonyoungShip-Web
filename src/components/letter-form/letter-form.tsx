"use client"

import React, { useState } from "react"

import { WeatherIconName } from "@/assets/svg/weather"

import { Text, WeatherIcon } from "../common"
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
    <main className="relative h-dvh w-full">
      <BasicHeader
        hasBackButton={step !== 1}
        onClickBackButton={() => setStep(step - 1)}
        centerText="To. 예인"
      />
      <BasicHeader hasBackButton />
      <WeatherList />
      <div className="mt-[24px] flex place-content-center">
        <MusicDropdown />
      </div>
    </main>
  )
}

export default LetterForm
