"use client"

import { Text } from "../text"

import BaseDialog from "./base-dialog"
interface CalendarDialogProps {
  isOpen: boolean
  onCancel: VoidFunction
}

export const CalendarDialog = ({ isOpen, onCancel }: CalendarDialogProps) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onCancel}
      dialogPanelProps={{
        className: "w-[306px] flex flex-col items-center gap-4",
      }}
    >
      <div className="flex-coll bg-background-white flex w-full gap-3 rounded-[1.25rem] p-6">
        <div>calender header</div>
        <div>calender</div>
      </div>
      <button className="bg-neutral-20 cursor-pointer rounded-lg px-2.5 py-2">
        <Text variant="body" size="small" color="tertiary">
          완료
        </Text>
      </button>
    </BaseDialog>
  )
}
