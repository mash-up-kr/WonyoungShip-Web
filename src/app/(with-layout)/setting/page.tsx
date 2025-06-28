

import Link from "next/link"

import KakaoLogo from "@/assets/svg/kakao-logo.svg"
import { Text, Switch, Icon } from "@/components/common"
import BasicHeader from "@/components/common/header/basic-header"


const SettingPage = () => {


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
        <section className="bg-background-white flex w-full flex-col gap-4 rounded-2xl p-4">
          <div className="flex justify-between">
            <Text variant="body">연결된 계정</Text>
            <div className="scale-75">
            <KakaoLogo /></div>
          </div>
          <Text
            variant="body"
            size="small"
            color="secondary"
            className="font-medium"
          >
            sallybang01@gmail.com
          </Text>
        </section>

        {/* 알림 설정 */}
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
            <Switch/>
          </div>
        </section>

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
