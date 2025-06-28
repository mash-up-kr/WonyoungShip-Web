
import Link from "next/link"


import { Text, Icon } from "@/components/common"

export const ServiceInfo = () => {
    return( <section className="bg-background-white flex w-full flex-col gap-4 rounded-2xl p-4">
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
        </section>)
}