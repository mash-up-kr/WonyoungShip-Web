import { LetterWriteRequestType } from "@/__generated__/@types"

export const validateStep1 = ({
  formData,
}: {
  formData: LetterWriteRequestType
}) => {
  const { weather, content, senderNickname, musicId } = formData
  if (!weather) {
    return {
      message: "날씨를 선택해주세요.",
    }
  }
  if (!content.trim()) {
    return {
      message: "내용을 입력해주세요.",
    }
  }
  if (!senderNickname.trim()) {
    return {
      message: "닉네임을 입력해주세요.",
    }
  }
  if (!musicId) {
    return {
      message: "음악을 선택해주세요.",
    }
  }
  return {
    message: "통과",
  }
}

export const validateStep2 = ({
  formData,
}: {
  formData: LetterWriteRequestType
}) => {
  const { scheduleDate } = formData
  if (!scheduleDate) {
    return {
      message: "날짜를 선택해주세요.",
    }
  }
  return {
    message: "통과",
  }
}
