import { redirect } from "next/navigation"

import { getToken } from "@/apis/token.api"
import { ACCESS_TOKEN_KEY } from "@/constants/cookies"
import { accessTokenState } from "@/utils/storage"

type CustomRequestInit = RequestInit & {
  headers: {
    Authorization?: string
    [key: string]: string | undefined
  }
}

type RequestInterceptor =
  | ((config: RequestInit) => Promise<CustomRequestInit>)
  | null

type ResponseInterceptor = ((response: Response) => Promise<Response>) | null

/**
 * 인터셉터 처리를 위한 핸들러 함수
 */
let requestInterceptor: RequestInterceptor = null
let responseInterceptor: ResponseInterceptor = null

/**
 * fetch API를 확장한 커스텀 함수
 * 요청/응답 인터셉터 기능 제공
 */
const customFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  try {
    // 요청 전 인터셉터 적용
    let config = init || {}
    if (requestInterceptor) {
      config = await requestInterceptor(config)
    }

    // 실제 fetch 요청 실행
    const response = await fetch(input, config)

    // 응답 후 인터셉터 적용
    if (responseInterceptor) {
      return responseInterceptor(response)
    }

    return response
  } catch (error) {
    return Promise.reject(error)
  }
}

/**
 * 인터셉터 설정 인터페이스
 */
const interceptors = {
  request: {
    use: (handler: RequestInterceptor) => {
      requestInterceptor = handler
    },
  },
  response: {
    use: (handler: (response: Response) => Promise<Response>) => {
      responseInterceptor = handler
    },
  },
}

// 토큰을 가져오는 중복 요청을 방지하기 위한 Promise 변수
let tokenPromise: Promise<string | null> | null = null

const getClientSideToken = async (): Promise<string | null> => {
  const cachedToken = accessTokenState.getValue()

  // 이미 토큰이 캐싱되어 있으면 즉시 반환
  if (cachedToken) {
    return cachedToken
  }

  // 다른 요청에 의해 토큰을 이미 가져오는 중이면 해당 Promise를 기다림
  if (tokenPromise) {
    return await tokenPromise
  }

  // 토큰을 가져오는 Promise를 생성하고 변수에 할당
  tokenPromise = (async () => {
    try {
      const token = await getToken()
      return token
    } catch (error) {
      console.error("Token fetch error:", error)
      return null // 실패 시 null 반환
    } finally {
      // 완료 후 Promise 초기화
      tokenPromise = null
    }
  })()

  return await tokenPromise
}

// 요청 인터셉터 설정
interceptors.request.use(async (config) => {
  let token: string

  if (typeof window !== "undefined") {
    token = (await getClientSideToken()) || ""
  } else {
    const { cookies } = await import("next/headers")
    const serverCookie = await cookies()

    token = serverCookie.get(ACCESS_TOKEN_KEY)?.value || ""
  }

  return {
    ...config,
    headers: {
      ...(config.headers as Record<string, string>),
      // 필요한 헤더 추가
      // 예: "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  }
})

const UNAUTHORIZED = 401

// 응답 인터셉터 설정
interceptors.response.use(async (response) => {
  if (response.status === UNAUTHORIZED) {
    redirect("/landing?error=unauthorized")
  }
  return response
})

Object.assign(customFetch, { interceptors })

export default customFetch
