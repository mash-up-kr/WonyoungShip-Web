import { WeatherIconName } from "@/assets/svg/weather"

import { Icon, IconColor, IconSize } from "./icon"

interface WeatherIconProps {
  weather: WeatherIconName
  color?: IconColor
  size?: IconSize
  className?: string
}

export const WeatherIcon = ({
  weather,
  color = "primary",
  ...props
}: WeatherIconProps) => {
  const getWeatherLabel = (weather: WeatherIconName) => {
    switch (weather) {
      case "cloudy":
        return "흐린 날"
      case "rainy":
        return "비오는 날"
      case "shiny":
        return "눈부신 날"
      case "snow":
        return "눈오는 날"
      case "sunny":
        return "햇빛 쨍쩅한 날"
    }
  }
  return (
    <Icon
      {...props}
      icon={weather}
      fill={color}
      ariaLabel={getWeatherLabel(weather)}
    />
  )
}
