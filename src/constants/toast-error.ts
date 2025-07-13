export const TOAST_ERROR = {
  LOGIN: "login",
  UNAUTHORIZED: "unauthorized",
  NOT_FOUND: "not-found",
  LETTER_DETAIL_ERROR: "letter-detail-error",
} as const

export type ToastError = (typeof TOAST_ERROR)[keyof typeof TOAST_ERROR]
