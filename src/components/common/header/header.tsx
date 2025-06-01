import Logo from "@/assets/svg/logo.svg"
import { Icon, Text } from "@/components/common"

const MAX_COUNT = 99

export const Header = (notificationCount: number) => {
  return (
    <header className="flex w-full justify-between px-4 py-3">
      <h1 aria-label="둥둥">
        <button>
          <Logo />
        </button>
      </h1>

      <div className="flex items-center gap-3">
        <button className="relative" aria-label="알림 버튼">
          {notificationCount > 0 && (
            <div className="absolute -top-0.5 left-[22px] grid h-fit min-h-[14px] w-fit min-w-[14px] place-items-center rounded-full bg-[#ff6464]">
              <Text
                variant="description"
                color="inverse"
                className="font-normal"
              >
                {notificationCount > MAX_COUNT ? "99+" : notificationCount}
              </Text>
            </div>
          )}
          <Icon icon="letter" size="xl" />
        </button>
        <button aria-label="설정 버튼">
          <Icon icon="setting" size="xl" />
        </button>
      </div>
    </header>
  )
}
