"use client"

import { Textarea } from "@headlessui/react"
import clsx from "clsx"
import React, { useEffect, useState } from "react"

import {
  LetterMusicResponseType,
  LetterWriteRequestType,
} from "@/__generated__/@types"
import { apiApi } from "@/__generated__/Api/Api.api"
import { WeatherIconName } from "@/assets/svg/weather"
import { Button, Icon, Text, WeatherIcon } from "@/components/common"
import BaseDialog from "@/components/common/dialog/base-dialog"
import MusicDropdown from "@/components/music-dropdown"
import { useDialog } from "@/contexts/dialog-context"
import { useLetterForm } from "@/contexts/letter-form-context"
import { useSnackbar } from "@/contexts/snackbar"

import { validateStep1 } from "../utils/step-validate"

const WEATHER_MAP: Record<string, LetterWriteRequestType["weather"]> = {
  sunny: "SUNNY",
  cloudy: "CLOUDY",
  rainy: "RAINY",
  snow: "SNOWY",
  shiny: "NIGHT_SHINING",
}

const WeatherList = () => {
  const { formData, updateFormData } = useLetterForm()

  const getWeatherLabel = (weather: LetterWriteRequestType["weather"]) => {
    switch (weather) {
      case "SUNNY":
        return "맑은 날"
      case "CLOUDY":
        return "흐린 날"
      case "RAINY":
        return "비오는 날"
      case "SNOWY":
        return "눈오는 날"
      case "NIGHT_SHINING":
        return "빛나는 날"
    }
  }

  const handleWeatherClick = (weather: LetterWriteRequestType["weather"]) => {
    updateFormData({
      weather:
        formData.weather.toLocaleLowerCase() === weather ? undefined : weather,
    })
  }

  return (
    <div className="flex w-full justify-center gap-[12px] px-[16px]">
      {Object.entries(WEATHER_MAP).map(([key, value]) => {
        const isSelected = formData.weather === value

        return (
          <button
            key={`weather-item-${key}`}
            onClick={() => handleWeatherClick(value)}
            className="flex min-w-[50px] cursor-pointer flex-col items-center gap-[6px]"
            type="button"
          >
            <WeatherIcon
              weather={key as WeatherIconName}
              size="lg"
              color={isSelected ? undefined : "disabled"}
            />
            <Text
              variant="description"
              size="large"
              color={isSelected ? "secondary" : "neutral-30"}
            >
              {getWeatherLabel(value)}
            </Text>
          </button>
        )
      })}
    </div>
  )
}

const Step1 = () => {
  const { open, close } = useDialog()
  const { showSnackbar } = useSnackbar()
  const { formData, updateFormData, setStep } = useLetterForm()
  const [isEditNameDialogOpen, setIsEditNameDialogOpen] = useState(false)
  const [tempAuthorName, setTempAuthorName] = useState(formData.senderNickname)
  const [musicList, setMusicList] = useState<LetterMusicResponseType[]>([])

  const handleNext = () => {
    const validateResult = validateStep1({ formData })
    const { message } = validateResult
    if (message !== "통과") {
      showSnackbar({ message, icon: "clear" })
      return
    }
    setStep(2)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({ content: e.target.value })
  }

  const handleAuthorNameSave = () => {
    updateFormData({ senderNickname: tempAuthorName })
    setIsEditNameDialogOpen(false)
  }

  const onOpenConfirmDialog = () => {
    open({
      type: "confirm",
      props: {
        title: "편지 작성을 중단하시나요?",
        desc: "작성하던 편지는 저장되지 않아요",
        cancelText: "취소",
        confirmText: "나가기",
        onCancel: close,
        onConfirm: close,
      },
    })
  }

  const handleCancel = () => {
    // TODO: 작성 취소 확인 다이얼로그
    // resetForm() 호출
    onOpenConfirmDialog()
  }

  useEffect(() => {
    const getLetterMeta = async () => {
      try {
        const letterMeta = await apiApi.readLetterMeta({
          query: {
            receiverId: 1,
          },
        })

        console.log("#letterMeta.data:", letterMeta?.data.data?.musics)

        const { musics } = letterMeta?.data.data || {}

        if (musics && musics.length > 0) {
          setMusicList(musics)
        } else {
          const mockMusics: LetterMusicResponseType[] = [
            {
              id: 1,
              title: "봄날",
              artist: "BTS",
              url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4",
              mood: "따뜻한",
              isRecommended: true,
            },
            {
              id: 2,
              title: "밤편지",
              artist: "아이유",
              url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4",
              mood: "감성적인",
              isRecommended: false,
            },
            {
              id: 3,
              title: "가을아침",
              artist: "아이유",
              url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4",
              mood: "차분한",
              isRecommended: false,
            },
            {
              id: 4,
              title: "호랑이",
              artist: "QWER",
              url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4",
              mood: "신나는",
              isRecommended: false,
            },
            {
              id: 5,
              title: "Drama",
              artist: "aespa",
              url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4",
              mood: "강렬한",
              isRecommended: false,
            },
          ]
          setMusicList(mockMusics)
        }

        const landingContent = await apiApi.getLandingContent()

        console.log("#landingContent.data:", landingContent?.data)
      } catch (error) {
        console.error("API 호출 중 에러:", error)
      }
    }
    getLetterMeta()
  }, [])

  return (
    <section>
      {/* 날씨영역 */}
      <WeatherList />

      {/* 음악 드롭다운 */}
      <div className="mt-[24px] flex place-content-center">
        <MusicDropdown musicList={musicList} />
      </div>

      <div className="bg-background-assistive mx-[16px] mt-[24px] flex h-[346px] flex-col rounded-[20px] px-[24px] pt-[24px]">
        <Textarea
          value={formData.content}
          onChange={handleContentChange}
          className={clsx(
            "text-text-primary font-ryurue min-h-[260px] w-full resize-none pb-[8px] text-[18px]",
            "data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
            "custom-scrollbar pr-[10px]",
          )}
          placeholder="미래의 나에게 편지를 자유롭게 작성해주세요!"
        />
        <div className="flex items-center justify-end gap-[4px]">
          <Text
            variant="body"
            size="medium"
            color="secondary"
            font="Ownglyph ryurue"
          >
            From.{formData.senderNickname}
          </Text>
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setIsEditNameDialogOpen(true)}
          >
            <Icon icon="pencil" size="md" />
          </button>
        </div>
      </div>

      <footer className="fixed right-0 bottom-0 left-0 px-[16px] py-[24px]">
        <div className="mx-auto max-w-[420px]">
          <div className="flex gap-[8px]">
            <Button
              variant="gray"
              className="flex h-[48px] flex-1 items-center justify-center"
              onClick={handleCancel}
            >
              <Text variant="body" size="small" color="tertiary">
                작성취소
              </Text>
            </Button>
            <Button
              variant="blue"
              className="flex h-[48px] flex-1 items-center justify-center"
              onClick={handleNext}
            >
              <Text variant="body" size="small" color="inverse">
                다음
              </Text>
            </Button>
          </div>
        </div>
      </footer>

      <BaseDialog
        isOpen={isEditNameDialogOpen}
        onClose={() => setIsEditNameDialogOpen(false)}
      >
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <input
            type="text"
            value={tempAuthorName}
            onChange={(e) => setTempAuthorName(e.target.value)}
            className={clsx(
              "font-ryurue border-border-primary h-[25px] w-[77px] border-b-[1.5px] pb-[4px] text-center text-[22px]",
              "focus:not-data-focus:outline-none",
            )}
          />
          <Button
            variant="primary"
            className="flex h-[32px] w-[45px] items-center justify-center"
            onClick={handleAuthorNameSave}
          >
            <Text variant="body" size="small" color="inverse">
              완료
            </Text>
          </Button>
        </div>
      </BaseDialog>
    </section>
  )
}

export default Step1
