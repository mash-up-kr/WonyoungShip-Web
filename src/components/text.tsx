import clsx from "clsx"
import { ElementType, HTMLAttributes, PropsWithChildren } from "react"

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
      className={clsx(
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
