"use client"

import { useParams } from "next/navigation"

import { tagApi } from "@/__generated__/Tag/Tag.api"

import { Button } from "../common"

export const RegisterTagButton = () => {
  const param = useParams()
  const tagId = param.id as string

  const handleRegisterTag = async () => {
    const response = await tagApi.registerTag({
      tag: tagId,
      // TODO: 지워야 함
      data: {
        memberId: 0,
      },
    })

    alert(response.data.message)
  }

  return (
    <Button variant="blue" className="w-[167.5px]" onClick={handleRegisterTag}>
      지금 계정으로 등록하기
    </Button>
  )
}
