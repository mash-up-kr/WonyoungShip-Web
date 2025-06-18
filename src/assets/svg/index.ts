import Cd from "./cd.svg"
import Checked from "./checked.svg"
import ChevronDown from "./chevron-down.svg"
import ChevronLeft from "./chevron-left.svg"
import Clear from "./clear.svg"
import Letter from "./letter.svg"
import Link from "./link.svg"
import Logo from "./logo.svg"
import Music from "./music.svg"
import Play from "./play.svg"
import Playing from "./playing.svg"
import Setting from "./setting.svg"
import TooltipArrow from "./tooltip-arrow.svg"
import Unchecked from "./unchecked.svg"
import { WEATHER_ICONS } from "./weather"

export const ICONS = {
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  clear: Clear,
  link: Link,
  letter: Letter,
  logo: Logo,
  setting: Setting,
  tooltipArrow: TooltipArrow,
  music: Music,
  play: Play,
  playing: Playing,
  checked: Checked,
  unchecked: Unchecked,
  cd: Cd,
  ...WEATHER_ICONS,
}

export type IconName = keyof typeof ICONS
