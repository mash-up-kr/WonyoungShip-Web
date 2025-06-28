"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Icon } from "@/components/common"
import { cn } from "@/utils/cn"

const VIEW_PATH = {
  CALENDAR: "/letter/calendar",
  LIST: "/letter/list",
} as const

export const ViewSwitch = () => {
  const pathname = usePathname()

  const checkCurrentPath = (path: string) => {
    return path === pathname
  }

  return (
    <div className="bg-neutral-20 flex items-center rounded-full p-1">
      <Link
        href={VIEW_PATH.CALENDAR}
        className={cn(
          "items-center justify-center rounded-full p-1.5 transition-[background] duration-300 ease-out",
          checkCurrentPath(VIEW_PATH.CALENDAR) && "bg-white",
        )}
      >
        <Icon
          icon="calendar"
          ariaLabel="캘린더 화면"
          className={
            checkCurrentPath(VIEW_PATH.CALENDAR)
              ? "fill-neutral-70"
              : "fill-neutral-40"
          }
        />
      </Link>
      <Link
        href={VIEW_PATH.LIST}
        className={cn(
          "flex items-center justify-center rounded-full p-1.5 transition-[background] duration-300 ease-out",
          checkCurrentPath(VIEW_PATH.LIST) && "bg-white",
        )}
      >
        <Icon
          icon="list"
          ariaLabel="리스트 화면"
          className={
            checkCurrentPath(VIEW_PATH.LIST)
              ? "fill-neutral-70"
              : "fill-neutral-40"
          }
        />
      </Link>
    </div>
  )
}
