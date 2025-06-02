import { Text } from "@/components/common"

type LetterStatus = "EMPTY" | "IN_DELIVERY" | "ARRIVED"
type TextColor = "secondary" | "tertiary"

interface Letter {
  id: number
  scheduleDate: string
}

interface LetterCountdownProps {
  letterList: Letter[]
}

export const WAITING_TEXT: Record<
  LetterStatus,
  {
    subtitle: string | ((daysLeft: number) => string)
    subtitleColor: TextColor
    title: string
  }
> = {
  EMPTY: {
    subtitle: "오고 있는 편지가 없어요",
    subtitleColor: "tertiary",
    title: "주소를 공유해 편지를 받아보세요!",
  },
  IN_DELIVERY: {
    subtitle: (daysLeft: number) => `D-${daysLeft}`,
    subtitleColor: "secondary",
    title: "열심히 배달 중...",
  },
  ARRIVED: {
    subtitle: "D-Day",
    subtitleColor: "secondary",
    title: "편지가 도착했어요!",
  },
}

// TODO : 서버에서 데이터 넘겨주는 거 보고 사용하기.
// 서버에서 남은 날짜 + status 넘겨주면 필요 없고 날짜만 주면 utils로 옮기기
// 근데 생각해보니까 공통 아니라서 util로 안 옮겨도 될 것 같기도 하고...
const getLetterStatus = (
  scheduleDate: string,
): { status: LetterStatus; daysLeft?: number } => {
  const today = new Date()
  const target = new Date(scheduleDate)
  const diff = Math.ceil(
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  )

  if (diff > 0) return { status: "IN_DELIVERY", daysLeft: diff }
  if (diff === 0) return { status: "ARRIVED" }

  return { status: "EMPTY" }
}

export const LetterCountdown = ({ letterList }: LetterCountdownProps) => {
  const { status, daysLeft } = letterList[0]
    ? getLetterStatus(letterList[0].scheduleDate)
    : { status: "EMPTY" as const }

  const { title, subtitle, subtitleColor } = WAITING_TEXT[status]

  return (
    <section className="bg-letter flex h-[378px] w-full flex-col items-center justify-between rounded-3xl bg-blue-50 px-4 pt-7 pb-3">
      <section className="flex flex-col items-center">
        <section className="flex flex-col items-center gap-2" 
            aria-label={`${subtitle} ${title}`}>
          <Text
            variant="heading"
            size="small"
            font="Ownglyph ryurue"
            color={subtitleColor}
            className="leading-[1.375rem] font-normal"
          >
            {typeof subtitle === "string" ? subtitle : subtitle(daysLeft ?? 0)}
          </Text>
          <Text
            variant="heading"
            font="Ownglyph ryurue"
            className="leading-7 font-normal"
          >
            {title}
          </Text>
        </section>
        {/* 그래픽 */}
        <div className="my-6 h-[85px] w-20 bg-white"></div>
        <button
          className="bg-background-primary active:bg-neutral-40 items-center justify-center rounded-lg px-2.5 py-2 transition-colors"
          aria-label="편지 열어보기"
        >
          <Text
            variant="body"
            size="small"
            color="inverse"
            className="font-medium"
          >
            편지 열어보기
          </Text>
        </button>
      </section>
      {/* TODO : 하단 section 지우고 요일 Container 넣기 */}
      <section className="h-[93px] w-[327px] bg-white" />
    </section>
  )
}
