// TODO : 현봉 오빠 layout merge 하면 파일 레이아웃에 맞춰 옮기기

import { Text } from "@/components/common"

import { WriteLetterButton, LetterCountdown } from "./_components"

const tempData = {
  letterCount: 5,
}

export default function Home() {
  return (
    <div className="flex flex-col px-2 pt-2 pb-6">
      <WriteLetterButton />
      <section className="mt-10 mb-4 flex flex-col">
        <div className="flex px-4">
          <div className="flex gap-2">
            <Text variant="heading" size="small" className="font-bold">
              나에게 오고 있는 편지
            </Text>
            <Text variant="heading" size="small" color="tertiary">
              {tempData.letterCount}
            </Text>
          </div>
          {/* TODO : IconButton merge하면 추가하기 */}
        </div>
      </section>
      <LetterCountdown />
    </div>
  )
}
