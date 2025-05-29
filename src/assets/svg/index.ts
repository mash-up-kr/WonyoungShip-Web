import ChevronDown from "./chevron-down.svg"
import TooltipArrow from "./tooltip-arrow.svg"

export const ICONS = {
  chevronDown: ChevronDown,
  tooltipArrow: TooltipArrow,
}

export type IconName = keyof typeof ICONS
