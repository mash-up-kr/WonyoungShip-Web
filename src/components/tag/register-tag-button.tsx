"use client"

import { useParams, useRouter } from "next/navigation"

import { apiApi } from "@/__generated__/Api/Api.api"

import { Button } from "../common"

export const RegisterTagButton = () => {
  const tagId = useParams().id as string
  const router = useRouter()

  const handleRegisterTag = async () => {
    await apiApi.registerTag({
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
