import BasicHeader from "@/components/common/header/basic-header"
import { DateViewSwitchHeader } from "@/components/letter"

const LetterListPage = () => {
  return (
    <div>
      <BasicHeader centerText="편지 목록" />
      <DateViewSwitchHeader />
    </div>
  )
}

export default LetterListPage
