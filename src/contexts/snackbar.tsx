"use client"

import { createContext, PropsWithChildren, useContext } from "react"

export const SnackbarContext = createContext<null>(null)

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext)

  if (typeof context === "undefined") {
    throw new Error("useSnackbarContext must be used within a SnackbarProvider")
  }

  return context
}

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  return (
    <SnackbarContext.Provider value={null}>{children}</SnackbarContext.Provider>
  )
}
