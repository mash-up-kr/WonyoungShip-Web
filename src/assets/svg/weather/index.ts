import Cloudy from "./cloudy.svg"
import Rainy from "./rainy.svg"
import Shiny from "./shiny.svg"
import Snow from "./snow.svg"
import Sunny from "./sunny.svg"

export const WEATHER_ICONS = {
  cloudy: Cloudy,
  rainy: Rainy,
  shiny: Shiny,
  snow: Snow,
  sunny: Sunny,
}

export type WeatherIconName = keyof typeof WEATHER_ICONS
