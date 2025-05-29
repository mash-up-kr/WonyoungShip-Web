import { PropsWithChildren } from "react"

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
  className?: string
  onClose?: VoidFunction
}

const TOOLTIP_ARROW_POSITIONS: Record<TooltipArrowPosition, string> = {
  left: "left-6",
  center: "",
  right: "right-6",
}

const TOOLTIP_POSITIONS: Record<TooltipArrowPosition, string> = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
  right: "right-0",
}

export const Tooltip = ({
  open,
  label,
  children,
  className,
  arrowPosition = "center",
  hideArrow = false,
  hideCloseButton = false,
  onClose,
}: TooltipProps) => {
  return (
    <div className="relative">
      {open && (
        <div
          role="tooltip"
          className={cn(
            "bg-background-primary absolute bottom-[calc(100%+20px)] flex max-w-[15rem] items-center justify-center gap-2 rounded-lg px-3 py-2",
            TOOLTIP_POSITIONS[arrowPosition],
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
              onClick={onClose}
              className="flex cursor-pointer items-center justify-center"
            >
              <Icon icon="clear" size="sm" fill="inverse" ariaLabel="닫기" />
            </button>
          )}
          {!hideArrow && (
            <Icon
              icon="tooltipArrow"
              className={cn(
                "absolute -bottom-[14px]",
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
