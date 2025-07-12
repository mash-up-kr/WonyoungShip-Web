import { redirect, RedirectType } from "next/navigation"

import { tagApi } from "@/__generated__/Tag/Tag.api"
import { LETTER_TYPE } from "@/constants/letter"
import { TOAST_ERROR } from "@/constants/toast-error"

const INVALID_TAG_ID_STATUS = "5000"

const TagPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id

  const {
    data: { code, data },
  } = await tagApi.getTag({ tag: id })

  if (code === INVALID_TAG_ID_STATUS) {
    redirect(`/landing?error=${TOAST_ERROR.NOT_FOUND}`, RedirectType.replace)
  }

  if (!data || !data.memberId) {
    return <>아직 등록되지 않은 카드예요</>
  }

  redirect(
    `/letter-form?type=${LETTER_TYPE.TARGET}&receiveId=${data.memberId}`,
    RedirectType.replace,
  )
}

export default TagPage
