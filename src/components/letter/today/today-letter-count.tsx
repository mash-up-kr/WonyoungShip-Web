import LetterUnderline from "@/assets/svg/letter-underline.svg"
import { Text } from "@/components/common"

interface TodayLetterCountProps {
  count: number
}

export const TodayLetterCount = ({ count }: TodayLetterCountProps) => {
  if (count <= 0) {
    return (
      <h2 className="flex flex-col items-center justify-center py-6">
        <Text
          variant="body"
          size="large"
          color="secondary"
          font="Ownglyph ryurue"
          className="font-normal"
        >
          오늘은 도착한 편지가 없어요
        </Text>
        <Text
          variant="body"
          size="large"
          font="Ownglyph ryurue"
          color="tertiary"
          className="font-normal"
        >
          내일은 더 많은 편지가 도착할 거예요
        </Text>
      </h2>
    )
  }

  return (
    <h2 className="flex flex-col items-center justify-center py-6">
      <span>
        <Text
          variant="body"
          size="large"
          font="Ownglyph ryurue"
          color="secondary"
          className="font-normal"
        >{`${count}개의 편지`}</Text>
        <Text
          variant="body"
          size="large"
          font="Ownglyph ryurue"
          color="tertiary"
          className="font-normal"
        >
          가 오늘 도착했어요
        </Text>
      </span>
      <LetterUnderline />
      <Text
        variant="body"
        size="large"
        font="Ownglyph ryurue"
        color="tertiary"
        className="font-normal"
      >
        천천히 한 통씩 열어보세요
      </Text>
      <LetterUnderline />
    </h2>
  )
}
