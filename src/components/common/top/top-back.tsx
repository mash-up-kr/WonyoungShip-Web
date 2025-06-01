'use client';

import { useRouter } from "next/navigation"

import { Icon } from "@/components/common"

export const TopBack = () => {
  const router = useRouter()

  return (
    <div className="flex w-full justify-start px-4 py-3">
      <button onClick={() => router.back()}>
        <Icon icon="chevronLeft" size="lg" />
      </button>
    </div>
  )
}
