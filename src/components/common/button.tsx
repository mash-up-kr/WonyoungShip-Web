import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react"

import { cn } from "@/utils/cn"

import { Text } from "./text"

type ButtonVariant = "blue" | "primary" | "gray"

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  text?: string
}

const BUTTON_VARIANTS: Record<ButtonProps["variant"], string> = {
  blue: "bg-blue-100 max-w-[420px] w-full h-[48px]",
  primary: "bg-background-primary max-w-[420px] w-full",
  gray: "bg-neutral-20 max-w-[420px] w-full",
}
const BUTTON_BASE_STYLES: HTMLAttributes<HTMLButtonElement>["className"] =
  "cursor-pointer rounded-[12px] text-white disabled:cursor-auto"
const BUTTON_DISABLED_STYLES: HTMLAttributes<HTMLButtonElement>["className"] =
  "bg-neutral-20 text-text-tertiary"

export const Button = ({
  children,
  text = "",
  variant,
  className,
  ...props
}: ButtonProps) => {
  const { disabled: isDisabled } = props
  return (
    <button
      className={cn(
        BUTTON_BASE_STYLES,
        BUTTON_VARIANTS[variant],
        isDisabled && BUTTON_DISABLED_STYLES,
        className,
      )}
      role="button"
      {...props}
    >
      {children ? (
        children
      ) : (
        <Text
          variant="body"
          size="medium"
          color={isDisabled ? "tertiary" : "inverse"}
        >
          {text}
        </Text>
      )}
    </button>
  )
}
