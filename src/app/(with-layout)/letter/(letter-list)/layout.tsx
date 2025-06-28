import { PropsWithChildren, ReactNode } from "react"

interface LetterListLayoutProps extends PropsWithChildren {
  view?: ReactNode
}

const LetterListLayout = ({ view, children }: LetterListLayoutProps) => {
  return (
    <>
      {children}
      {view}
    </>
  )
}

export default LetterListLayout
