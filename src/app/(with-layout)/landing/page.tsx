import { Suspense } from "react"

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
        <Suspense>
          <LandingToast />
        </Suspense>
        <LandingHeader />
        <LetterList />
        <KakaoLoginButton />
      </div>
      <RandomLetterButton />
    </main>
  )
}

export default LandingPage
