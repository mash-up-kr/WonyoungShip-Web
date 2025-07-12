import { Text } from "../common"

import { LoginButton } from "./login-button"
import { RegisterTagButton } from "./register-tag-button"

interface CardRegistrationPromptProps {
  isLoggedIn: boolean
}

const CARD_REGISTRATION_PROMPT_CONTENT = {
  user: {
    title: "아직 등록되지 않은 카드예요",
    description: [
      "지금 로그인된 계정으로 카드를 등록하면,",
      "누구나 이 카드를 태그해서 나에게 편지를 보낼 수 있어요.",
    ],
    button: <RegisterTagButton />,
  },
  guest: {
    title: "아직 등록되지 않은 카드예요",
    description: [
      "로그인 후 카드를 등록하면,",
      "누구나 이 카드를 태그해서 나에게 편지를 보낼 수 있어요.",
    ],
    button: <LoginButton />,
  },
}

export const CardRegistrationPrompt = ({
  isLoggedIn,
}: CardRegistrationPromptProps) => {
  const promptContent = isLoggedIn
    ? CARD_REGISTRATION_PROMPT_CONTENT.user
    : CARD_REGISTRATION_PROMPT_CONTENT.guest

  return (
    <div className="absolute top-1/2 left-1/2 flex w-full -translate-1/2 flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-1.5">
        <Text as="h1" variant="heading" size="small">
          {promptContent.title}
        </Text>
        <Text variant="body" size="small" color="secondary">
          {promptContent.description[0]}
        </Text>
        <Text variant="body" size="small" color="secondary">
          {promptContent.description[1]}
        </Text>
      </div>
      {promptContent.button}
    </div>
  )
}
