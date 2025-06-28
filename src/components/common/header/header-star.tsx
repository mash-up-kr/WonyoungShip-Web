"use client"

import { useState } from "react"

import { Icon } from "../icon"

import BasicHeader from "./basic-header"

interface HeaderStarType {
  isLiked: boolean
  title: string
}

const HeaderStar = ({ isLiked, title }: HeaderStarType) => {
  const [liked, setLiked] = useState<boolean>(isLiked)

  const handleClickLike = () => {
    setLiked((prev) => !prev)

    // TODO : 좋아요 버튼 클릭 API 연결
  }

  return (
    <BasicHeader    
      hasBackButton
      centerText={title}
      rightSlot={
        <button onClick={handleClickLike}>
          <Icon
            icon="star"
            size="lg"
            fill={liked ? "secondary" : "disabled"}
          />
        </button>
      }
    />
  )
}

export default HeaderStar
