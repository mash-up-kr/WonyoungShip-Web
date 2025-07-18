"use client"

import Image from "next/image"

import Logo from "@/assets/images/logo.png"

import BaseDialog, { ExtendedBaseDialogProps } from "./base-dialog"

export interface LoadingDialogProps extends ExtendedBaseDialogProps {
  isOpen: boolean
}

export const LoadingDialog = ({ isOpen, ...props }: LoadingDialogProps) => {
  // 로딩 중에는 닫기 불가능하도록 빈 함수 전달
  const handleClose = () => {}

  return (
    <BaseDialog isOpen={isOpen} onClose={handleClose} {...props}>
      <div className="flex flex-col items-center gap-[16px] p-[24px]">
        {/* Logo with Animation */}
        <div className="animate-bounce">
          <Image src={Logo} alt="둥둥" width={60} height={60} priority />
        </div>
      </div>
    </BaseDialog>
  )
}

export default LoadingDialog
