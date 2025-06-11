"use client"
import { AnimationEventHandler, PropsWithChildren, useState } from "react"

import { cn } from "@/utils/cn"

import { Icon } from "./icon"
import { Text } from "./text"

type TooltipArrowPosition = "left" | "center" | "right"
interface TooltipProps extends PropsWithChildren {
  open: boolean
  label: string
  arrowPosition?: TooltipArrowPosition
  hideArrow?: boolean
  hideCloseButton?: boolean
  wrapperClassName?: string
  className?: string
  onClose?: VoidFunction
}

const TOOLTIP_ARROW_POSITIONS: Record<TooltipArrowPosition, string> = {
  left: "left-6",
  center: "",
  right: "right-6",
}

const TOOLTIP_POSITIONS: Record<TooltipArrowPosition, string> = {
  left: "left-0 origin-bottom-left",
  center: "left-1/2 -translate-x-1/2 origin-bottom",
  right: "right-0 origin-bottom-right",
}

export const Tooltip = ({
  open,
  label,
  children,
  wrapperClassName,
  className,
  arrowPosition = "center",
  hideArrow = false,
  hideCloseButton = false,
  onClose,
}: TooltipProps) => {
  const [isHiding, setIsHiding] = useState(false)
  const shouldRender = open || isHiding

  const handleCloseClick = () => {
    setIsHiding(true)
  }

  const handleAnimationEnd: AnimationEventHandler = () => {
    if (isHiding) {
      setIsHiding(false)
      onClose?.()
    }
  }

  return (
    <div className={cn("relative", wrapperClassName)}>
      {shouldRender && (
        <div
          role="tooltip"
          onAnimationEnd={handleAnimationEnd}
          className={cn(
            "bg-background-primary absolute bottom-[calc(100%+12px)] flex max-w-[15rem] items-center justify-center gap-2 rounded-lg px-3 py-2",
            TOOLTIP_POSITIONS[arrowPosition],
            isHiding ? "animate-tooltip-hide" : "animate-tooltip-show",
            className,
          )}
        >
          <Text
            variant="body"
            size="small"
            color="inverse"
            className="whitespace-nowrap"
          >
            {label}
          </Text>
          {!hideCloseButton && (
            <button
              onClick={handleCloseClick}
              className="flex cursor-pointer items-center justify-center"
            >
              <Icon icon="clear" size="sm" fill="inverse" ariaLabel="닫기" />
            </button>
          )}
          {!hideArrow && (
            <Icon
              icon="tooltipArrow"
              className={cn(
                "absolute -bottom-[20px]",
                TOOLTIP_ARROW_POSITIONS[arrowPosition],
              )}
            />
          )}
        </div>
      )}
      {children}
    </div>
  )
}
