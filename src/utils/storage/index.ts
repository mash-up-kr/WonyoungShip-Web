import { LocalStorageManager } from "./local-storage"

export const ACCESS_TOKEN_KEY = "@@access-token"
export const accessTokenStorage = new LocalStorageManager<string>(
  ACCESS_TOKEN_KEY,
  null,
)
