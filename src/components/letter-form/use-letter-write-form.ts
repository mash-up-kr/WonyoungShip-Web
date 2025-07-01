import { useForm } from "react-hook-form"

import { LetterWriteRequestType } from "@/__generated__/@types"

const defaultValues: LetterWriteRequestType = {
  receiverId: 0,
  scheduleDate: "",
  weather: "SUNNY",
  musicId: 0,
  senderNickname: "",
  needFortuneCookie: false,
  content: "",
}

export const useLetterWriteForm = () => {
  return useForm<LetterWriteRequestType>({
    defaultValues,
    mode: "onChange",
  })
}
