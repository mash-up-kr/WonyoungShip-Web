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
    <section className="bg-background-brandassistive relative mt-4 mb-6 flex h-[378px] w-full max-w-[343px] flex-col items-center justify-between overflow-hidden rounded-3xl pt-6 pr-1.5 pb-6 pl-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${LetterBackground.src})` }}
      />

      <div className="custom-scrollbar z-10 flex flex-col justify-between overflow-y-scroll pr-5 h-full">
        <Text
          variant="body"
          size="large"
          font="Ownglyph ryurue"
          className="leading-5 font-normal"
        >
          {content}
        </Text>

        {fortuneCookie && (
          <section className="mt-36 flex flex-col w-full items-start justify-end">
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

            <div className="relative bg-background-brandassistive overflow-hidden">
              {/* TODO : 잘린 이미지 받으면 수정하기 */}
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
                className="absolute inset-0 z-20 flex items-center justify-center leading-5 font-normal"
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
