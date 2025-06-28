import BasicHeader from "@/components/common/header/basic-header"
import { DateViewSwitchHeader } from "@/components/letter"

const LetterListDefault = () => {
  return (
    <>
      <BasicHeader centerText="편지 목록" />
      <DateViewSwitchHeader />
    </>
  )
}

export default LetterListDefault
