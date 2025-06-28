/** 날짜 YY-MM-DD 형태로 변환하는 함수 */
export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0]
}

/** 월요일 구하는 함수 */
export const getMondayOfWeek = (date: Date) => {
  const day = date.getDay()
  const diff = date.getDate() - day + (day === 0 ? -6 : 1)
  const result = new Date(date.getFullYear(), date.getMonth(), diff)
  result.setHours(12)
  return result
}

/** 이번 주 날짜 구하는 함수 (월요일부터) */
export const currentWeekDates = Array.from({ length: 7 }).map((_, i) => {
  const tempWeek = new Date(getMondayOfWeek(new Date()))
  tempWeek.setDate(tempWeek.getDate() + i)
  return tempWeek
})

/** 남은 일수 구하는 함수 (지난 날짜면 음수, 이후 날짜는 양수)*/
export const getDaysDelivery = (scheduleDate: string): number => {
  const today = new Date()
  const target = new Date(scheduleDate)
  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

/**
 * 두 날짜 문자열(YYYY-MM-DD)의 차이를 일(day) 단위로 반환
 * @param start 시작일자
 * @param end 종료일자 
 * @returns number 
 */

export const getDateDiffInDays = (start: string, end: string): number  => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const diffInMs = endDate.getTime() - startDate.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  return diffInDays
}

/** YYYY-MM-DD에서 YY.MM.DD로 변환 */
export const formatToYYMMDD = (dateStr: string): string  => {
  const [year, month, day] = dateStr.split("-")
  const shortYear = year.slice(2) 
  return `${shortYear}.${month}.${day}`
}




