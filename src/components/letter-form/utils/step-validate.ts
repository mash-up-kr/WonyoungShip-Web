import { LetterWriteRequestType } from "@/__generated__/@types"

export const MESSAGE_MAP = {
  IS_PASS: "통과",
  WEATHER_REQUIRED: "날씨를 선택해주세요.",
  CONTENT_REQUIRED: "내용을 입력해주세요.",
  NICKNAME_REQUIRED: "닉네임을 입력해주세요.",
  MUSIC_REQUIRED: "음악을 선택해주세요.",
  DATE_REQUIRED: "날짜를 선택해주세요.",
}

export const validateStep1 = ({
  formData,
}: {
  formData: LetterWriteRequestType
}) => {
  const { weather, content, senderNickname, musicId } = formData
  if (!weather) {
    return {
      message: MESSAGE_MAP.WEATHER_REQUIRED,
    }
  }
  if (!content.trim()) {
    return {
      message: MESSAGE_MAP.CONTENT_REQUIRED,
    }
  }
  if (!senderNickname.trim()) {
    return {
      message: MESSAGE_MAP.NICKNAME_REQUIRED,
    }
  }
  if (!musicId) {
    return {
      message: MESSAGE_MAP.MUSIC_REQUIRED,
    }
  }
  return {
    message: MESSAGE_MAP.IS_PASS,
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
      message: MESSAGE_MAP.DATE_REQUIRED,
    }
  }
  return {
    message: MESSAGE_MAP.IS_PASS,
  }
}
