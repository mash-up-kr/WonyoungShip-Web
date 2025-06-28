"use client"

import { useState } from "react"

import { Text, Icon } from "@/components/common"

interface MusicType {
  title: string
  link: string
  singer: string
}

interface MusicProp {
  music: MusicType
}

export const MusicPlayer = ({ music }: MusicProp) => {
  const [playMusic, setPlayMusic] = useState<boolean>(false)

  const handleClickMusicPlay = () => {
    setPlayMusic((prev) => !prev)

    // TODO : 노래 실행 로직 추가
  }

  return (
    <div className="bg-background-white mt-8 flex w-full items-center justify-between rounded-2xl px-3 py-2 shadow-[0px_8px_40px_0px_rgba(101,142,185,0.10)]">
      <div className="flex h-[30px] items-center gap-2">
        <Icon icon="cd" size="lg" />
        <Text
          variant="body"
          size="small"
          className="font-medium"
          color="secondary"
        >
          {music.title} - {music.singer}
        </Text>
      </div>
      <button onClick={handleClickMusicPlay}>
        {playMusic ? (
          <Icon icon="playing" size="lg" />
        ) : (
          <Icon icon="play" size="lg" />
        )}
      </button>
    </div>
  )
}
