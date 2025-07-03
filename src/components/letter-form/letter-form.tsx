"use client"

import React from "react"

import { LetterFormProvider } from "@/contexts/letter-form-context"

import LetterFormContent from "./letter-form-content"

const LetterForm = () => {
  return (
    <LetterFormProvider>
      <LetterFormContent />
    </LetterFormProvider>
  )
}

export default LetterForm
