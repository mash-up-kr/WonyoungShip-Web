import { WeatherIconName } from "@/assets/svg/weather"

export type WeatherServerName =
  | "SUNNY"
  | "NIGHT_SHINING"
  | "CLOUDY"
  | "RAINY"
  | "SNOW"

export const convertServerToIconWeatherName = (
  serverWeatherName: string,
): WeatherIconName => {
  switch (serverWeatherName as WeatherServerName) {
    case "SUNNY":
      return "sunny"
    case "SNOW":
      return "snow"
    case "CLOUDY":
      return "cloudy"
    case "NIGHT_SHINING":
      return "shiny"
    case "RAINY":
      return "rainy"
    default:
      return "sunny"
  }
}

export const convertIconToServerWeatherName = (
  iconWeatherName: WeatherIconName,
): WeatherServerName => {
  switch (iconWeatherName) {
    case "sunny":
      return "SUNNY"
    case "snow":
      return "SNOW"
    case "cloudy":
      return "CLOUDY"
    case "shiny":
      return "NIGHT_SHINING"
    case "rainy":
      return "RAINY"
    default:
      return "SUNNY"
  }
}
