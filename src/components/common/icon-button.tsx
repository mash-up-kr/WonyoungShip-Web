"use client"

import { ReactNode, HTMLAttributes, PropsWithChildren } from "react"

import { Text } from "@/components/common"
import { cn } from "@/utils/cn"

type BackgroundColor =
  | "primary"
  | "neutral-20"
  | "neutral-40"
  | "blue-50"
  | "blue-100"

type TextColor = "primary" | "inverse"

interface ButtonProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  color?: BackgroundColor
  icon: ReactNode
}

const BACKGROUND_COLORS: Record<
  BackgroundColor,
  HTMLAttributes<HTMLElement>["className"]
> = {
  primary: "bg-background-primary",
  "neutral-20": "bg-neutral-20",
  "neutral-40": "bg-neutral-40",
  "blue-50": "bg-blue-50",
  "blue-100": "bg-blue-100",
}

const TEXT_COLORS: Record<BackgroundColor, TextColor> = {
  primary: "inverse",
  "blue-50": "inverse",
  "blue-100": "inverse",
  "neutral-20": "primary",
  "neutral-40": "inverse",
}

export const IconButton = ({
  children,
  color = "blue-100",
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex h-8 w-fit items-center justify-center gap-1.5 rounded-lg px-2.5 py-2",
        BACKGROUND_COLORS[color],
      )}
      {...props}
    >
      {icon}
      <Text variant="body" color={TEXT_COLORS[color]}>
        {children}
      </Text>
    </button>
  )
}
