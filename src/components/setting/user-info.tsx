"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import { Text, ConfirmDialog } from "@/components/common"
import { useDialog } from "@/contexts/dialog-context"
import { useSnackbar } from "@/contexts/snackbar"

export const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const { showSnackbar } = useSnackbar()

  const { open, close } = useDialog()

  const handleClickLogout = () => {
    open({
      type: "confirm",
      props: {
        title: "로그아웃 하시겠어요?",
        desc: "",
        cancelText: "아니오",
        confirmText: "네",
        onCancel: close,
        onConfirm: async () => {
          await fetch("/api/oauth/logout", {
            method: "POST",
          })
          showSnackbar({
            message: "로그아웃 되었어요",
          })
          router.replace("/landing")
        },
      },
    })
  }

  const handleClickWithdraw = () => {
    open({
      type: "confirm",
      props: {
        title: "정말 탈퇴 하시겠어요?",
        desc: "탈퇴하면 그동안 받은 편지들이 모두 삭제돼요",
        cancelText: "취소",
        confirmText: "탈퇴",
        onCancel: close,
        onConfirm: close,
      },
    })
  }

  return (
    <div className="mt-3 flex justify-end gap-4">
      <button onClick={handleClickWithdraw}>
        <Text variant="body" size="small" color="tertiary">
          회원 탈퇴하기
        </Text>
      </button>
      <button onClick={handleClickLogout}>
        <Text variant="body" size="small" color="secondary">
          로그아웃
        </Text>
      </button>
      <ConfirmDialog
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => null}
      />
    </div>
  )
}
