import {
  LandingHeader,
  KakaoLoginButton,
  LetterList,
  RandomLetterButton,
  LandingToast,
} from "@/components/landing"

const LandingPage = () => {
  return (
    <main className="relative h-dvh w-full">
      <div className="flex flex-col gap-7 overflow-hidden">
        <LandingToast />
        <LandingHeader />
        <LetterList />
        <KakaoLoginButton />
      </div>
      <RandomLetterButton />
    </main>
  )
}

export default LandingPage
