import HeaderStar from "@/components/common/header/header-star"
import { DateText, MusicPlayer, LetterContent } from "@/components/letter/[id]"

type Weather = "sunny" | "cloudy" | "rainy" | "snow" | "shiny"

const tempData = {
  senderNickname: "익명의 너구리",
  isLiked: false,
  weather: "sunny",
  createdAt: "2025-06-22",
  scheduledAt: "2025-06-28",
  content:
    "안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!다! 안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!",
  music: { title: "Polaroid Love", singer: "SISO Wave", link: "" },
}

const LetterDetailPage = () => {
  return (
    <div className="from-background-white to-background-brandassistive flex h-dvh flex-col items-center bg-gradient-to-b px-4">
      <HeaderStar
        isLiked={tempData.isLiked}
        title={`${tempData.senderNickname}로부터`}
      />
      <DateText
        weather={tempData.weather as Weather}
        createdAt={tempData.createdAt}
        scheduledAt={tempData.scheduledAt}
      />
      <MusicPlayer music={tempData.music} />
      <LetterContent content={tempData.content}/>
    </div>
  )
}

export default LetterDetailPage
