import { IconName, ICONS } from "@/assets/svg"
import { cn } from "@/utils/cn"

export type IconColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "assistive"
  | "disabled"
  | "inverse"
  | "brand"

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl"

interface IconProps {
  icon: IconName
  fill?: IconColor
  stroke?: IconColor
  size?: IconSize
  className?: string
  ariaLabel?: string
}

export const FILL_COLORS: Record<IconColor, string> = {
  primary: "fill-icon-primary",
  secondary: "fill-icon-secondary",
  tertiary: "fill-icon-tertiary",
  assistive: "fill-icon-assistive",
  disabled: "fill-icon-disabled",
  inverse: "fill-icon-inverse",
  brand: "fill-icon-brand",
}

const STROKE_COLORS: Record<IconColor, string> = {
  primary: "stroke-icon-primary",
  secondary: "stroke-icon-secondary",
  tertiary: "stroke-icon-tertiary",
  assistive: "stroke-icon-assistive",
  disabled: "stroke-icon-disabled",
  inverse: "stroke-icon-inverse",
  brand: "stroke-icon-brand",
}

//TODO: 임의로 지정한 사이즈임. 디자인 시스템에 따라 조정 필요
const ICON_SIZES: Record<IconSize, string> = {
  xs: "w-3 h-3", // 12px
  sm: "w-4 h-4", // 16px
  md: "w-5 h-5", // 20px
  lg: "w-6 h-6", // 24px
  xl: "w-8 h-8", // 32px
}

export const Icon = ({
  icon,
  ariaLabel = "",
  fill,
  stroke,
  size = "md",
  className,
}: IconProps) => {
  const IconComponent = ICONS[icon]
  return (
    <IconComponent
      aria-label={ariaLabel}
      className={cn(
        fill ? FILL_COLORS[fill] : "",
        stroke ? STROKE_COLORS[stroke] : "",
        ICON_SIZES[size],
        className,
      )}
    />
  )
}
