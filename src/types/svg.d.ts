declare module "*.svg" {
  import type { SVGProps } from "react"
  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>
  export default ReactComponent
}
