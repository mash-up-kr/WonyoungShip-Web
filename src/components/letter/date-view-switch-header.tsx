import { CurrentDate, ViewSwitch } from "./letter-list-header"

export const DateViewSwitchHeader = () => {
  return (
    <section className="flex items-center justify-between">
      <CurrentDate />
      <ViewSwitch />
    </section>
  )
}
