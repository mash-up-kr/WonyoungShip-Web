/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: brightbong92                                      ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import customFetch from "@/configs/fetch/instance"
import { ContentType, HttpClient, RequestParams } from "../@http-client"
import type {
  ApiResponseLetterDetailResponseType,
  ApiResponseLetterMarkedResponseType,
  ApiResponseLetterMetaReadResponseType,
  ApiResponseLettersDailyResponseType,
  ApiResponseLettersMonthlyResponseType,
  ApiResponseLettersWeeklyCountResponseType,
  ApiResponseMemberSettingResponseType,
  ApiResponseType,
  ApiResponseUnitType,
  ChangeEmailSettingRequestType,
  KakaoLoginRequestType,
  LetterWriteRequestType,
} from "../@types"

export class ApiApi<SecurityDataType = unknown> extends HttpClient {
  /**
   * No description
   *
   * @tags setting-api
   * @name Withdraw
   * @request POST:/api/v1/setting/member/withdraw
   * @secure
   */
  withdraw = (variables?: { params?: RequestParams }) =>
    this.request<ApiResponseUnitType, any>({
      path: `/api/v1/setting/member/withdraw`,
      method: "POST",
      secure: true,
      ...variables?.params,
    }) /**
   * No description
   *
   * @tags logout-api
   * @name Logout
   * @request POST:/api/v1/setting/member/logout
   * @secure
   */
  logout = (variables?: { params?: RequestParams }) =>
    this.request<ApiResponseUnitType, any>({
      path: `/api/v1/setting/member/logout`,
      method: "POST",
      secure: true,
      ...variables?.params,
    }) /**
   * No description
   *
   * @tags setting-api
   * @name ChangeEmailAlarm
   * @request POST:/api/v1/setting/alarm/email
   * @secure
   */
  changeEmailAlarm = (variables: {
    data: ChangeEmailSettingRequestType
    params?: RequestParams
  }) =>
    this.request<ApiResponseUnitType, any>({
      path: `/api/v1/setting/alarm/email`,
      method: "POST",
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      ...variables.params,
    }) /**
   * @description 특정 년도, 월에 해당하는 편지 목록을 조회합니다.
   *
   * @tags 편지 조회 API
   * @name ReadLetters
   * @summary 편지 목록 조회 API
   * @request GET:/api/v1/letters
   * @secure
   */
  readLetters = (variables: {
    query: {
      /** @format int32 */
      year: number
      /** @format int32 */
      month: number
    }
    params?: RequestParams
  }) =>
    this.request<ApiResponseLettersMonthlyResponseType, any>({
      path: `/api/v1/letters`,
      method: "GET",
      query: variables.query,
      secure: true,
      ...variables.params,
    }) /**
   * @description 보내는 사람, 받는 사람, 메시지, 예약 날짜, 날씨, 음악, 닉네임, 포춘쿠키 정보를 포함해 편지를 작성합니다.
   *
   * @tags 편지 쓰기 API
   * @name WriteLetter
   * @summary 편지 작성 API
   * @request POST:/api/v1/letters
   * @secure
   */
  writeLetter = (variables: {
    data: LetterWriteRequestType
    params?: RequestParams
  }) =>
    this.request<ApiResponseType, any>({
      path: `/api/v1/letters`,
      method: "POST",
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...variables.params,
    }) /**
   * No description
   *
   * @tags 카카오 로그인 API
   * @name KakaoLogin
   * @summary 카카오 로그인 API
   * @request POST:/api/v1/auth/kakao
   * @secure
   */
  kakaoLogin = (variables: {
    data: KakaoLoginRequestType
    params?: RequestParams
  }) =>
    this.request<ApiResponseType, any>({
      path: `/api/v1/auth/kakao`,
      method: "POST",
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...variables.params,
    }) /**
   * No description
   *
   * @tags 편지 쓰기 API
   * @name MarkedLetter
   * @request PATCH:/api/v1/letters/marked/{letterId}
   * @secure
   */
  markedLetter = (variables: { letterId: number; params?: RequestParams }) =>
    this.request<ApiResponseLetterMarkedResponseType, any>({
      path: `/api/v1/letters/marked/${variables.letterId}`,
      method: "PATCH",
      secure: true,
      ...variables.params,
    }) /**
   * No description
   *
   * @tags setting-api
   * @name GetSetting
   * @request GET:/api/v1/setting
   * @secure
   */
  getSetting = (variables?: { params?: RequestParams }) =>
    this.request<ApiResponseMemberSettingResponseType, any>({
      path: `/api/v1/setting`,
      method: "GET",
      secure: true,
      ...variables?.params,
    }) /**
   * @description 편지 작성 시 필요한 수신자 정보, 음악 목록 등을 조회합니다.
   *
   * @tags letter-meta-read-api
   * @name ReadLetterMeta
   * @summary 편지 작성 메타 정보 조회
   * @request GET:/api/v1/letters/meta
   * @secure
   */
  readLetterMeta = (variables: {
    query: {
      /** @format int64 */
      receiverId: number
    }
    params?: RequestParams
  }) =>
    this.request<ApiResponseLetterMetaReadResponseType, any>({
      path: `/api/v1/letters/meta`,
      method: "GET",
      query: variables.query,
      secure: true,
      ...variables.params,
    }) /**
   * @description 읽을 수 있는 편지의 상세 정보를 조회합니다.
   *
   * @tags 편지 조회 API
   * @name ReadDetailLetter
   * @summary 편지 상세 조회
   * @request GET:/api/v1/letters/detail/{letterId}
   * @secure
   */
  readDetailLetter = (variables: {
    letterId: number
    params?: RequestParams
  }) =>
    this.request<ApiResponseLetterDetailResponseType, any>({
      path: `/api/v1/letters/detail/${variables.letterId}`,
      method: "GET",
      secure: true,
      ...variables.params,
    }) /**
   * @description 특정한 날에 받은 편지 목록을 조회합니다.
   *
   * @tags 편지 조회 API
   * @name ReadDailyLetters
   * @summary 일간 편지 목록 정보 조회
   * @request GET:/api/v1/letters/daily
   * @secure
   */
  readDailyLetters = (variables: {
    query: {
      /** @format date */
      date: string
    }
    params?: RequestParams
  }) =>
    this.request<ApiResponseLettersDailyResponseType, any>({
      path: `/api/v1/letters/daily`,
      method: "GET",
      query: variables.query,
      secure: true,
      ...variables.params,
    }) /**
   * @description 이번 주에 받은 편지 개수를 조회합니다.
   *
   * @tags 편지 조회 API
   * @name ReadWeeklyCount
   * @summary 주간 편지 개수 정보 조회
   * @request GET:/api/v1/letters/count/weekly
   * @secure
   */
  readWeeklyCount = (variables?: { params?: RequestParams }) =>
    this.request<ApiResponseLettersWeeklyCountResponseType, any>({
      path: `/api/v1/letters/count/weekly`,
      method: "GET",
      secure: true,
      ...variables?.params,
    }) /**
   * No description
   *
   * @tags 랜딩 컨텐츠 API
   * @name GetLandingContent
   * @summary 랜딩 컨텐츠 조회 API
   * @request GET:/api/v1/landing
   * @secure
   */
  getLandingContent = (variables?: { params?: RequestParams }) =>
    this.request<ApiResponseType, any>({
      path: `/api/v1/landing`,
      method: "GET",
      secure: true,
      format: "json",
      ...variables?.params,
    })
}

export const apiApi = new ApiApi({ customFetch })
