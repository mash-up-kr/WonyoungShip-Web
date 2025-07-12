import { Button, Text } from "../common"

export const CardRegistrationPromptForUser = () => {
  return (
    <div className="absolute top-1/2 left-1/2 flex w-full -translate-1/2 flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-1.5">
        <Text as="h1" variant="heading" size="small">
          아직 등록되지 않은 카드예요
        </Text>
        <Text variant="body" size="small" color="secondary">
          지금 로그인된 계정으로 카드를 등록하면,
        </Text>
        <Text variant="body" size="small" color="secondary">
          누구나 이 카드를 태그해서 나에게 편지를 보낼 수 있어요.
        </Text>
      </div>
      <Button variant="blue" className="w-[167.5px]">
        지금 계정으로 등록하기
      </Button>
    </div>
  )
}
