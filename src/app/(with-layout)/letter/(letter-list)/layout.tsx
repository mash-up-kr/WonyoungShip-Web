import { PropsWithChildren, ReactNode, Suspense } from "react"

interface LetterListLayoutProps extends PropsWithChildren {
  view?: ReactNode
}

const LetterListLayout = ({ view, children }: LetterListLayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        {children}
        {view}
      </Suspense>
    </div>
  )
}

export default LetterListLayout
