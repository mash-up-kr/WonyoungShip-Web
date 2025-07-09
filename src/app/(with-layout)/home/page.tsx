'use client';

import { useEffect, useState } from "react";

import { LettersWeeklyCountResponseType } from "@/__generated__/@types";
import { apiApi } from "@/__generated__/Api/Api.api";
import { Header, Text } from "@/components/common"
import {
  WriteLetterButton,
  LetterCountdown,
  CopyAddressButton,
} from "@/components/home"

const errorData = {
    notViewedCount: 0,
    receivedCountPerDay: [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  }

export default function Home() {
   const [letterList, setLetterList] =
    useState<LettersWeeklyCountResponseType | undefined>()

useEffect(() => {
   const fetchLetters = async () => {
      try {
        const response = await apiApi.readWeeklyCount()
        const letters = response.data.data

        setLetterList(letters ?? errorData)
      } catch (error) {
        setLetterList( errorData)
        console.error("편지 목록을 가져오는 데 실패했습니다:", error)
      }
    }

    fetchLetters()
}, [])


  const totalReceivedCount = letterList?.receivedCountPerDay?.reduce((sum, count) => sum + count, 0) ?? 0;


  return (
    <>
    <Header notificationCount={letterList?.notViewedCount ?? 0}/>
    <div className="flex flex-col px-2 pt-2 pb-6">
      <WriteLetterButton />
      <section className="mt-10 mb-4 flex flex-col">
        <div className="flex justify-between px-4">
          <h2 className="flex gap-2">
            <Text variant="heading" size="small" className="font-bold">
              나에게 오고 있는 편지
            </Text>
            <Text variant="heading" size="small" color="tertiary">
              {totalReceivedCount}
            </Text>
          </h2>
          <CopyAddressButton />
        </div>
      </section>
      <LetterCountdown letterCountPerDate={letterList?.receivedCountPerDay ?? [0,0,0,0,0,0,0]} />
    </div></>
    
  )
}
