"use client"

import { useEffect, useState } from "react"

import { IconName } from "@/assets/svg"
import { cn } from "@/utils/cn"

import { Icon } from "./icon"
import { Text } from "./text"

interface SnackbarProps {
  isOpen: boolean
  message: string
  duration?: number
  showCloseButton?: boolean
  icon?: IconName
  onClose?: VoidFunction
  onAnimationEnd?: VoidFunction
}

export const Snackbar = ({
  isOpen,
  message,
  icon,
  duration = 2000,
  showCloseButton = false,
  onAnimationEnd,
  onClose,
}: SnackbarProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen)

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false)
      onAnimationEnd?.()
    }
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    setShouldRender(true)
    const id = setTimeout(() => onClose?.(), duration)
    return () => clearTimeout(id)
  }, [isOpen, duration, onClose])

  if (!shouldRender) return null

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onAnimationEnd={handleAnimationEnd}
      className={cn(
        "bg-neutral-80 absolute left-1/2 z-50 flex max-w-[400px] -translate-x-1/2 items-center gap-1.5 rounded-full px-4 py-3",
        isOpen ? "animate-toast-show" : "animate-toast-hide",
      )}
    >
      {icon && <Icon icon={icon} size="md" stroke="inverse" />}
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
