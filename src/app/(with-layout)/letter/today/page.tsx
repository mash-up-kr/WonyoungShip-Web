import { LetterCard } from "@/components/common"
import BasicHeader from "@/components/common/header/basic-header"
import { TodayLetterCount } from "@/components/letter/today"

const LETTERS = {
  letters: [
    {
      content: "dsgfhjkhgfdghjklhgfdghjklhgfd",
      letterId: "1",
      scheduleDate: "2025-06-12",
      marked: false,
    },
    {
      content: null,
      letterId: "2",
      scheduleDate: "2025-06-12",
      marked: false,
    },
    {
      content:
        "dsg fhjk hgfdghjklhgfdghjklhgasdasdasdjbkbhvgjknbhvgcfhjgchjkgfhjgfghjghgfhhgfhvgfdtfyghjvbcfxdrtrfyguhjvcfdåfasdkjahsjdhkajsfsdnfdksjfkjsdhfsdsdgjahsdad",
      letterId: "3",
      scheduleDate: "2025-06-12",
      marked: true,
    },
    {
      content:
        "dsgfhjkhgfdgmngcftyguhjbmn vcfxdrtyuhjhjklhgfdghjklhgfasfdjhjkljjhjgkld",
      letterId: "4",
      scheduleDate: "2025-06-12",
      marked: true,
    },
    {
      content:
        "dsgfhjkhgfdghjklhfdghjbhvgcfdtyguhjbvgcfdhgfdghjklhgfasfdjhjkljjhjgkld",
      letterId: "5",
      scheduleDate: "2025-06-12",
      marked: false,
    },
    {
      content:
        "dsgfasdfghjbknbhvgcfchjhjkhㅁㄴㅇ머노윰너옴너ㅏ윰ㄴ어ㅗㅁㄴㅇㅁ너ㅗㅇㅎㅁ노아ㅓㅎㅁㄹ너암ㄴㅎgfdghjklhgfdghjklhgfasfdjhjkljjhjgkld",
      letterId: "6",
      scheduleDate: "2025-06-12",
      marked: true,
    },
    {
      content:
        "dsgfhjkhgasdasdasdasdasdasdafdghjklhgfdghjklhgfasfdjhjkljjhjgkld",
      letterId: "7",
      scheduleDate: "2025-06-12",
      marked: true,
    },
    {
      content: "dsgfhjkhgfdghjklhgfdghjasdasdasdasdasdklhgfasfdjhjkljjhjgkld",
      letterId: "8",
      scheduleDate: "2025-06-12",
      marked: true,
    },
    {
      content: "dsgfhjkhgfdghjklhgfdghjklhgfasfdasdasdasdasdajhjkljjhjgkld",
      letterId: "9",
      scheduleDate: "2025-06-12",
      marked: false,
    },
  ],
}

const TodayLettersPage = () => {
  const today = new Date()

  return (
    <>
      <BasicHeader centerText="편지 열기" />
      <div className="flex flex-col gap-2 px-3 pb-3">
        <TodayLetterCount count={LETTERS.letters.length} />
        <ul className="flex flex-col gap-2">
          {LETTERS.letters.map((letter) => (
            <li key={letter.letterId}>
              <LetterCard
                to={`/letter/${letter.letterId}`}
                content={letter.content ?? undefined}
                receivedAt={today}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodayLettersPage
