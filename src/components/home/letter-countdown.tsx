"use client"

import Lottie from "lottie-react"

import { Text } from "@/components/common"
import { getDaysDelivery } from "@/utils/date"

import { HOME_LOTTIES } from "../../../public/assets/lottie"

import { LetterWeekContainer } from "./letter-week-container"

type LetterStatus = "EMPTY" | "IN_DELIVERY" | "ARRIVED"
type TextColor = "secondary" | "tertiary"

interface Letter {
  id: number
  scheduleDate: string
}

interface LetterCountdownProps {
  letterList: Letter[]
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

// TODO : 서버에서 데이터 넘겨주는 거 보고 사용하기.
// 서버에서 남은 날짜 + status 넘겨주면 필요 없고 날짜만 주면 utils로 옮기기
// 근데 생각해보니까 공통 아니라서 util로 안 옮겨도 될 것 같기도 하고...
const getLetterStatus = (
  letterList: Letter[],
): { status: LetterStatus; daysLeft?: number } => {
  if (letterList.length === 0) {
    return { status: "EMPTY" }
  }

  const lettersWithDays = letterList.map((letter) => ({
    ...letter,
    daysLeft: getDaysDelivery(letter.scheduleDate),
  }))

  const hasArrivedLetter = lettersWithDays.some(
    (letter) => letter.daysLeft === 0,
  )
  if (hasArrivedLetter) {
    return { status: "ARRIVED" }
  }

  const deliveryLetters = lettersWithDays
    .filter((letter) => letter.daysLeft > 0)
    .sort((a, b) => a.daysLeft - b.daysLeft)

  if (deliveryLetters.length > 0) {
    return {
      status: "IN_DELIVERY",
      daysLeft: deliveryLetters[0].daysLeft,
    }
  }

  return { status: "EMPTY" }
}

export const LetterCountdown = ({ letterList }: LetterCountdownProps) => {
  const { status, daysLeft } = letterList[0]
    ? getLetterStatus(letterList)
    : { status: "EMPTY" as const }

  const { title, subtitle, subtitleColor, lottieData } = LETTER_CONFIG[status]

  return (
    <section className="bg-letter flex h-[378px] w-full flex-col items-center justify-between rounded-3xl bg-blue-50 px-4 pt-7 pb-3">
      <section className="flex flex-col items-center">
        <section className="flex flex-col items-center gap-2">
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
        </section>

        <div className="my-9 mt-3 flex h-[140px] flex-col items-center justify-center">
          <Lottie
            animationData={lottieData}
            className={`${LETTER_CONFIG[status].lottieSize} object-contain`}
          />

          {status == "ARRIVED" && (
            <button className="bg-background-primary active:bg-neutral-40 items-center justify-center rounded-lg px-2.5 py-2 transition-colors">
              <Text
                variant="body"
                size="small"
                color="inverse"
                className="font-medium"
              >
                편지 열어보기
              </Text>
            </button>
          )}
        </div>
      </section>
      <LetterWeekContainer letterList={letterList} />
    </section>
  )
}
