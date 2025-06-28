import HeaderStar from "@/components/common/header/header-star"

const tempData = {
    senderNickname : "익명의 너구리",
    isLiked : false,
    weather: "",
    createdAt: "",
    scheduledAt: "",
    content: "안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!다! 안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!안녕 오랜만이다!"
}

const LetterDetailPage = () => {
  return (
    <>
      <HeaderStar isLiked={tempData.isLiked} title={`${tempData.senderNickname}로부터`} />
    </>
  )
}

export default LetterDetailPage
