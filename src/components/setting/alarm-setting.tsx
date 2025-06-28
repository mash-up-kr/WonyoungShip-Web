import { useState } from "react"

import { Text, Switch } from "@/components/common"

interface AlarmProp {
  emailAlarm: boolean
}

export const AlarmSetting = ({ emailAlarm }: AlarmProp) => {
  const [isEmail, setIsEmail] = useState<boolean>(emailAlarm)

  const handleClickToggle = () => {
    setIsEmail((prev) => !prev)

    // TODO : 이메일 알림 수신 API 연결
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
