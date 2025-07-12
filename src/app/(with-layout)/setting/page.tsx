import { apiApi } from "@/__generated__/Api/Api.api"
import BasicHeader from "@/components/common/header/basic-header"
import {
  AccountSetting,
  AlarmSetting,
  ServiceInfo,
  UserInfo,
} from "@/components/setting"

const SettingPage = async () => {
  const { data } = await apiApi.getSetting()

  const settingData = data?.data

  if (!settingData) {
    return null
  }

  return (
    <>
      <BasicHeader centerText="설정" hasBackButton />
      <div className="flex flex-col gap-3 px-4">
        {/* 연결된 계정 */}
        <AccountSetting email={settingData.email} />

        {/* 알림 설정 */}
        <AlarmSetting emailAlarm={settingData.emailAlarm} />

        {/* 서비스 정보 */}
        <ServiceInfo
          privacyUrl={settingData.privacyUrl}
          tosUrl={settingData.tosUrl}
        />

        {/* 회원 탈퇴 / 로그아웃 */}
        <UserInfo />
      </div>
    </>
  )
}

export default SettingPage
