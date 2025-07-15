"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function PageRefresher() {
  const router = useRouter()

  useEffect(() => {
    router.refresh()
  }, [router])

  return null
}
