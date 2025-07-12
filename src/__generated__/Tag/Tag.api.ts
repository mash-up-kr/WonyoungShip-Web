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
import type { ApiResponseTagResponseType, RegisterTagRequestType } from "../@types"

export class TagApi<SecurityDataType = unknown> extends HttpClient {
  /**
   * @description 고유 태그 문자열로 등록된 정보를 조회합니다 (아직 등록된 계정이 없으면 memberId는 null)
   *
   * @tags 태그 API
   * @name GetTag
   * @summary 태그 정보 조회
   * @request GET:/tag/{tag}
   * @secure
   */
  getTag = (variables: { tag: string; params?: RequestParams }) =>
    this.request<ApiResponseTagResponseType, any>({
      path: `/tag/${variables.tag}`,
      method: "GET",
      secure: true,
      format: "json",
      ...variables.params,
    }) /**
   * @description 고유 태그 문자열에 계정을 등록합니다
   *
   * @tags 태그 API
   * @name RegisterTag
   * @summary 태그 등록
   * @request POST:/tag/{tag}
   * @secure
   */
  registerTag = (variables: { tag: string; data: RegisterTagRequestType; params?: RequestParams }) =>
    this.request<ApiResponseTagResponseType, any>({
      path: `/tag/${variables.tag}`,
      method: "POST",
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...variables.params,
    })
}

export const tagApi = new TagApi({ customFetch })
