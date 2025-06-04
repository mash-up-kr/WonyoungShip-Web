"use client"

import { useEffect, useState } from "react"

import { IconName } from "@/assets/svg"
import { cn } from "@/utils/cn"

import { Icon } from "./icon"
import { Text } from "./text"

interface SnackbarProps {
  isOpen: boolean
  message: string
  showCloseButton?: boolean
  icon?: IconName
  onClose?: VoidFunction
  onAnimationEnd?: VoidFunction
}

export const Snackbar = ({
  isOpen,
  message,
  icon,
  showCloseButton = false,
  onAnimationEnd,
  onClose,
}: SnackbarProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) setShouldRender(true)
  }, [isOpen])

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false)
      onAnimationEnd?.()
    }
  }

  if (!shouldRender) return null

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onAnimationEnd={handleAnimationEnd}
      className={cn(
        "bg-neutral-80 absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-4 py-3",
        isOpen ? "animate-toast-show" : "animate-toast-hide",
      )}
    >
      {icon && <Icon icon={icon} size="md" fill="inverse" />}
      <Text variant="body" size="small" color="inverse">
        {message}
      </Text>
      {showCloseButton && (
        <button className="cursor-pointer" onClick={() => onClose?.()}>
          <Icon icon="clear" fill="inverse" size="xs" ariaLabel="닫기" />
        </button>
      )}
    </div>
  )
}
