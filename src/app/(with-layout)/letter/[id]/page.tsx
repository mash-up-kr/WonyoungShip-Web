import { apiApi } from "@/__generated__/Api/Api.api"
import HeaderStar from "@/components/common/header/header-star"
import { DateText, MusicPlay, LetterContent } from "@/components/letter/[id]"
import { WeatherServerName } from "@/utils/weather"

const LetterDetailPage = async () => {
  const response = await apiApi.readDetailLetter({ letterId: 7 })

  const letter = response.data?.data ?? {
    senderNickname: "",
    marked: false,
    createdDate: "",
    scheduleDate: "",
    weatherType: "SUNNY",
    content: "",
    music: {
      id: 0,
      isRecommend: false,
      title: "",
      artist: "",
      url: "",
      mood: "",
    },
    fortuneCookieMessage: null,
  }

  console.log(letter)
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
      <MusicPlay music={letter.music ?? {title: "전송된 노래가 없어요." , artist: ""}} />
      <LetterContent
        content={letter.content}
        fortuneCookie={letter.fortuneCookieMessage}
      />
    </div>
  )
}

export default LetterDetailPage
