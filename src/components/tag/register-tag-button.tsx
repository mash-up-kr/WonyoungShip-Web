"use client"

import { useParams, useRouter } from "next/navigation"

import { tagApi } from "@/__generated__/Tag/Tag.api"

import { Button } from "../common"

export const RegisterTagButton = () => {
  const tagId = useParams().id as string
  const router = useRouter()

  const handleRegisterTag = async () => {
    await tagApi.registerTag({
      tag: tagId,
    })

    router.replace("/tag/success")
  }

  return (
    <Button variant="blue" className="w-[167.5px]" onClick={handleRegisterTag}>
      지금 계정으로 등록하기
    </Button>
  )
}
