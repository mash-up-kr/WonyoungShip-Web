import React from "react"

import { Button, Text } from "@/components/common"

const Step3 = () => {
  const onConfirm = () => {}
  return (
    <section className="px-[16px]">
      <Text
        as="h2"
        variant="heading"
        size="small"
        color="primary"
        className="mt-[48px] flex justify-center"
      >
        편지가 보내졌어요!
      </Text>


      <article>



      </article>

      <footer className="fixed right-0 bottom-0 left-0 px-[16px] py-[24px]">
        <div className="mx-auto max-w-[420px]">
          <Button
            variant="blue"
            text="완료"
            className="mt-[16px]"
            onClick={onConfirm}
          />
        </div>
      </footer>
    </section>
  )
}

export default Step3
