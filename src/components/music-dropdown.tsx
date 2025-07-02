"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from "react"

import { LetterMusicResponseType } from "@/__generated__/@types"
import { cn } from "@/utils/cn"
import { AudioManager } from "@/utils/music/audio-manager"

import { Icon, Text } from "./common"

const ICON_MAP = {
  play: <Icon icon="play" size="lg" />,
  playing: <Icon icon="playing" size="lg" />,
  checked: <Icon icon="checked" size="lg" />,
  unchecked: <Icon icon="unchecked" size="lg" />,
}

export const IconButton = ({
  icon,
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: "play" | "playing" | "checked" | "unchecked"
  }
>) => {
  return (
    <button
      {...props}
      type="button"
      className={cn("cursor-pointer", props.className)}
    >
      {ICON_MAP[icon]}
    </button>
  )
}

export interface MusicDropdownProps {
  className?: HTMLAttributes<HTMLDivElement>["className"]
  musicList?: LetterMusicResponseType[]
}

const MusicDropdown = ({ className, musicList = [] }: MusicDropdownProps) => {
  const audioManager = new AudioManager()

  const [playingMusicId, setPlayingMusicId] = useState<number | null>(null)
  const [selectedMusic, setSelectedMusic] =
    useState<LetterMusicResponseType | null>(null)

  const handlePlayMusic = ({
    index,
    music,
  }: {
    index: number
    music: LetterMusicResponseType
  }) => {
    audioManager.toggle(index)
    if (playingMusicId === music.id) {
      setPlayingMusicId(null)
    } else {
      setPlayingMusicId(music.id)
    }
  }

  const handleSelectMusic = (music: LetterMusicResponseType) => {
    if (selectedMusic?.id === music.id) {
      setSelectedMusic(null)
    } else {
      setSelectedMusic(music)
    }
  }

  useEffect(() => {
    if (musicList.length > 0) {
      const urls = musicList.map((music) => music.url)
      audioManager.init(urls)
    }
  }, [musicList])

  return (
    <div className={cn("h-[46px] w-full max-w-[343px]", className)}>
      <Menu>
        {({ open }) => {
          return (
            <div className="flex flex-col items-center">
              {open && (
                <div
                  className="bg-background-dimmer fixed inset-0 z-40 backdrop-blur-[7.5px]"
                  aria-hidden="true"
                />
              )}

              <MenuButton className="bg-background-white relative z-50 inline-flex w-full items-center justify-between rounded-[16px] px-[12px] py-[11px] shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white">
                <div className="flex items-center gap-[8px]">
                  {selectedMusic?.id ? (
                    <Icon icon="cd" size="lg" />
                  ) : (
                    <Icon icon="music" size="lg" />
                  )}

                  <Text variant="body" size="small" color="secondary">
                    {selectedMusic?.title ?? "편지에 노래를 담아보세요"}
                  </Text>
                </div>

                {open ? (
                  <Icon
                    icon="chevronDown"
                    className="rotate-180 transition-transform duration-200"
                    size="xs"
                    stroke="tertiary"
                  />
                ) : (
                  <Icon
                    icon="chevronDown"
                    className="transition-transform duration-200"
                    size="xs"
                    stroke="tertiary"
                  />
                )}
              </MenuButton>

              <MenuItems
                transition
                className="bg-background-white relative z-50 mt-[8px] flex w-full max-w-[319px] flex-col gap-[20px] rounded-[12px] p-[16px] focus:outline-none"
              >
                {musicList.map((music, index) => {
                  return (
                    <MenuItem key={`music-item-${music.id}`}>
                      {({}) => {
                        return (
                          <div
                            className="flex w-full items-center justify-between"
                            onClick={(e) => {
                              e.preventDefault()
                              handleSelectMusic(music)
                            }}
                          >
                            <div className="flex flex-col">
                              <Text
                                variant="body"
                                size="small"
                                color="secondary"
                              >
                                {music.title}
                              </Text>

                              <div className="flex items-center gap-[4px]">
                                {music.isRecommended && (
                                  <Text
                                    variant="description"
                                    size="small"
                                    color="brand"
                                  >
                                    추천 오디오
                                  </Text>
                                )}

                                <Text
                                  variant="description"
                                  size="small"
                                  color="tertiary"
                                >
                                  {music.mood}
                                </Text>
                              </div>
                            </div>

                            <div className="flex items-center gap-[8px]">
                              {playingMusicId === music.id ? (
                                <>
                                  <IconButton
                                    icon="playing"
                                    onClick={() => {
                                      handlePlayMusic({
                                        index,
                                        music,
                                      })
                                    }}
                                  />

                                  <IconButton
                                    icon={
                                      selectedMusic?.id === music.id
                                        ? "checked"
                                        : "unchecked"
                                    }
                                    onClick={() => {
                                      handleSelectMusic(music)
                                    }}
                                  />
                                </>
                              ) : (
                                <>
                                  <IconButton
                                    icon="play"
                                    onClick={() => {
                                      handlePlayMusic({
                                        index,
                                        music,
                                      })
                                    }}
                                  />

                                  <IconButton
                                    icon={
                                      selectedMusic?.id === music.id
                                        ? "checked"
                                        : "unchecked"
                                    }
                                    onClick={() => {
                                      handleSelectMusic(music)
                                    }}
                                  />
                                </>
                              )}
                            </div>
                          </div>
                        )
                      }}
                    </MenuItem>
                  )
                })}
              </MenuItems>
            </div>
          )
        }}
      </Menu>
    </div>
  )
}

export default MusicDropdown
