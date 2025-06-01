import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="m-auto w-full max-w-[420px]">{children}</div>
}

export default layout
