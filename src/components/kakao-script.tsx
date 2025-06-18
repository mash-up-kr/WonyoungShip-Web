"use client"

import Script from "next/script"

declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void
      isInitialized: () => boolean
      Auth: {
        authorize: (setting?: {
          redirectUri?: string
          state?: string
          scope?: string
          prompt?: string
          loginHint?: string
          nonce?: string
          throughTalk?: boolean
        }) => void
      }
    }
  }
}

export const KakaoScript = () => {
  const handleScriptLoad = () => {
    const appKey = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY

    if (typeof window !== "undefined" && window.Kakao && appKey) {
      window.Kakao.init(appKey)
    }
  }

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
      integrity="sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6"
      crossOrigin="anonymous"
      onLoad={handleScriptLoad}
    ></Script>
  )
}
