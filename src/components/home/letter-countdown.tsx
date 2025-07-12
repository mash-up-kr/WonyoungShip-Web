"use client"

import Lottie from "lottie-react"
import Image from "next/image"

import LetterBackground from "@/assets/images/letter-background.png"
import { Text } from "@/components/common"

import { HOME_LOTTIES } from "../../../public/assets/lottie"

import { LetterWeekContainer } from "./letter-week-container"

type LetterStatus = "EMPTY" | "IN_DELIVERY" | "ARRIVED"
type TextColor = "secondary" | "tertiary"

interface LetterCountdownProps {
  letterCountPerDate: number[]
}

const LETTER_CONFIG: Record<
  LetterStatus,
  {
    subtitle: string | ((daysLeft: number) => string)
    subtitleColor: TextColor
    title: string
    lottieData: (typeof HOME_LOTTIES)[keyof typeof HOME_LOTTIES]
    lottieSize: string
  }
> = {
  EMPTY: {
    subtitle: "오고 있는 편지가 없어요",
    subtitleColor: "tertiary",
    title: "주소를 공유해 편지를 받아보세요!",
    lottieData: HOME_LOTTIES.EMPTY,
    lottieSize: "w-[12rem]",
  },
  IN_DELIVERY: {
    subtitle: (daysLeft: number) => `D-${daysLeft}`,
    subtitleColor: "secondary",
    title: "열심히 배달 중...",
    lottieData: HOME_LOTTIES.IN_DELIVERY,
    lottieSize: "w-[12rem]",
  },
  ARRIVED: {
    subtitle: "D-Day",
    subtitleColor: "secondary",
    title: "편지가 도착했어요!",
    lottieData: HOME_LOTTIES.ARRIVED,
    lottieSize: "w-24",
  },
}

const getLetterStatus = (
  letterCountPerDate: number[],
): { status: LetterStatus; daysLeft?: number } => {
  if (!letterCountPerDate || letterCountPerDate.every((count) => count === 0)) {
    return { status: "EMPTY" }
  }

  const today = new Date().getDay() - 1

  for (let i = 0; i < 7; i++) {
    const dayIndex = (today + i) % 7
    if (letterCountPerDate[dayIndex] > 0) {
      if (i === 0) {
        return { status: "ARRIVED" }
      }
      return { status: "IN_DELIVERY", daysLeft: i }
    }

    if (dayIndex == 6) {
      break
    }
  }

  return { status: "EMPTY" }
}

export const LetterCountdown = ({
  letterCountPerDate,
}: LetterCountdownProps) => {
  const { status, daysLeft } = getLetterStatus(letterCountPerDate)

  const { title, subtitle, subtitleColor, lottieData, lottieSize } =
    LETTER_CONFIG[status]

  return (
    <section className="bg-blue-10 relative flex h-[378px] w-full flex-col items-center justify-between overflow-hidden rounded-3xl px-4 pt-7 pb-3">
      <Image
        src={LetterBackground}
        alt=""
        className="absolute top-0 right-0 bottom-0 left-0 mix-blend-multiply"
      />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <Text
            as="h2"
            variant="heading"
            size="small"
            font="Ownglyph ryurue"
            color={subtitleColor}
            className="leading-[1.375rem] font-normal"
          >
            {typeof subtitle === "string" ? subtitle : subtitle(daysLeft ?? 0)}
          </Text>
          <Text
            as="h3"
            variant="heading"
            font="Ownglyph ryurue"
            className="leading-7 font-normal"
          >
            {title}
          </Text>
        </div>

        <div className="my-9 mt-3 flex h-[140px] flex-col items-center justify-center">
          <Lottie
            animationData={lottieData}
            className={`${lottieSize} object-contain`}
          />

          {status === "ARRIVED" && (
            <button className="bg-background-primary active:bg-neutral-40 flex items-center justify-center rounded-lg px-2.5 py-2 transition-colors">
              <Text
                variant="body"
                size="small"
                color="inverse"
                className="leading-4 font-medium"
              >
                편지 열어보기
              </Text>
            </button>
          )}
        </div>
      </div>
      <LetterWeekContainer letterList={letterCountPerDate} />
    </section>
  )
}
