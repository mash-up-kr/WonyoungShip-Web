"use client"

import React from "react"

const LetterFormSkeleton = () => (
  <section className="relative h-dvh w-full p-4">
    {/* 헤더 스켈레톤 */}
    <div className="flex h-12 items-center">
      <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
    </div>
    {/* Step1 스켈레톤: 음악 리스트 형태 */}
    <div className="mt-6 space-y-4">
      {[...Array(4)].map((_, idx) => (
        <div key={idx} className="flex items-center space-x-4">
          <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />
          <div className="flex-1">
            <div className="mb-2 h-4 w-32 animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-20 animate-pulse rounded bg-gray-100" />
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default LetterFormSkeleton
