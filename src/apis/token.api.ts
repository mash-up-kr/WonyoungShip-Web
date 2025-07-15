import { ROUTES } from "@/constants/routes"

export const getToken = async (): Promise<string | null> => {
  const response = await fetch(ROUTES.API.TOKEN, {
    credentials: "include",
  })
  const data = await response.json()
  return data?.token ?? null
}
