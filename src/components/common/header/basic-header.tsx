"use client"
import { useRouter } from "next/navigation"
import React from "react"

import { Icon } from "../icon"
import { Text } from "../text"

export interface BasicHeaderProps {
  hasBackButton?: boolean
  onClickBackButton?: () => void
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
  centerSlot?: React.ReactNode
  centerText?: string
}

const BasicHeader = ({
  hasBackButton = true,
  onClickBackButton,
  centerText,
  leftSlot,
  rightSlot,
  centerSlot,
}: BasicHeaderProps) => {
  const router = useRouter()

  const handleBackButton = () => {
    if (onClickBackButton) onClickBackButton()
    else router.back()
  }

  return (
    <header className="flex w-full items-center justify-between px-4 py-3">
      {/* Left Area */}
      <div className="flex min-w-[24px] items-center gap-2">
        {hasBackButton && (
          <button onClick={handleBackButton} aria-label="뒤로 가기">
            <Icon icon="chevronLeftThin" size="lg" fill="secondary" />
          </button>
        )}
        {leftSlot}
      </div>

      {/* Center Area */}
      <div className="flex flex-col items-center">
        {centerText && (
          <Text variant="body" size="medium">
            {centerText}
          </Text>
        )}
        {centerSlot}
      </div>

      {/* Right Area */}
      <div className="flex min-w-[24px] items-center gap-2">{rightSlot}</div>
    </header>
  )
}

export default BasicHeader
