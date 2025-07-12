import { cookies } from "next/headers"

import { ACCESS_TOKEN_KEY } from "@/constants/cookies"

import { CardRegistrationPrompt } from "./card-registration-prompt"

export const RegisterCard = async () => {
  const serverCookie = await cookies()

  const token = serverCookie.get(ACCESS_TOKEN_KEY)?.value

  const isLoggedIn = !!token

  return <CardRegistrationPrompt isLoggedIn={isLoggedIn} />
}
