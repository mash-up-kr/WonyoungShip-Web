import { Text } from "@/components/common"
import { WeatherIcon } from "@/components/common"
import { getDateDiffInDays, formatToYYMMDD } from "@/utils/date"
import { WeatherServerName, convertServerToIconWeatherName } from "@/utils/weather"

import LetterUnderline from "../../../assets/svg/letter-underline.svg"


interface DateText {
  weather: WeatherServerName
  createdAt: string
  scheduledAt: string
}

export const DateText = ({ weather, createdAt, scheduledAt }: DateText) => {

    const dayPassed = getDateDiffInDays(createdAt, scheduledAt)

  return (
    <div className="mt-6 flex flex-col items-center">
      <div className="flex items-center gap-1">
        <WeatherIcon weather={convertServerToIconWeatherName(weather)} size="sm" color="secondary" />
        <Text
          variant="body"
          font="Ownglyph ryurue"
          size="small"
          color="secondary"
          className="font-normal"
        >
        {formatToYYMMDD(createdAt)}
        </Text>
        <Text
          variant="body"
          font="Ownglyph ryurue"
          size="small"
          color="tertiary"
          className="font-normal"
        >
         에 바다로 띄운 편지가
        </Text>
      </div>
      <LetterUnderline />
      <div>
        <Text
          variant="body"
          font="Ownglyph ryurue"
          size="small"
          color="secondary"
          className="font-normal"
        >
          {dayPassed}일
        </Text>
        <Text
          variant="body"
          font="Ownglyph ryurue"
          size="small"
          color="tertiary"
          className="font-normal"
        >
          동안 파도 위를 둥둥 떠다니다 도착했어요!
        </Text>
      </div>
      <LetterUnderline />
    </div>
  )
}

