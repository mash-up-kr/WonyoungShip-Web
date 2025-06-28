import BasicHeader from "@/components/common/header/basic-header"
import { DateViewSwitchHeader } from "@/components/letter"

const LetterListDefault = () => {
  return (
    <div>
      <BasicHeader centerText="편지 목록" />
      <DateViewSwitchHeader />
    </div>
  )
}

export default LetterListDefault
