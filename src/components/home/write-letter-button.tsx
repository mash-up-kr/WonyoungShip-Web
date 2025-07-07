import Link from "next/link"

import { Text, Icon } from "@/components/common"

export const WriteLetterButton = () => {
  return (
    <Link
      href="/"
      className="flex bg-background-white mx-2 justify-between items-center rounded-2xl p-4 shadow-[0px_8px_40px_0px_rgba(101,142,185,0.10)]"
    >
      <div className="flex flex-col justify-between ">
        <Text
          variant="description"
          size="large"
          color="tertiary"
          className="font-medium"
        >
          미래의 나에게 하고 싶은 말을 전해보세요
        </Text>
        <span className="from-neutral-70 bg-gradient-to-r to-blue-100 bg-clip-text text-lg font-semibold text-transparent">
          미래의 나에게 편지 전하기
        </span>
      </div>
      <Icon icon="chevronRight" stroke="secondary" />
    </Link>
  )
}
