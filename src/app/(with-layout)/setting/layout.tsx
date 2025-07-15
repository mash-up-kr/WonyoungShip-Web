const SettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background-assistive absolute right-0 left-0 h-full min-h-dvh">
      <div className="m-auto min-h-dvh w-full max-w-[420px] antialiased">
        {children}
      </div>
    </div>
  )
}

export default SettingLayout
