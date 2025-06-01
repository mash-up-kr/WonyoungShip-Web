import ChevronDown from "./chevron-down.svg"
import Clear from "./clear.svg"
import Letter from "./letter.svg"
import Logo from "./logo.svg"
import Setting from "./setting.svg"
import TooltipArrow from "./tooltip-arrow.svg"

export const ICONS = {
  chevronDown: ChevronDown,
  clear: Clear,
  letter : Letter,
  logo: Logo,
  setting: Setting,
  tooltipArrow: TooltipArrow,
}

export type IconName = keyof typeof ICONS
