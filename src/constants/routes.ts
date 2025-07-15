export const ROUTES = {
  PAGE: {
    LANDING: "landing",
    HOME: "/home",
    LETTER: "/letter",
    LETTER_FORM: "/letter-form",
    LETTER_TODAY: "/letter/today",
    SETTING: "/setting",
  },
  API: {
    OAUTH: "/api/oauth",
    REDIRECT_LOGIN: "/api/oauth/kakao",
    TOKEN: "/api/oauth/kakao/token",
    LOGOUT: "/api/oauth/logout",
  },
} as const

export type PageRouteValues = (typeof ROUTES.PAGE)[keyof typeof ROUTES.PAGE]
export type ApiRouteValues = (typeof ROUTES.API)[keyof typeof ROUTES.API]
export type AllRouteValues = PageRouteValues | ApiRouteValues
