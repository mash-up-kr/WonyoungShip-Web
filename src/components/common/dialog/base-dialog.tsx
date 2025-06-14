"use client"
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogPanelProps,
  DialogProps,
  DialogBackdropProps,
} from "@headlessui/react"
import React, { PropsWithChildren } from "react"

export interface BaseDialogProps {
  isOpen: boolean
  onClose: VoidFunction
  children: React.ReactNode
  isCloseOutsideClick?: boolean
  dialogProps?: DialogProps
  dialogPanelProps?: DialogPanelProps
  dialogBackdropProps?: DialogBackdropProps
}

const BaseDialog = ({
  isOpen,
  onClose,
  children,
  isCloseOutsideClick = false,
  dialogProps,
  dialogPanelProps,
  dialogBackdropProps,
}: PropsWithChildren<BaseDialogProps>) => {
  return (
    <Dialog
      open={isOpen}
      onClose={isCloseOutsideClick ? onClose : () => null}
      className="relative z-50"
      {...dialogProps}
    >
      <DialogBackdrop
        className="bg-background-dimmer fixed inset-0 backdrop-blur-[7.5px]"
        {...dialogBackdropProps}
      />
      <div className="fixed inset-0 z-10">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel {...dialogPanelProps}>{children}</DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default BaseDialog
