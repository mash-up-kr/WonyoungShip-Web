"use client"

import { HTMLAttributes, PropsWithChildren } from "react"

import { IconName } from "@/assets/svg"
import { Icon, Text } from "@/components/common"
import { cn } from "@/utils/cn"

type ButtonState = "blue" | "primary" | "disabled"

type TextColor = "inverse" | "tertiary"

interface ButtonProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  type?: ButtonState
  icon: IconName
  ariaLabel?: string
}

const BACKGROUND_COLORS: Record<
  ButtonState,
  HTMLAttributes<HTMLElement>["className"]
> = {
  primary: "bg-background-primary",
  blue: "bg-blue-100",
  disabled: "bg-neutral-40",
}

const ACTIVE_BACKGROUND_COLORS: Record<
  ButtonState,
  HTMLAttributes<HTMLElement>["className"]
> = {
  primary: "active:bg-neutral-40",
  blue: "active:bg-blue-50",
  disabled: "bg-neutral-20",
}

const TEXT_COLORS: Record<ButtonState, TextColor> = {
  primary: "inverse",
  blue: "inverse",
  disabled: "tertiary",
}

export const IconButton = ({
  children,
  type = "blue",
  icon,
  ariaLabel = "",
  ...props
}: ButtonProps) => {


  return (
    <button
      className={cn(
        "flex h-8 w-fit items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 transition-colors",
        BACKGROUND_COLORS[type],
        ACTIVE_BACKGROUND_COLORS[type],
      )}
      disabled={type == "disabled"}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon icon={icon} size="md" stroke={TEXT_COLORS[type]} />
      <Text
        variant="body"
        size="small"
        color={TEXT_COLORS[type]}
        className="font-medium"
      >
        {children}
      </Text>
    </button>
  )
}
