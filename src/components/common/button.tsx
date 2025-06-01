import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react"

import { cn } from "@/utils/cn"

import { Text } from "./text"

type ButtonVariant = "primary"

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  text?: string
  ariaLabel?: string
}

const BUTTON_VARIANTS: Record<ButtonProps["variant"], string> = {
  primary: "bg-blue-100 w-full max-w-[343px]",
}
const BUTTON_BASE_STYLES: HTMLAttributes<HTMLButtonElement>["className"] =
  "cursor-pointer rounded-[12px] py-[16px] text-white disabled:cursor-auto"
const BUTTON_DISABLED_STYLES: HTMLAttributes<HTMLButtonElement>["className"] =
  "bg-neutral-20 text-text-tertiary"

export const Button = ({
  children,
  text = "",
  variant,
  ariaLabel,
  ...props
}: ButtonProps) => {
  const { disabled: isDisabled } = props
  return (
    <button
      className={cn(
        BUTTON_BASE_STYLES,
        BUTTON_VARIANTS[variant],
        isDisabled && BUTTON_DISABLED_STYLES,
      )}
      role="button"
      aria-label={ariaLabel}
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
