"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

import { WeatherIconName } from "@/assets/svg/weather"

interface LetterFormData {
  weather: WeatherIconName | null
  music: string | null
  content: string
  authorName: string
}

interface LetterFormContextType {
  step: number
  formData: LetterFormData
  setStep: (step: number) => void
  updateFormData: (data: Partial<LetterFormData>) => void
  resetForm: () => void
}

const LetterFormContext = createContext<LetterFormContextType | undefined>(undefined)

const initialFormData: LetterFormData = {
  weather: null,
  music: null,
  content: "",
  authorName: "익명의 너구리",
}

export const LetterFormProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<LetterFormData>(initialFormData)

  const updateFormData = (data: Partial<LetterFormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
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