import LetterBackground from "@/assets/images/letter-background.png"
import { Text } from "@/components/common"

interface LetterContentProp {
  content: string
}

export const LetterContent = ({ content }: LetterContentProp) => {
  return (
    <section className="bg-background-brandassistive relative mt-4 flex h-[378px] w-full max-w-[343px] flex-col items-center justify-between overflow-hidden rounded-3xl pt-6 pb-6 pl-6 pr-1.5">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${LetterBackground.src})` }}
      />

      <div className="flex overflow-y-scroll z-10 custom-scrollbar pr-5">
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
