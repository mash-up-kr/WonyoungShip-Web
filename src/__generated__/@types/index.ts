/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: brightbong92                                      ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiResponseUnitType {
  code: string
  message: string
  data?: UnitType
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export type UnitType = object

export interface ChangeEmailSettingRequestType {
  isOn: boolean
}

export interface LetterWriteRequestType {
  /** @format int64 */
  receiverId: number
  content: string
  /** @format date */
  scheduleDate: string
  weather: "SUNNY" | "CLOUDY" | "RAINY" | "SNOWY" | "NIGHT_SHINING"
  /** @format int64 */
  musicId?: number
  senderNickname: string
  needFortuneCookie: boolean
}

export interface ApiResponseType {
  code: string
  message: string
  data?: object
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export interface KakaoLoginRequestType {
  token: string
  url: string
}

export interface ApiResponseLetterMarkedResponseType {
  code: string
  message: string
  data?: LetterMarkedResponseType
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export interface LetterMarkedResponseType {
  /** @format int64 */
  letterId: number
  marked: boolean
}

export interface ApiResponseMemberSettingResponseType {
  code: string
  message: string
  data?: MemberSettingResponseType
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export interface MemberSettingResponseType {
  email: string
  emailAlarm: boolean
  tosUrl: string
  privacyUrl: string
}

export interface ApiResponseLettersMonthlyResponseType {
  code: string
  message: string
  data?: LettersMonthlyResponseType
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export interface LetterPreviewResponseType {
  /** @format int64 */
  letterId: number
  content?: string
  /** @format date */
  scheduleDate: string
  marked: boolean
}

export interface LettersMonthlyResponseType {
  /** @format int32 */
  year: number
  /** @format int32 */
  month: number
  letters: LetterPreviewResponseType[]
  days: string[]
}

export interface ApiResponseLetterMetaReadResponseType {
  code: string
  message: string
  data?: LetterMetaReadResponseType
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export interface LetterMetaReadResponseType {
  senderNickname?: string
  receiverNickname: string
  musics: LetterMusicResponseType[]
}

export interface LetterMusicResponseType {
  title: string
  artist: string
  url: string
  mood: string
}

export interface ApiResponseLetterDetailResponseType {
  code: string
  message: string
  data?: LetterDetailResponseType
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export interface LetterDetailResponseType {
  senderNickname: string
  marked: boolean
  /** @format date */
  createdDate: string
  /** @format date */
  scheduleDate: string
  weatherType: "SUNNY" | "CLOUDY" | "RAINY" | "SNOWY" | "NIGHT_SHINING"
  content: string
  music?: LetterMusicResponseType
  fortuneCookieMessage?: string
}

export interface ApiResponseLettersDailyResponseType {
  code: string
  message: string
  data?: LettersDailyResponseType
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export interface LettersDailyResponseType {
  /** @format date */
  date: string
  letters: LetterPreviewResponseType[]
}

export interface ApiResponseLettersWeeklyCountResponseType {
  code: string
  message: string
  data?: LettersWeeklyCountResponseType
  /** @format int32 */
  pageIndex?: number
  /** @format int32 */
  pageSize?: number
}

export interface LettersWeeklyCountResponseType {
  /** @format int64 */
  notViewedCount: number
  receivedCountPerDay: number[]
}
