"use client"

import { HTMLAttributes, PropsWithChildren, useState } from "react"

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

const PRESSED_BACKGROUND_COLORS: Record<
  ButtonState,
  HTMLAttributes<HTMLElement>["className"]
> = {
  primary: "bg-neutral-40",
  blue: "bg-blue-50",
  disabled: "bg-neutral-40",
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
  onClick,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false)

  const handleTouchStart = () => {
    setIsPressed(true)
  }

  const handleTouchEnd = () => {
    setIsPressed(false)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      className={cn(
        "flex h-8 w-fit items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 transition-colors",
        isPressed ? PRESSED_BACKGROUND_COLORS[type] : BACKGROUND_COLORS[type],
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onClick={handleClick}
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
