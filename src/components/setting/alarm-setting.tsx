"use client"

import { useState } from "react"

import { apiApi } from "@/__generated__/Api/Api.api"
import { Text, Switch } from "@/components/common"
import { useSnackbar } from "@/contexts/snackbar"

interface AlarmProp {
  emailAlarm: boolean
}

export const AlarmSetting = ({ emailAlarm }: AlarmProp) => {
  const [isEmail, setIsEmail] = useState<boolean>(emailAlarm)
  const { showSnackbar } = useSnackbar()

  const handleClickToggle = async () => {
    try {
      setIsEmail((prev) => !prev)
      await apiApi.changeEmailAlarm({ data: { isOn: !isEmail } })
      showSnackbar({ message: "이메일 알람 설정이 변경되었어요" })
    } catch (error) {
      showSnackbar({
        message: "이메일 알람 설정 변경에 실패했어요" + error,
      })
      setIsEmail((prev) => !prev)
    }
  }

  return (
    <section className="bg-background-white flex w-full flex-col gap-4 rounded-2xl p-4">
      <Text variant="body">알림 설정</Text>
      <div className="flex items-center justify-between">
        <Text
          variant="body"
          size="small"
          color="secondary"
          className="font-medium"
        >
          이메일 알람 수신
        </Text>
        <Switch checked={isEmail} onChange={handleClickToggle} />
      </div>
    </section>
  )
}
