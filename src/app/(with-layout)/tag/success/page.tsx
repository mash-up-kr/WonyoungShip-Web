import Link from "next/link"

import { Button, Text } from "@/components/common"

const SuccessPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 flex w-full -translate-1/2 flex-col items-center justify-center gap-5">
        <Text as="h1" variant="heading" size="small">
          등록 완료되었어요!
        </Text>
        <Link href="/home">
          <Button variant="blue" className="w-[167.5px]">
            홈으로 바로 가기
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SuccessPage
