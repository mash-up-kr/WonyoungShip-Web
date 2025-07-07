import { redirect } from "next/navigation"

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

// 요청 인터셉터 설정
interceptors.request.use(async (config) => {
  const cookieEndpoint = "/api/oauth/kakao/token"
  const cookieUrl =
    typeof window !== "undefined"
      ? cookieEndpoint
      : process.env.NODE_ENV === "development"
        ? (process.env.NEXT_PUBLIC_DEVELOPMENT_URL ?? "") + cookieEndpoint
        : (process.env.NEXT_PUBLIC_PRODUCTION_URL ?? "") + cookieEndpoint

  const cookieResponse = await fetch(cookieUrl, {
    credentials: "include",
  })

  const data = await cookieResponse.json()

  const token = data?.token || null

  return {
    ...config,
    headers: {
      ...config.headers,
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
