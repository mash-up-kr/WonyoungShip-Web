"use client"

import {
  Checkbox as HeadlessCheckbox,
  CheckboxProps as HeadlessCheckboxProps,
} from "@headlessui/react"
import clsx from "clsx"
import React, { useState } from "react"

import { Icon } from "./icon"

export interface CheckboxProps extends HeadlessCheckboxProps {
  isChecked?: boolean
}

const Checkbox = ({
  className,
  isChecked = false,
  ...props
}: CheckboxProps) => {
  const [enabled, setEnabled] = useState(isChecked)

  const onChange = (checked: boolean) => {
    setEnabled(checked)
  }

  return (
    <HeadlessCheckbox
      checked={enabled}
      onChange={onChange}
      className={clsx("group size-6", className)}
      {...props}
    >
      <Icon
        size="lg"
        icon={enabled ? "checked" : "unchecked"}
        className={`cursor-pointer`}
      />
    </HeadlessCheckbox>
  )
}

export default Checkbox
