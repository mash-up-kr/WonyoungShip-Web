import {
  LandingHeader,
  KakaoLoginButton,
  LetterList,
  RandomLetterButton,
} from "@/components/landing"

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <LetterList />
      <KakaoLoginButton />
      <RandomLetterButton />
    </>
  )
}

export default LandingPage
