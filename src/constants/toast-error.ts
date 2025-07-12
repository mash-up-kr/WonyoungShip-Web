export const TOAST_ERROR = {
  LOGIN: "login",
  UNAUTHORIZED: "unauthorized",
  NOT_FOUND: "not-found",
} as const

export type ToastError = (typeof TOAST_ERROR)[keyof typeof TOAST_ERROR]
