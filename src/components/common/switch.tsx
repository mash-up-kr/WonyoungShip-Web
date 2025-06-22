"use client"

import { useEffect, useState } from "react"

import { cn } from "@/utils/cn"

interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

export const Switch = ({
  checked = false,
  disabled = false,
  onChange,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleClick = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  return (
    <button
      type="button"
      role="switch"
      disabled={disabled}
      aria-checked={isChecked}
      className={cn(
        "relative inline-block h-5 w-9 cursor-pointer rounded-full",
        isChecked ? "bg-icon-brand" : "bg-icon-disabled",
        "transition-colors duration-200 ease-out",
      )}
      onClick={handleClick}
    >
      <span
        className={cn(
          "absolute top-1/2 z-[1] h-4 w-4 -translate-1/2 rounded-full bg-white",
          isChecked ? "translate-x-0" : "-translate-x-4",
          "transition-transform duration-200 ease-out",
        )}
      />
    </button>
  )
}
