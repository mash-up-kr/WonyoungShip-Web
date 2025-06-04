"use client"

import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react"

import { IconName } from "@/assets/svg"
import { Snackbar } from "@/components/common"

interface SnackbarItem {
  id: number
  message: string
  isOpen: boolean
  icon?: IconName
  showCloseButton?: boolean
}

type ShowSnackbarParams = Omit<SnackbarItem, "id" | "isOpen">

interface SnackbarContextType {
  showSnackbar: (params: ShowSnackbarParams) => void
}

export const SnackbarContext = createContext<SnackbarContextType>({
  showSnackbar: () => null,
})

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext)

  if (typeof context === "undefined") {
    throw new Error("useSnackbarContext must be used within a SnackbarProvider")
  }

  return context
}

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  const [snackbarList, setSnackbarList] = useState<SnackbarItem[]>([])
  const snackbarId = useRef(0)

  const showSnackbar = (
    params: ShowSnackbarParams,
    duration: number = 2000,
  ) => {
    const newSnackbar: SnackbarItem = {
      id: snackbarId.current++,
      isOpen: true,
      ...params,
    }
    setSnackbarList((prev) => [...prev, newSnackbar])

    setTimeout(() => {
      handleCloseSnackbar(newSnackbar.id)
    }, duration)
  }

  const handleCloseSnackbar = (id: number) =>
    setSnackbarList((prev) =>
      prev.map((snackbar) =>
        snackbar.id === id ? { ...snackbar, isOpen: false } : snackbar,
      ),
    )

  const removeSnackbar = (id: number) =>
    setSnackbarList((prev) => prev.filter((snackbar) => snackbar.id !== id))

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbarList.map(({ id, ...props }) => (
        <Snackbar
          {...props}
          key={`snackbar-${id}`}
          onClose={() => handleCloseSnackbar(id)}
          onAnimationEnd={() => removeSnackbar(id)}
        />
      ))}
    </SnackbarContext.Provider>
  )
}
