import { redirect } from "next/navigation"

import { apiApi } from "@/__generated__/Api/Api.api"
import HeaderStar from "@/components/common/header/header-star"
import { DateText, MusicPlay, LetterContent } from "@/components/letter/[id]"
import { WeatherServerName } from "@/utils/weather"

interface LetterDetailPageProps {
  params: Promise<{ id: string }>
}

const LetterDetailPage = async ({ params }: LetterDetailPageProps) => {
  const { id } = await params
  const letterId = parseInt(id)

  const response = await apiApi.readDetailLetter({ letterId })

  if (!response || !response.data || !response.data.data || response.error) {
    redirect("/home?error=letter-detail-error")
  }

  const letter = response.data.data
  return (
    <div className="from-background-white to-background-brandassistive flex h-dvh flex-col items-center bg-gradient-to-b px-4">
      <HeaderStar
        isLiked={letter.marked}
        title={`${letter.senderNickname}로부터`}
      />
      <DateText
        weather={letter.weatherType as WeatherServerName}
        createdAt={letter.createdDate}
        scheduledAt={letter.scheduleDate}
      />
      {letter.music && <MusicPlay music={letter.music} />}
      <LetterContent
        content={letter.content}
        fortuneCookie={letter.fortuneCookieMessage}
      />
    </div>
  )
}

export default LetterDetailPage
