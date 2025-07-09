import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="m-auto w-full max-w-[420px]">{children}</main>
}

export default layout
