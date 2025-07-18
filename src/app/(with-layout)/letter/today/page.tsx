import dayjs from "dayjs"

import { apiApi } from "@/__generated__/Api/Api.api"
import { LetterCard, PageRefresher } from "@/components/common"
import BasicHeader from "@/components/common/header/basic-header"
import { TodayLetterCount } from "@/components/letter/today"
import { ROUTES } from "@/constants/routes"

const TodayLettersPage = async () => {
  const today = new Date()

  const response = await apiApi.readDailyLetters({
    query: { date: dayjs().format("YYYY-MM-DD") },
  })

  const letters = response.data.data?.letters ?? []

  return (
    <>
      <BasicHeader centerText="편지 열기" />
      <div className="flex flex-col gap-2 px-3 pb-3">
        <TodayLetterCount count={letters.length} />
        <ul className="flex flex-col gap-2">
          {letters.map((letter) => (
            <li key={letter.letterId}>
              <LetterCard
                to={`${ROUTES.PAGE.LETTER}/${letter.letterId}`}
                content={letter.content}
                receivedAt={today}
              />
            </li>
          ))}
        </ul>
      </div>
      <PageRefresher />
    </>
  )
}

export default TodayLettersPage
