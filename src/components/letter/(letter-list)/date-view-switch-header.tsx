import { CurrentDate, ViewSwitch } from "./letter-list-header"

export const DateViewSwitchHeader = () => {
  return (
    <section className="flex items-center justify-between px-3">
      <CurrentDate />
      <ViewSwitch />
    </section>
  )
}
