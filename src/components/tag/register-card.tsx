import { cookies } from "next/headers"

import { ACCESS_TOKEN_KEY } from "@/constants/cookies"

export const RegisterTag = async () => {
  const serverCookie = await cookies()

  const token = serverCookie.get(ACCESS_TOKEN_KEY)?.value

  if (!token) {
    return <>Login</>
  }

  return <>Register</>
}
