import { LetterType } from "@/types/letter-form"

export const LETTER_TYPE: Record<LetterType, LetterType> = {
  SELF: "SELF",
  TARGET: "TARGET",
  RANDOM: "RANDOM",
} as const
