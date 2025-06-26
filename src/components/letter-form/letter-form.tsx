"use client"

import React from "react"

import { LetterFormProvider, useLetterForm } from "@/contexts/letter-form-context"

import BasicHeader from "../common/header/basic-header"

import Step1 from "./step1/step1"
import Step2 from "./step2/step2"

const LetterFormContent = () => {
  const { step, setStep } = useLetterForm()

  return (
    <section className="relative h-dvh w-full">
      <BasicHeader
        hasBackButton={step !== 1}
        onClickBackButton={() => setStep(step - 1)}
        centerText="To. 예인"
      />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
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
