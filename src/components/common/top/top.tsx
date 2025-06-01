import Logo from "@/assets/svg/logo.svg"
import { Icon, Text } from "@/components/common"

export const Top = ( notificationCount : number ) => {
  return (
    <div className="flex w-full justify-between px-4 py-3">
      <button>
        <Logo />
      </button>

      <div className="flex gap-3">
        <button className="relative">
            {notificationCount > 0 && (
                // TODO : 배경 색 확인하기
              <div className="absolute -top-0.5 left-[22px] flex h-[14px] w-fit min-w-[14px] items-center justify-center rounded-full bg-red-100">
                <Text variant="description" color="inverse">
                {notificationCount > 99 ? '99+' : notificationCount}
                </Text>
              </div>)}
          <Icon icon="letter" size="xlg" />
        </button>
        <button>
          <Icon icon="setting" size="xlg" />
        </button>
      </div>
    </div>
  )
}
