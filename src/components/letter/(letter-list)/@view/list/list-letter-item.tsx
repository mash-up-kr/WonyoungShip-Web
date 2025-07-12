import Image from "next/image"
import Link from "next/link"

import { LetterPreviewResponseType } from "@/__generated__/@types"
import LetterBackground from "@/assets/images/letter-background.png"
import { Text } from "@/components/common"

interface ListLetterItemProps {
  letter: LetterPreviewResponseType
}

export const ListLetterItem = ({ letter }: ListLetterItemProps) => {
  const receivedDate = new Date(letter.scheduleDate)

  const formattedReceiveDate = `${receivedDate.getMonth() + 1}월 ${receivedDate.getDate()}일`
  const isRead = letter.content !== null

  return (
    <Link
      href={`/letter/${letter.letterId}`}
      className="bg-blue-10 relative flex aspect-square flex-col justify-between overflow-hidden rounded-[13px] px-5 pt-5 pb-3"
    >
      <Image
        src={LetterBackground}
        alt=""
        className="absolute top-0 right-0 bottom-0 left-0 mix-blend-multiply"
      />
      <Text
        variant="body"
        size="medium"
        font="Ownglyph ryurue"
        color={isRead ? "neutral-80" : "brand"}
        className="line-clamp-6 leading-[100%] break-all whitespace-normal"
      >
        {isRead ? letter.content : "편지를 열면 내용을 확인할 수 있어요"}
      </Text>
      <Text variant="description" size="small" color="tertiary">
        {formattedReceiveDate}에 받은 편지
      </Text>
    </Link>
  )
}
