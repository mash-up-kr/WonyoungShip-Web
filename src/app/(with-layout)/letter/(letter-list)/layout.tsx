import { PropsWithChildren, ReactNode } from "react"

interface LetterListLayoutProps extends PropsWithChildren {
  view?: ReactNode
}

const LetterListLayout = ({ view, children }: LetterListLayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      {children}
      {view}
    </div>
  )
}

export default LetterListLayout
