import { ElementType, HTMLAttributes, PropsWithChildren } from "react"

interface TextProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  as: ElementType
}

export const Text = ({ children, as = "span", ...props }: TextProps) => {
  const Component = as

  return <Component {...props}>{children}</Component>
}
