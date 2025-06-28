import KakaoLogo from "@/assets/svg/kakao-logo.svg"
import { Text } from "@/components/common"

interface AccountProp {
  email: string
}

export const Account = ({ email }: AccountProp) => {
  return (
    <section className="bg-background-white flex w-full flex-col gap-4 rounded-2xl p-4">
      <div className="flex justify-between">
        <Text variant="body">연결된 계정</Text>
        <div className="scale-75">
          <KakaoLogo />
        </div>
      </div>
      <Text
        variant="body"
        size="small"
        color="secondary"
        className="font-medium"
      >
        {email}
      </Text>
    </section>
  )
}
