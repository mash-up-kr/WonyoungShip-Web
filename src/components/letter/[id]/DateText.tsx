import { Text } from "@/components/common"
import { WeatherIcon } from "@/components/common"

type Weather = "sunny" | "cloudy" | "rainy" | "snow" | "shiny"

interface DateText {
  weather: Weather
  createdAt: string
  scheduledAt: string
}

const DateText = ({ weather }: DateText) => {
  return (
    <div className="mt-6 flex flex-col items-center">
      <div className="flex items-center gap-1">
        <WeatherIcon weather={weather} size="sm" color="secondary" />
        <Text
          variant="body"
          font="Ownglyph ryurue"
          size="small"
          color="secondary"
          className="font-normal"
        >
          24.05.05
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
      <div>
        <Text
          variant="body"
          font="Ownglyph ryurue"
          size="small"
          color="secondary"
          className="font-normal"
        >
          234일
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
    </div>
  )
}

export default DateText
