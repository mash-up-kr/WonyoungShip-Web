"use client"

import { useState } from "react"

import { apiApi } from "@/__generated__/Api/Api.api"

import { Icon } from "../icon"

import BasicHeader from "./basic-header"

interface HeaderStarType {
  isLiked: boolean
  title: string
  letterId: number
}

const HeaderStar = ({ isLiked, title, letterId }: HeaderStarType) => {
  const [liked, setLiked] = useState<boolean>(isLiked)

   const handleClickLike = async () => {
    const previousLikedState = liked 
    setLiked((prev) => !prev) 

    try {
      await apiApi.markedLetter({ letterId: letterId })
    } catch (error) {
      setLiked(previousLikedState)
      console.error("편지 즐겨찾기 요청에 실패하였습니다.:", error)
    }
  }

  return (
    <BasicHeader
      hasBackButton
      centerText={title}
      rightSlot={
        <button onClick={handleClickLike}>
          <Icon icon="star" size="lg" fill={liked ? "secondary" : "disabled"} />
        </button>
      }
    />
  )
}

export default HeaderStar
