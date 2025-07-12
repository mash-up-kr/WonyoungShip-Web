import { redirect, RedirectType } from "next/navigation"

import { apiApi } from "@/__generated__/Api/Api.api"
import { RegisterCard } from "@/components/tag"
import { LETTER_TYPE } from "@/constants/letter"
import { ROUTES } from "@/constants/routes"
import { TOAST_ERROR } from "@/constants/toast-error"

const INVALID_TAG_ID_STATUS = "5000"

const TagPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id

  const {
    data: { code, data },
  } = await apiApi.getTag({ tag: id })

  if (code === INVALID_TAG_ID_STATUS) {
    redirect(`/landing?error=${TOAST_ERROR.NOT_FOUND}`, RedirectType.replace)
  }

  if (!data || !data.memberId) {
    return (
      <div className="relative h-screen">
        <RegisterCard />
      </div>
    )
  }

  redirect(
    `${ROUTES.PAGE.LETTER_FORM}?type=${LETTER_TYPE.TARGET}&receiveId=${data.memberId}`,
    RedirectType.replace,
  )
}

export default TagPage
