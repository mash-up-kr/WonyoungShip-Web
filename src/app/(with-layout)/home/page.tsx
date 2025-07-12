import { apiApi } from "@/__generated__/Api/Api.api"
import { Header, Text } from "@/components/common"
import {
  WriteLetterButton,
  LetterCountdown,
  CopyAddressButton,
} from "@/components/home"
import { HomeToast } from "@/components/home/home-toast"

const DEFAULT_VALUE = {
  notViewedCount: 0,
  receivedCountPerDay: [0, 0, 0, 0, 0, 0, 0],
}

const Home = async () => {
  const response = await apiApi.readWeeklyCount()
  const letterList = response.data.data ?? DEFAULT_VALUE

  const totalReceivedCount =
    letterList?.receivedCountPerDay?.reduce((sum, count) => sum + count, 0) ?? 0

  return (
    <>
      <HomeToast />
      <Header notificationCount={letterList?.notViewedCount ?? 0} />
      <div className="flex flex-col px-2 pt-2 pb-6">
        <WriteLetterButton />
        <section className="mt-10 mb-4 flex flex-col">
          <div className="flex justify-between px-4">
            <h2 className="flex gap-2">
              <Text variant="heading" size="small" className="font-bold">
                나에게 오고 있는 편지
              </Text>
              <Text variant="heading" size="small" color="tertiary">
                {totalReceivedCount}
              </Text>
            </h2>
            <CopyAddressButton />
          </div>
        </section>
        <LetterCountdown
          letterCountPerDate={
            letterList?.receivedCountPerDay ?? DEFAULT_VALUE.receivedCountPerDay
          }
        />
      </div>
    </>
  )
}

export default Home
