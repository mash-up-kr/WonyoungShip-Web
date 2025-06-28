import BasicHeader from "@/components/common/header/basic-header"
import { AccountSetting, AlarmSetting, ServiceInfo, UserInfo } from "@/components/setting"

const tempDate = {
  email: "sinji1012@kookmin.ac.kr",
  emailAlarm: true,
  tosUrl: "string",
  privacyUrl: "string",
}

const SettingPage = () => {
  return (
    <>
      <BasicHeader centerText="설정" hasBackButton />
      <div className="flex flex-col gap-3 px-4">
        {/* 연결된 계정 */}
        <AccountSetting email={tempDate.email} />

        {/* 알림 설정 */}
        <AlarmSetting emailAlarm={tempDate.emailAlarm} />

        {/* 서비스 정보 */}
        <ServiceInfo />

        {/* 회원 탈퇴 / 로그아웃 */}
        <UserInfo />
       
      </div>
    </>
  )
}

export default SettingPage
