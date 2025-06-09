import {
  LandingHeader,
  KakaoLoginButton,
  LetterList,
  RandomLetterButton,
} from "@/components/landing"

const LandingPage = () => {
  return (
    <main className="relative min-h-screen w-full">
      <LandingHeader />
      <LetterList />
      <KakaoLoginButton />
      <RandomLetterButton />
    </main>
  )
}

export default LandingPage
