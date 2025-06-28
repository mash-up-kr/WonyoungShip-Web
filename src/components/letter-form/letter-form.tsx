"use client"

import React from "react"

import {
  LetterFormProvider,
  useLetterForm,
} from "@/contexts/letter-form-context"

import BasicHeader from "../common/header/basic-header"

import Step1 from "./step1/step1"
import Step2 from "./step2/step2"
import Step3 from "./step3/step3"

const LetterFormContent = () => {
  const { step, setStep } = useLetterForm()

  const centerText = step === 1 ? "To. 예인" : ""
  return (
    <section className="relative h-dvh w-full">
      <BasicHeader
        hasBackButton={step === 2}
        onClickBackButton={() => setStep(step - 1)}
        centerText={centerText}
      />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </section>
  )
}

const LetterForm = () => {
  return (
    <LetterFormProvider>
      <LetterFormContent />
    </LetterFormProvider>
  )
}

export default LetterForm
