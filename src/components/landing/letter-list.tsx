import Image from "next/image"

import { apiApi } from "@/__generated__/Api/Api.api"
import LetterBackground from "@/assets/images/letter-background.png"
import { convertServerToIconWeatherName } from "@/utils/weather"

import { Text, WeatherIcon } from "../common"

export const LetterList = async () => {
  const {
    data: { data },
  } = await apiApi.getLandingContent()

  const letterList = data ?? []

  const copiedLetterList = [...letterList, ...letterList, ...letterList]

  const formatDate = (date: string | Date) => {
    const d = new Date(date)
    const month = d.getMonth() + 1
    const day = String(d.getDate())
    const dayOfWeek = d.toLocaleDateString("ko-KR", { weekday: "long" })

    return `${month}월 ${day}일 ${dayOfWeek}`
  }

  return (
    <div className="relative overflow-hidden">
      {/* 측면 그라데이션 숨김을 위한 요소 */}
      <div className="absolute top-0 bottom-0 left-0 z-10 w-[100px] bg-gradient-to-r from-[#f2f5f7] to-[#f2f5f700] md:w-[50px] xl:w-[100px]"></div>
      <div className="absolute top-0 right-0 bottom-0 z-10 w-[100px] bg-gradient-to-l from-[#f2f5f7] to-[#f2f5f700] md:w-[50px] xl:w-[100px]"></div>
      {/* 편지 목록 */}
      <div
        className="animate-infinite-slide-left flex w-max will-change-transform"
        style={{ animationDuration: `${letterList.length * 3}s` }}
      >
        {copiedLetterList.map(({ date, letter, weather }, index) => (
          <section
            key={index}
            className="bg-blue-10 relative mr-3 flex h-[209px] w-[209px] flex-none flex-col gap-3 overflow-hidden rounded-[13px] p-6"
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
