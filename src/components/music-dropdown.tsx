"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  useState,
} from "react"

import { cn } from "@/utils/cn"

import { Icon, Text } from "./common"

/** TEMP */
export type MusicType = {
  id: string
  title: string
  link: string
  isRecommended: boolean
  type: string
}

export interface MusicDropdownProps {
  className?: HTMLAttributes<HTMLDivElement>["className"]
  musicList?: MusicType[]
}

const MusicDropdown = ({ className, musicList = [] }: MusicDropdownProps) => {
  const [playingMusicId, setPlayingMusicId] = useState<string | null>(null)
  const [selectedMusic, setSelectedMusic] = useState<MusicType | null>(null)

  const handlePlayMusic = (music: MusicType) => {
    if (playingMusicId === music.id) {
      setPlayingMusicId(null)
    } else {
      setPlayingMusicId(music.id)
    }
  }

  const handleSelectMusic = (music: MusicType) => {
    if (selectedMusic?.id === music.id) {
      setSelectedMusic(null)
    } else {
      setSelectedMusic(music)
    }
  }

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
                  <Icon icon="music" size="lg" />
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
                {musicList.map((music) => {
                  return (
                    <MenuItem key={`music-item-${music.id}`}>
                      {({}) => {
                        return (
                          <div
                            className="flex w-full items-center justify-between"
                            onClick={(e) => e.preventDefault()}
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
                                  {music.type}
                                </Text>
                              </div>
                            </div>

                            <div className="flex items-center gap-[8px]">
                              {playingMusicId === music.id ? (
                                <>
                                  <IconButton
                                    onClick={() => {
                                      handlePlayMusic(music)
                                    }}
                                  >
                                    <Icon
                                      className="cursor-pointer"
                                      icon="playing"
                                      size="lg"
                                    />
                                  </IconButton>

                                  <IconButton
                                    onClick={() => {
                                      handleSelectMusic(music)
                                    }}
                                  >
                                    {selectedMusic?.id === music.id ? (
                                      <Icon icon="checked" size="lg" />
                                    ) : (
                                      <Icon icon="unchecked" size="lg" />
                                    )}
                                  </IconButton>
                                </>
                              ) : (
                                <>
                                  <IconButton
                                    onClick={() => {
                                      handlePlayMusic(music)
                                    }}
                                  >
                                    <Icon icon="play" size="lg" />
                                  </IconButton>
                                  <IconButton
                                    onClick={() => {
                                      handleSelectMusic(music)
                                    }}
                                  >
                                    {selectedMusic?.id === music.id ? (
                                      <Icon icon="checked" size="lg" />
                                    ) : (
                                      <Icon icon="unchecked" size="lg" />
                                    )}
                                  </IconButton>
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

export const IconButton = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      {...props}
      type="button"
      className={cn("cursor-pointer", props.className)}
    >
      {children}
    </button>
  )
}
