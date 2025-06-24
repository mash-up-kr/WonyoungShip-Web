import React from "react"

import { Text } from "@/components/common"
import { Button } from "@/components/common/button"

const ButtonPage = () => {
  return (
    <div className="flex flex-col">
      <Button variant="blue" text="버튼" />

      <br />

      <Button variant="blue" disabled text="버튼" />

      <br />

      <Button variant="blue">
        <Text variant="body" size="medium" color="orange-100">
          버튼
        </Text>
      </Button>
      <br />
      <Button variant="blue" disabled>
        <Text variant="body" size="medium" color="red-100">
          버튼
        </Text>
      </Button>
    </div>
  )
}

export default ButtonPage
