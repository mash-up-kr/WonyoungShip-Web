import LetterBackground from "@/assets/images/letter-background.png"
import { Text } from "@/components/common"

interface LetterContentProp {
  content: string
}

export const LetterContent = ({ content }: LetterContentProp) => {
  return (
    <section className="bg-background-brandassistive relative mt-4 flex h-[378px] w-full max-w-[343px] flex-col items-center justify-between overflow-hidden rounded-3xl p-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${LetterBackground.src})` }}
      />

      {/* TODO : 스크롤바 위치 조정 + 커스텀 하기 */}
      <div className="flex overflow-y-scroll z-10">
        <Text
          variant="body"
          size="large"
          font="Ownglyph ryurue"
          className="font-normal leading-5"
        >
          {content}
        </Text>
      </div>
    </section>
  )
}
