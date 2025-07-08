import { LetterPreviewResponseType } from "@/__generated__/@types"
import { LetterCard, Text } from "@/components/common"

interface DailyLetterListProps {
  selectedDate: Date | null
  letters: LetterPreviewResponseType[]
}

export const DailyLetterList = ({
  letters,
  selectedDate,
}: DailyLetterListProps) => {
  if (selectedDate === null) {
    return null
  }

  if (letters?.length === 0) {
    return (
      <div className="bg-background-white flex h-[66px] w-full items-center justify-center rounded-xl">
        <Text variant="body" size="small" color="tertiary">
          도착한 편지가 없어요
        </Text>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {letters.map((letter) => (
        <li key={letter.letterId}>
          <LetterCard
            to={`/letter/${letter.letterId}`}
            receivedAt={new Date(letter.scheduleDate)}
            content={letter.content}
          />
        </li>
      ))}
    </ul>
  )
}
