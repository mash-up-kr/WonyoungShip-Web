import { Suspense } from "react"

import { CalendarView } from "@/components/letter/(letter-list)/@view/calendar"

const LetterListCalendarView = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CalendarView />
    </Suspense>
  )
}

export default LetterListCalendarView
