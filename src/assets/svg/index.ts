import Calendar from "./calendar.svg"
import Cd from "./cd.svg"
import Checked from "./checked.svg"
import ChevronDown from "./chevron-down.svg"
import ChevronLeftThin from "./chevron-left-thin.svg"
import ChevronLeft from "./chevron-left.svg"
import ChevronRight from "./chevron-right.svg"
import Clear from "./clear.svg"
import FortuneCookie from "./fortune-cookie.svg"
import Letter from "./letter.svg"
import Link from "./link.svg"
import List from "./list.svg"
import Logo from "./logo.svg"
import Music from "./music.svg"
import OpenLetter from "./open-letter.svg"
import Pencil from "./pencil.svg"
import Play from "./play.svg"
import Playing from "./playing.svg"
import Setting from "./setting.svg"
import TooltipArrow from "./tooltip-arrow.svg"
import Unchecked from "./unchecked.svg"
import { WEATHER_ICONS } from "./weather"

export const ICONS = {
  calendar: Calendar,
  chevronDown: ChevronDown,
  chevronLeftThin: ChevronLeftThin,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  clear: Clear,
  link: Link,
  list: List,
  letter: Letter,
  logo: Logo,
  setting: Setting,
  tooltipArrow: TooltipArrow,
  music: Music,
  openLetter: OpenLetter,
  play: Play,
  playing: Playing,
  checked: Checked,
  unchecked: Unchecked,
  cd: Cd,
  pencil: Pencil,
  fortuneCookie: FortuneCookie,
  ...WEATHER_ICONS,
}

export type IconName = keyof typeof ICONS
