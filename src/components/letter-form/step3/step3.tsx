import Lottie from "lottie-react"
import { useRouter } from "next/navigation"
import React from "react"

import { Button, Text } from "@/components/common"
import { ERoutes } from "@/routes"

import { HOME_LOTTIES } from "../../../../public/assets/lottie"

const Step3 = () => {
  const router = useRouter()

  const onConfirm = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/api/oauth/kakao/token`,
    )
    const token = await data.json()

    router.push(token ? ERoutes.HOME : ERoutes.LANDING)
  }

  return (
    <section className="px-[16px]">
      <Text
        as="h2"
        variant="heading"
        size="small"
        color="primary"
        className="mt-[48px] flex justify-center"
      >
        편지가 보내졌어요!
      </Text>

      <article className="mt-[78px] flex justify-center">
        <Lottie
          animationData={HOME_LOTTIES.SHIP_FLUTTING}
          className="h-[240px] w-[240px]"
        />
      </article>

      <footer className="fixed right-0 bottom-0 left-0 px-[16px] py-[24px]">
        <div className="mx-auto max-w-[420px]">
          <Button
            variant="blue"
            text="완료"
            className="mt-[16px]"
            onClick={onConfirm}
          />
        </div>
      </footer>
    </section>
  )
}

export default Step3
