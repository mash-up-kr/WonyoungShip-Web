// TODO : 현봉 오빠 layout merge 하면 파일 레이아웃에 맞춰 옮기기

import { Text } from "@/components/common"

import { WriteLetterButton, LetterCountdown } from "./_components"

// TODO : API 연결 시 제거
const tempData = {
  letterCount: 5,
  letterList: [
    {
      id: 1,
      scheduleDate: "2025-06-02",
    },
    {
      id: 2,
      scheduleDate: "2025-06-03",
    },
    {
      id: 3,
      scheduleDate: "2025-06-03",
    },
  ],
}

export default function Home() {
  return (
    <div className="flex flex-col px-2 pt-2 pb-6">
      <WriteLetterButton />
      <section className="mt-10 mb-4 flex flex-col">
        <div className="flex px-4">
          <h2 className="flex gap-2">
            <Text variant="heading" size="small" className="font-bold">
              나에게 오고 있는 편지
            </Text>
            <Text variant="heading" size="small" color="tertiary">
              {tempData.letterCount}
            </Text>
          </h2>
          {/* TODO : IconButton merge하면 추가하기 */}
        </div>
      </section>
      <LetterCountdown letterList={tempData.letterList}/>
    </div>
  )
}
