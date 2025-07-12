import { cookies } from "next/headers"

import { ACCESS_TOKEN_KEY } from "@/constants/cookies"

import { CardRegistrationPromptForGuest } from "./card-registration-prompt-for-guest"
import { CardRegistrationPromptForUser } from "./card-registration-prompt-for-user"

export const RegisterCard = async () => {
  const serverCookie = await cookies()

  const token = serverCookie.get(ACCESS_TOKEN_KEY)?.value

  if (!token) {
    return <CardRegistrationPromptForGuest />
  }

  return <CardRegistrationPromptForUser />
}
