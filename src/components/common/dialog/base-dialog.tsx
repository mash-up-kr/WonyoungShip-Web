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

import { cn } from "@/utils/cn"

export interface BaseDialogProps {
  isOpen: boolean
  onClose: VoidFunction
  children: React.ReactNode
  isCloseOutsideClick?: boolean
  dialogProps?: DialogProps
  dialogPanelProps?: DialogPanelProps
  dialogBackdropProps?: DialogBackdropProps
}

/**
 * 확장 타입
 * - isOpen, onClose 제외한 타입
 * - 확장 타입은 확장 컴포넌트에서 사용
 * - 확장 컴포넌트는 확장 타입을 사용하여 컴포넌트를 확장
 */
export type ExtendedBaseDialogProps = Omit<
  BaseDialogProps,
  "children" | "onClose"
>

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
        className={cn(
          "bg-background-dimmer fixed inset-0 backdrop-blur-[7.5px]",
          isOpen
            ? "animate-[var(--animate-dialog-backdrop-show)]"
            : "animate-[var(--animate-dialog-backdrop-hide)]",
          dialogBackdropProps?.className,
        )}
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
