import Image from "next/image"

import FortuneCookiePaper from "@/assets/images/fortune-cookie-paper.png"
import LetterBackground from "@/assets/images/letter-background.png"
import { Icon, Text } from "@/components/common"

interface LetterContentProp {
  content: string
  fortuneCookie?: string | null
}

export const LetterContent = ({
  content,
  fortuneCookie,
}: LetterContentProp) => {
  return (
    <section className="bg-background-brandassistive relative mt-4 mb-6 flex h-[378px] w-full max-w-[343px] flex-col justify-between overflow-hidden rounded-3xl pt-6 pr-1.5 pb-6 pl-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${LetterBackground.src})` }}
      />

      <div className="custom-scrollbar z-10 flex h-full flex-col justify-between overflow-y-scroll pr-5">
        <div className="flex-shrink-0">
          <Text
            variant="body"
            size="large"
            font="Ownglyph ryurue"
            className="text-left leading-5 font-normal"
          >
            {content}
          </Text>
        </div>

        {fortuneCookie && (
          <section className="mt-36 flex w-full flex-col items-start justify-end">
            <div className="flex gap-1">
              <Text
                variant="body"
                size="large"
                font="Ownglyph ryurue"
                color="secondary"
                className="flex leading-5 font-normal"
              >
                PS. 너를 위한 포춘쿠키야
              </Text>
              <Icon icon="fortuneCookie" />
            </div>
            <div className="relative flex w-full justify-center">
              <Image
                src={FortuneCookiePaper}
                alt="포춘쿠키 배경"
                className="z-15 object-contain opacity-85 mix-blend-multiply"
                priority
                width={280}
              />
              <Text
                variant="body"
                size="large"
                font="Ownglyph ryurue"
                color="secondary"
                className="absolute top-1/2 left-1/2 z-20 w-full max-w-[240px] -translate-x-1/2 -translate-y-1/2 transform text-center leading-5 font-normal"
              >
                {fortuneCookie}
              </Text>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
