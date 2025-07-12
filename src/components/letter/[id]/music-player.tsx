"use client"

import { useCallback, useEffect, useState } from "react"

import { Text, Icon } from "@/components/common"
import { audioManager } from "@/utils/music/audio-manager"

interface MusicType {
  id?: number
  isRecommend?: boolean
  title?: string
  artist?: string
  url?: string
  mood?: string
}

interface MusicProp {
  music: MusicType
}

export const MusicPlay = ({ music }: MusicProp) => {
  const [playMusic, setPlayMusic] = useState<boolean>(false)

  const initMusicList = useCallback(() => {
    if (music.url) {
      audioManager.init([music.url])
    }
  }, [music.url])

  useEffect(
    function initAudioManager() {
      initMusicList()
    },
    [initMusicList, music.url],
  )

  const handleClickMusicPlay = () => {
    if (playMusic) {
      audioManager.pause(0)
      setPlayMusic(false)
    } else {
      audioManager.play(0)
      setPlayMusic(true)
    }
  }
  return (
    <div className="bg-background-white mt-8 flex w-full max-w-[343px] items-center justify-between rounded-2xl px-3 py-2 shadow-[0px_8px_40px_0px_rgba(101,142,185,0.10)]">
      <div className="flex h-[30px] items-center gap-2">
        <Icon icon="cd" size="lg" />
        <Text
          variant="body"
          size="small"
          className="max-w-[257px] overflow-hidden font-medium text-ellipsis whitespace-nowrap"
          color="secondary"
        >
          {music.title} - {music.artist}
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
