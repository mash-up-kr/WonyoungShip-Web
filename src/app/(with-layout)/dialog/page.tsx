"use client"

import React, { useState } from "react"

import ConfirmDialog from "@/components/common/dialog/confirm-dialog"
import { useDialog } from "@/contexts/dialog-context"

const DialogPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { open, close } = useDialog()

  const onOpenConfirmDialog = () => {
    open({
      type: "confirm",
      props: {
        title: "편지 작성을 중단하시나요?",
        desc: "작성하던 편지는 저장되지 않아요",
        cancelText: "취소",
        confirmText: "나가기",
        onCancel: close,
        onConfirm: close,
      },
    })
  }

  return (
    <>
      <button onClick={onOpenConfirmDialog}>선언적사용 Confirm dialog</button>
      <br />
      <br />
      <br />
      <button onClick={onOpenConfirmDialog}>
        컴포넌트 사용 Confirm dialog
      </button>

      <ConfirmDialog
        title="편지 작성을 중단하시나요?"
        desc="작성하던 편지는 저장되지 않아요"
        cancelText="취소"
        confirmText="나가기"
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
      />
    </>
  )
}

export default DialogPage
