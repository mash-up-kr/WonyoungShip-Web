"use client"

import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

import {
  LetterMetaReadResponseType,
  LetterMusicResponseType,
} from "@/__generated__/@types"
import { apiApi } from "@/__generated__/Api/Api.api"
import BasicHeader from "@/components/common/header/basic-header"
import { useLetterForm } from "@/contexts/letter-form-context"

import Step1 from "./step1/step1"
import Step2 from "./step2/step2"
import Step3 from "./step3/step3"

const LetterFormContent = () => {
  const searchParams = useSearchParams()
  const receiverId = searchParams.get("receiverId")
  const { step, setStep, updateFormData } = useLetterForm()
  const [musicList, setMusicList] = useState<LetterMusicResponseType[]>([])
  const [receiverName, setReceiverName] = useState("")

  const initLetterMeta = (letterMeta?: LetterMetaReadResponseType) => {
    if (!letterMeta) return
    const { musics, receiverNickname, senderNickname } = letterMeta
    setReceiverName(receiverNickname)
    updateFormData({ senderNickname: senderNickname || "" })
    if (musics && musics.length > 0) {
      setMusicList(musics)
    } else {
      // TODO: DB 데이터 추가되면 삭제
      setMusicList(mockMusics)
    }
  }

  useEffect(() => {
    const getLetterMeta = async () => {
      try {
        const response = await apiApi.readLetterMeta({
          query: {
            receiverId: Number(receiverId) || -1,
          },
        })
        initLetterMeta(response.data?.data)
      } catch (error) {
        console.error("API 호출 중 에러:", error)
      }
    }
    getLetterMeta()
  }, [])

  return (
    <section className="relative h-dvh w-full">
      <BasicHeader
        hasBackButton={step === 2}
        onClickBackButton={() => setStep(step - 1)}
        centerText={step === 1 ? `To. ${receiverName}` : ""}
      />
      {step === 1 && <Step1 musicList={musicList} />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </section>
  )
}

export default LetterFormContent

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
