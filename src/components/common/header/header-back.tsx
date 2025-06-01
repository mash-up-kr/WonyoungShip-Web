'use client';

import { useRouter } from "next/navigation"

import { Icon } from "@/components/common"

export const HeaderBack = () => {
  const router = useRouter()

  return (
    <header className="flex w-full justify-start px-4 py-3">
      <button onClick={() => router.back()} aria-label="뒤로 가기">
        <Icon icon="chevronLeft" size="lg" />
      </button>
    </header>
  )
}
