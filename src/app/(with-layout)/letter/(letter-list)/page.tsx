import Link from "next/link"

import BasicHeader from "@/components/common/header/basic-header"

const LetterListPage = () => {
  return (
    <>
      <BasicHeader centerText="편지 목록" />
      <Link href="/letter/calendar">캘린더</Link>
      <Link href="/letter/list">리스트</Link>
    </>
  )
}

export default LetterListPage
