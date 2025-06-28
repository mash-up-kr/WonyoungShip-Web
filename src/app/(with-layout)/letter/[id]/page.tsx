import HeaderStar from "@/components/common/header/header-star"
import DateText from "@/components/letter/[id]/DateText"

type Weather = "sunny" | "cloudy" | "rainy" | "snow" | "shiny"

const tempData = {
    senderNickname : "익명의 너구리",
    isLiked : false,
    weather: "sunny",
    createdAt: "2025-06-22",
    scheduledAt: "2025-06-28",
    content: "안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!다! 안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!"
}

const LetterDetailPage = () => {
  return (
    <>
      <HeaderStar isLiked={tempData.isLiked} title={`${tempData.senderNickname}로부터`} />
      <DateText weather={tempData.weather as Weather} createdAt={tempData.createdAt} scheduledAt={tempData.scheduledAt}/>
    </>
  )
}

export default LetterDetailPage
