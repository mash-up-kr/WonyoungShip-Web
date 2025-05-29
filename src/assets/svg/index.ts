import ChevronDown from "./chevron-down.svg"
import Clear from "./clear.svg"
import TooltipArrow from "./tooltip-arrow.svg"

export const ICONS = {
  chevronDown: ChevronDown,
  clear: Clear,
  tooltipArrow: TooltipArrow,
}

export type IconName = keyof typeof ICONS
