import Link from "next/link"

import { LetterPreviewResponseType } from "@/__generated__/@types"

import { Icon } from "./icon"
import { Text } from "./text"

interface LetterCardProps {
  to: string
  receivedAt: Date
  content: LetterPreviewResponseType["content"]
}

const UNREAD_CONTENT = "편지를 열면 내용을 확인할 수 있어요"

export const LetterCard = ({ content, receivedAt, to }: LetterCardProps) => {
  const formattedReceiveDate = `${receivedAt.getMonth() + 1}월 ${receivedAt.getDate()}일`
  const isRead = content !== null

  if (isNaN(receivedAt.getTime())) {
    return null
  }

  return (
    <Link
      href={to}
      className="bg-background-white flex w-full items-center gap-3 rounded-2xl p-4"
    >
      <Icon icon={isRead ? "openLetter" : "letter"} size="xl" />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Text variant="description" size="large" color="tertiary">
          {formattedReceiveDate}에 받은 편지
        </Text>
        <Text
          variant="description"
          size="large"
          color={isRead ? "secondary" : "brand"}
          className="truncate"
        >
          {isRead ? content : UNREAD_CONTENT}
        </Text>
      </div>
    </Link>
  )
}
