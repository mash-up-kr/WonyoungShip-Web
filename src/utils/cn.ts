import clsx from "clsx"
import { ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

export const extendTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-color": [
        "text-text-primary",
        "text-text-secondary",
        "text-text-tertiary",
        "text-text-assistive",
        "text-text-disabled",
        "text-text-inverse",
        "text-text-brand",
        "text-neutral-10",
        "text-neutral-20",
        "text-neutral-30",
        "text-neutral-40",
        "text-neutral-50",
        "text-neutral-60",
        "text-neutral-70",
        "text-neutral-80",
        "text-neutral-90",
        "text-orange-10",
        "text-orange-50",
        "text-orange-100",
        "text-green-10",
        "text-green-50",
        "text-green-100",
        "text-blue-10",
        "text-blue-50",
        "text-blue-100",
        "text-red-100",
        "text-alpha-20",
        "text-alpha-40",
        "text-alpha-60",
      ],
    },
  },
})

export const cn = (...inputs: ClassValue[]) => {
  return extendTwMerge(clsx(inputs))
}
