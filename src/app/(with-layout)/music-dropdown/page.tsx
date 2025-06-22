"use client"
import React, { useState } from "react"

import MusicDropdown from "@/components/music-dropdown"

const 음악_리스트 = [
  {
    id: "1",
    title: "Polaroid Love - SISO Wave",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    isRecommended: true,
    type: "나른한",
  },
  {
    id: "2",
    title: "Polaroid Love - SISO Wave1",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    isRecommended: false,
    type: "발랄한",
  },
  {
    id: "3",
    title: "Polaroid Love - SISO Wave2",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    isRecommended: false,
    type: "나른한",
  },
  {
    id: "4",
    title: "Polaroid Love - SISO Wave3",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    isRecommended: false,
    type: "나른한",
  },
]
const MusicDropdownPage = () => {
  const [musicList] = useState(음악_리스트)

  return (
    <>
      <MusicDropdown musicList={musicList} />
    </>
  )
}

export default MusicDropdownPage
