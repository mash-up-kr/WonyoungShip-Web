import Link from "next/link"

import Logo from "@/assets/svg/logo.svg"
import { Icon, Text } from "@/components/common"
import { ROUTES } from "@/constants/routes"

const MAX_COUNT = 99

export const Header = ({
  notificationCount,
}: {
  notificationCount: number
}) => {
  return (
    <header className="flex w-full justify-between px-4 py-3">
      <h1 className="flex items-center" aria-label="둥둥">
        <button>
          <Logo className="h-[37px] w-[142px]" />
        </button>
      </h1>

      <div className="flex items-center gap-3">
        <Link
          href={ROUTES.PAGE.LETTER}
          className="relative"
          aria-label="알림 버튼"
        >
          {notificationCount > 0 && (
            <div className="absolute -top-0.5 left-[22px] flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#ff6464] px-1">
              <Text
                variant="description"
                color="inverse"
                className="leading-none font-normal"
              >
                {notificationCount > MAX_COUNT ? "99+" : notificationCount}
              </Text>
            </div>
          )}
          <Icon icon="letter" size="xl" />
        </Link>
        <Link href={ROUTES.PAGE.SETTING} aria-label="설정 버튼">
          <Icon icon="setting" size="xl" />
        </Link>
      </div>
    </header>
  )
}
