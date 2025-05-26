import { ElementType, HTMLAttributes, PropsWithChildren } from "react"

import { cn } from "@/utils/cn"

type TextVariant = "heading" | "body" | "description"
type TextSize = "small" | "medium" | "large"
type TextFont = "pretendard" | "Ownglyph ryurue"
type TextColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "assistive"
  | "disabled"
  | "inverse"
  | "brand"
  | "neutral-10"
  | "neutral-20"
  | "neutral-30"
  | "neutral-40"
  | "neutral-50"
  | "neutral-60"
  | "neutral-70"
  | "neutral-80"
  | "neutral-90"
  | "orange-10"
  | "orange-50"
  | "orange-100"
  | "green-10"
  | "green-50"
  | "green-100"
  | "blue-10"
  | "blue-50"
  | "blue-100"
  | "red-100"
  | "alpha-20"
  | "alpha-40"
  | "alpha-60"

interface TextProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  variant: TextVariant
  color?: TextColor
  size?: TextSize
  font?: TextFont
  as?: ElementType
}

const TEXT_VARIANTS: Record<
  TextVariant,
  Record<TextSize, HTMLAttributes<HTMLElement>["className"]>
> = {
  heading: {
    small: "text-xl font-bold",
    medium: "text-2xl font-bold",
    large: "text-[1.75rem] font-bold leading-9",
  },
  body: {
    small: "text-sm font-semibold",
    medium: "text-base font-semibold",
    large: "text-lg font-semibold",
  },
  description: {
    small: "text-[0.625rem] font-semibold",
    medium: "text-[0.6875rem] font-semibold",
    large: "text-xs font-semibold",
  },
}

const TEXT_COLORS: Record<TextColor, HTMLAttributes<HTMLElement>["className"]> =
  {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    tertiary: "text-text-tertiary",
    assistive: "text-text-assistive",
    disabled: "text-text-disabled",
    inverse: "text-text-inverse",
    brand: "text-text-brand",
    "neutral-10": "text-neutral-10",
    "neutral-20": "text-neutral-20",
    "neutral-30": "text-neutral-30",
    "neutral-40": "text-neutral-40",
    "neutral-50": "text-neutral-50",
    "neutral-60": "text-neutral-60",
    "neutral-70": "text-neutral-70",
    "neutral-80": "text-neutral-80",
    "neutral-90": "text-neutral-90",
    "orange-10": "text-orange-10",
    "orange-50": "text-orange-50",
    "orange-100": "text-orange-100",
    "green-10": "text-green-10",
    "green-50": "text-green-50",
    "green-100": "text-green-100",
    "blue-10": "text-blue-10",
    "blue-50": "text-blue-50",
    "blue-100": "text-blue-100",
    "red-100": "text-red-100",
    "alpha-20": "text-alpha-20",
    "alpha-40": "text-alpha-40",
    "alpha-60": "text-alpha-60",
  }

const TEXT_FONT: Record<TextFont, HTMLAttributes<HTMLElement>["className"]> = {
  pretendard: "font-pretendard",
  "Ownglyph ryurue": "font-ryurue",
}

export const Text = ({
  as,
  children,
  variant,
  font = "pretendard",
  size = "medium",
  color = "primary",
  className,
  ...props
}: TextProps) => {
  const Component = as || "span"

  return (
    <Component
      className={cn(
        TEXT_VARIANTS[variant][size],
        TEXT_FONT[font],
        TEXT_COLORS[color],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
