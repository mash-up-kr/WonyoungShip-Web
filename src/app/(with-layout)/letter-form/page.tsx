import { Suspense } from "react"

import LetterForm from "@/components/letter-form/letter-form"

const LetterFormPage = () => {
  return (
    <Suspense>
      <LetterForm />
    </Suspense>
  )
}

export default LetterFormPage
