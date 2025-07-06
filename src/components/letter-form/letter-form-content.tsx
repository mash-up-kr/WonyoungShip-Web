"use client"

import { useRouter, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

import {
  LetterMetaReadResponseType,
  LetterMusicResponseType,
} from "@/__generated__/@types"
import { apiApi } from "@/__generated__/Api/Api.api"
import BasicHeader from "@/components/common/header/basic-header"
import { useLetterForm } from "@/contexts/letter-form-context"
import { useSnackbar } from "@/contexts/snackbar"

import Step1 from "./step1/step1"
import Step2 from "./step2/step2"
import Step3 from "./step3/step3"

const LetterFormContent = () => {
  const router = useRouter()
  const { showSnackbar } = useSnackbar()
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
      } catch {
        showSnackbar({
          message: "편지 정보를 불러오는데 실패했습니다.",
          icon: "clear",
        })
        router.replace("/")
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
      {step === 2 && <Step2 receiverName={receiverName} />}
      {step === 3 && <Step3 />}
    </section>
  )
}

export default LetterFormContent
