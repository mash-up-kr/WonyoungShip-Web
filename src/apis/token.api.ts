import { ROUTES } from "@/constants/routes"
import { accessTokenState } from "@/utils/storage"

export const getToken = async () => {
  const cachedToken = accessTokenState.getValue()

  if (cachedToken) {
    return cachedToken
  }

  const response = await fetch(ROUTES.API.TOKEN, {
    credentials: "include",
  })
  const data = await response.json()

  accessTokenState.setValue(data?.token ?? "")
  return accessTokenState.getValue()
}
