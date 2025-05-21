import clsx from "clsx"
import { ElementType, HTMLAttributes, PropsWithChildren } from "react"

type TextVariant = "heading" | "body" | "description"
type TextSize = "small" | "medium" | "large"
type TextFont = "pretendard" | "Ownglyph ryurue"

interface TextProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  variant: TextVariant
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
  className,
  ...props
}: TextProps) => {
  const Component = as || "span"

  return (
    <Component
      className={clsx(className, TEXT_VARIANTS[variant][size], TEXT_FONT[font])}
      {...props}
    >
      {children}
    </Component>
  )
}
