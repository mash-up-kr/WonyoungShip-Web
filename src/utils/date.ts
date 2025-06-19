/** 날짜 YY-MM-DD 형태로 변환하는 함수 */
export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0]
}

/** 월요일 구하는 함수 */
export const getMondayOfWeek = (date: Date) => {
  const day = date.getDay()
  const diff = date.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(date.setDate(diff))
}

/** 이번 주 날짜 구하는 함수 (월요일부터) */
export const currentWeekDates = Array.from({ length: 7 }).map((_, i) => {
  const tempWeek = new Date(getMondayOfWeek(new Date()))
  tempWeek.setDate(tempWeek.getDate() + i)
  return tempWeek
})
