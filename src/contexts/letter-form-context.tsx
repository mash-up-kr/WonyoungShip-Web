"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

import { LetterWriteRequestType } from "@/__generated__/@types"

export type FormDataType = {
  weather?: LetterWriteRequestType["weather"]
} & LetterWriteRequestType

interface LetterFormContextType {
  step: number
  formData: FormDataType
  setStep: (step: number) => void
  updateFormData: (data: Partial<FormDataType>) => void
  resetForm: () => void
}

const LetterFormContext = createContext<LetterFormContextType | undefined>(
  undefined,
)

const initialFormData: FormDataType = {
  receiverId: undefined,
  scheduleDate: "",
  weather: "SUNNY",
  musicId: null,
  senderNickname: "",
  needFortuneCookie: false,
  content: "",
}

export const LetterFormProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] =
    useState<LetterWriteRequestType>(initialFormData)

  const updateFormData = (data: Partial<LetterWriteRequestType>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const resetForm = () => {
    setStep(1)
    setFormData(initialFormData)
  }

  return (
    <LetterFormContext.Provider
      value={{
        step,
        formData,
        setStep,
        updateFormData,
        resetForm,
      }}
    >
      {children}
    </LetterFormContext.Provider>
  )
}

export const useLetterForm = () => {
  const context = useContext(LetterFormContext)
  if (!context) {
    throw new Error("useLetterForm must be used within LetterFormProvider")
  }
  return context
}
