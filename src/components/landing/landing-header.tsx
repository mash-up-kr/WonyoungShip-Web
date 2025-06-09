import Image from "next/image"

import Logo from "@/assets/images/logo.png"

import { Text } from "../common"

export const LandingHeader = () => {
  return (
    <header className="flex flex-col items-center gap-5 pt-[1.875rem] pb-7">
      <h1>
        <Image src={Logo} alt="둥둥" width={60} height={60} />
      </h1>
      <h2 className="flex flex-col items-center gap-2">
        <Text
          variant="body"
          font="Ownglyph ryurue"
          color="secondary"
          className="text-xl leading-[100%] font-normal"
        >
          시간이 천천히 흐르는 이곳에서
        </Text>
        <Text
          variant="body"
          font="Ownglyph ryurue"
          className="text-2xl leading-[100%] font-normal"
        >
          특별한 편지를 보내보세요
        </Text>
      </h2>
    </header>
  )
}
