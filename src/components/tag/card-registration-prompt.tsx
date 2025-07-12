import { Button, Text } from "../common"

interface CardRegistrationPromptProps {
  isLoggedIn: boolean
}

const CARD_REGISTRATION_PROMPT_TEXT = {
  user: {
    title: "아직 등록되지 않은 카드예요",
    description: [
      "지금 로그인된 계정으로 카드를 등록하면,",
      "누구나 이 카드를 태그해서 나에게 편지를 보낼 수 있어요.",
    ],
  },
  guest: {
    title: "아직 등록되지 않은 카드예요",
    description: [
      "로그인 후 카드를 등록하면,",
      "누구나 이 카드를 태그해서 나에게 편지를 보낼 수 있어요.",
    ],
  },
}

export const CardRegistrationPrompt = ({
  isLoggedIn,
}: CardRegistrationPromptProps) => {
  const promptText = isLoggedIn
    ? CARD_REGISTRATION_PROMPT_TEXT.user
    : CARD_REGISTRATION_PROMPT_TEXT.guest

  return (
    <div className="absolute top-1/2 left-1/2 flex w-full -translate-1/2 flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-1.5">
        <Text as="h1" variant="heading" size="small">
          {promptText.title}
        </Text>
        <Text variant="body" size="small" color="secondary">
          {promptText.description[0]}
        </Text>
        <Text variant="body" size="small" color="secondary">
          {promptText.description[1]}
        </Text>
      </div>
      <Button variant="blue" className="w-[167.5px]">
        지금 계정으로 등록하기
      </Button>
    </div>
  )
}
