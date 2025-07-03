"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { LandingResponseType } from "@/__generated__/@types"
import { apiApi } from "@/__generated__/Api/Api.api"
import LetterBackground from "@/assets/images/letter-background.png"
import { convertServerToIconWeatherName } from "@/utils/weather"

import { Text, WeatherIcon } from "../common"

const DEFAULT_LETTER_LIST: LandingResponseType[] = [
  { date: "2023-10-01", weather: "SUNNY", letter: "" },
  {
    date: "2023-10-02",
    weather: "CLOUDY",
    letter: "아름다운 날씨가 계속되네요! 오늘은 어떤 계획이 있으신가요? ",
  },
  {
    date: "2023-10-03",
    weather: "RAINY",
    letter:
      "오늘도 비가 오네요. 우산 챙기셨나요? 비 오는 날은 따뜻한 차 한 잔이 생각나네요.",
  },
  { date: "2023-10-01", weather: "SUNNY", letter: "" },
  {
    date: "2023-10-02",
    weather: "CLOUDY",
    letter: "오늘은 흐린 날씨네요. 그래도 기분 좋은 하루 되세요!",
  },
  {
    date: "2023-10-03",
    weather: "RAINY",
    letter:
      "비가 오는 날은 창밖을 바라보며 생각에 잠기기 좋은 날이죠. 오늘은 어떤 생각을 하고 계신가요?",
  },
]

export const LetterList = () => {
  const [letterList, setLetterList] =
    useState<LandingResponseType[]>(DEFAULT_LETTER_LIST)

  const copiedLetterList = [...letterList, ...letterList, ...letterList]

  const formatDate = (date: string | Date) => {
    const d = new Date(date)
    const month = d.getMonth() + 1
    const day = String(d.getDate())
    const dayOfWeek = d.toLocaleDateString("ko-KR", { weekday: "long" })

    return `${month}월 ${day}일 ${dayOfWeek}`
  }

  useEffect(() => {
    // API 호출을 통해 편지 목록을 가져옵니다.
    const fetchLetters = async () => {
      try {
        const response = await apiApi.getLandingContent()
        const letters = response.data.data

        // 편지 목록을 상태에 저장합니다.
        setLetterList(letters ?? DEFAULT_LETTER_LIST)
      } catch (error) {
        console.error("편지 목록을 가져오는 데 실패했습니다:", error)
      }
    }

    fetchLetters()
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* 측면 그라데이션 숨김을 위한 요소 */}
      <div className="absolute top-0 bottom-0 left-0 z-10 w-[100px] bg-gradient-to-r from-[#f2f5f7] to-[#f2f5f700] md:w-[50px] xl:w-[100px]"></div>
      <div className="absolute top-0 right-0 bottom-0 z-10 w-[100px] bg-gradient-to-l from-[#f2f5f7] to-[#f2f5f700] md:w-[50px] xl:w-[100px]"></div>
      {/* 편지 목록 */}
      <div className="animate-infinite-slide-left flex w-max will-change-transform">
        {copiedLetterList.map(({ date, letter, weather }, index) => (
          <section
            key={index}
            className="bg-blue-10 relative mr-3 flex h-[209px] w-[209px] flex-none flex-col gap-3 rounded-[13px] p-6"
          >
            <Image
              src={LetterBackground}
              alt=""
              className="absolute top-0 right-0 bottom-0 left-0 mix-blend-multiply"
            />
            <div className="flex items-center justify-between">
              {date && (
                <Text
                  variant="body"
                  size="small"
                  font="Ownglyph ryurue"
                  color="neutral-50"
                  className="font-normal"
                >
                  {formatDate(date)}
                </Text>
              )}
              {weather && (
                <WeatherIcon
                  weather={convertServerToIconWeatherName(weather)}
                  size="sm"
                  color="disabled"
                />
              )}
            </div>
            <Text
              variant="body"
              size="medium"
              font="Ownglyph ryurue"
              color="neutral-80"
              className="line-clamp-8 leading-[100%] font-normal"
            >
              {letter}
            </Text>
          </section>
        ))}
      </div>
    </div>
  )
}
