import { Text } from "@/components/common"
import { cn } from "@/utils/cn"

type BoxVariant = "default" | "active" | "today"
type FontColor = "tertiary" | "inverse"

type BoxStyleConfig = {
  box: string
  circle: string
  fontColor: FontColor
}

const BOX_STYLES: Record<BoxVariant, BoxStyleConfig> & {
  getVariant: (letterCount: number, isToday: boolean) => BoxVariant
} = {
  default: {
    box: "border-border-secondary",
    circle: "bg-neutral-20",
    fontColor: "tertiary",
  },
  active: {
    box: "border-blue-100",
    circle: "bg-blue-100",
    fontColor: "inverse",
  },
  today: {
    box: "border-blue-100",
    circle: "bg-neutral-20",
    fontColor: "tertiary",
  },
  getVariant: (letterCount: number, isToday: boolean): BoxVariant => {
    if (letterCount > 0) return "active"
    if (isToday) return "today"
    return "default"
  },
}

export const LetterCountBox = ({
  letterCount,
  isToday,
}: {
  letterCount: number
  isToday?: boolean
}) => {
  const { box, circle, fontColor } =
    BOX_STYLES[BOX_STYLES.getVariant(letterCount, isToday ?? false)]

  return (
    <div
      className={cn(
        "z-20 bg-alpha-80 flex h-12 w-full items-center justify-center rounded-lg border",
        box,
      )}
      aria-label={`${letterCount}개의 편지${isToday ? " (오늘)" : ""}`}
    >
      <div
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-full",
          circle,
        )}
      >
        <Text
          variant="description"
          size="small"
          color={fontColor}
          className="font-normal"
        >
          {letterCount}
        </Text>
      </div>
    </div>
  )
}
