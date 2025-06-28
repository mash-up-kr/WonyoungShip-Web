"use client"

import Link from "next/link"

import { Text, Icon } from "@/components/common"
import BasicHeader from "@/components/common/header/basic-header"
import { AccountSetting,AlarmSetting } from "@/components/setting"

const tempDate = {
  email: "sinji1012@kookmin.ac.kr",
  emailAlarm: true,
  tosUrl: "string",
  privacyUrl: "string",
}

const SettingPage = () => {
  // TODO : API 연결하면 기본 state API에서 받아올 수 있도록 수정

 

  const handleClickLogout = () => {
    // TODO : 로그아웃 로직 연결
  }

  const handleClickWithdraw = () => {
    // TODO : 회원 탈퇴 API  연결
  }

  return (
    <>
      <BasicHeader centerText="설정" hasBackButton />
      <div className="flex flex-col gap-3 px-4">

        {/* 연결된 계정 */}
        <AccountSetting email={tempDate.email} />

        {/* 알림 설정 */}
       <AlarmSetting emailAlarm={tempDate.emailAlarm}/>

        {/* 서비스 정보 */}
        <section className="bg-background-white flex w-full flex-col gap-4 rounded-2xl p-4">
          <Text variant="body">서비스 정보</Text>
          <Link href="" className="flex justify-between">
            <Text
              variant="body"
              size="small"
              color="secondary"
              className="font-medium"
            >
              서비스 이용 약관
            </Text>
            <Icon icon="chevronRight" fill="secondary" />
          </Link>
          <Link href="" className="flex justify-between">
            <Text
              variant="body"
              size="small"
              color="secondary"
              className="font-medium"
            >
              개인정보처리방침
            </Text>
            <Icon icon="chevronRight" fill="secondary" />
          </Link>
        </section>

        {/* 회원 탈퇴 / 로그아웃 */}
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
        </div>
      </div>
    </>
  )
}

export default SettingPage
