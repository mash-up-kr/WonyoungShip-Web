import { PropsWithChildren, useCallback, useRef, useState } from "react"

import { useCurrentMonth } from "./hooks/use-current-month"

export const MonthSwipeNavigator = ({ children }: PropsWithChildren) => {
  const { handleNextMonth, handlePrevMonth } = useCurrentMonth()

  const startX = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const onDragStart = useCallback((clientX: number) => {
    startX.current = clientX
    setIsDragging(true)
  }, [])

  // 드래그 끝났을 때
  const onDragEnd = useCallback(
    (clientX: number) => {
      if (startX.current === null) return
      const deltaX = clientX - startX.current

      if (deltaX > 150) {
        // 오른쪽으로 150px 이상 스와이프 → 이전 달
        handlePrevMonth()
      } else if (deltaX < -150) {
        handleNextMonth()
      }

      startX.current = null
      setIsDragging(false)
    },
    [handleNextMonth, handlePrevMonth],
  )

  return (
    <div
      className="h-full w-full"
      // 마우스 이벤트
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseUp={(e) => {
        if (isDragging) onDragEnd(e.clientX)
      }}
      onMouseLeave={(e) => {
        if (isDragging) onDragEnd(e.clientX)
      }}
      // 터치 이벤트
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const touch = e.changedTouches[0] ?? e.targetTouches[0]
        onDragEnd(touch.clientX)
      }}
    >
      {children}
    </div>
  )
}
