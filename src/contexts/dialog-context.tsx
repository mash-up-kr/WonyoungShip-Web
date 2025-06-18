"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react"

import ConfirmDialog, {
  ConfirmDialogProps,
} from "@/components/common/dialog/confirm-dialog"

type ConfirmDialogType = ConfirmDialogProps

type DialogType = { type: "confirm"; props: Omit<ConfirmDialogType, "isOpen"> }

interface DialogContextType {
  dialog: DialogType | null
  open: <T extends DialogType["type"]>({
    type,
    props,
  }: {
    type: T
    props: Extract<DialogType, { type: T }>["props"]
  }) => void
  close: VoidFunction
}

export const DialogContext = createContext<DialogContextType>({
  dialog: null,
  open: () => {},
  close: () => {},
})

export const useDialog = () => {
  const context = useContext(DialogContext)
  if (typeof context === "undefined") {
    throw new Error("useDialog must be used within a DialogProvider")
  }

  return context
}

export const DialogProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dialog, setDialog] = useState<DialogType | null>(null)

  const open = <T extends DialogType["type"]>({
    type,
    props,
  }: {
    type: T
    props: Extract<DialogType, { type: T }>["props"]
  }) => {
    setDialog({ type, props } as DialogType)
    setIsOpen(true)
  }

  const close = () => {
    setDialog(null)
    setIsOpen(false)
  }

  return (
    <DialogContext.Provider value={{ dialog, open, close }}>
      {children}
      {dialog && (
        <>
          {dialog.type === "confirm" && (
            <ConfirmDialog {...dialog.props} isOpen={isOpen} />
          )}
        </>
      )}
    </DialogContext.Provider>
  )
}
