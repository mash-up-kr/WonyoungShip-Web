import { Text } from "../text"

import BaseDialog from "./base-dialog"

export interface ConfirmDialogProps {
  isOpen: boolean
  title?: string
  desc?: string
  cancelText?: string
  confirmText?: string
  onCancel: VoidFunction
  onConfirm: VoidFunction
}

const ConfirmDialog = ({
  isOpen,
  title = "Title",
  desc = "Description",
  cancelText = "Cancel",
  confirmText = "Confirm",
  onCancel,
  onConfirm,
  ...props
}: ConfirmDialogProps) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onCancel}
      dialogPanelProps={{
        className: "bg-background-white min-w-[320px] rounded-[16px]",
      }}
      {...props}
    >
      <div className="flex flex-col items-center gap-[8px] p-[20px]">
        {/* Title */}
        <Text as="h2" variant="heading" size="small" color="primary">
          {title}
        </Text>
        {/* Description */}
        <Text variant="body" size="medium" color="secondary">
          {desc}
        </Text>
      </div>

      <div className="border-border-tertiary flex h-[48px] border-t-[1px]">
        <button
          className="border-border-tertiary flex w-full cursor-pointer justify-center border-r-[1px]"
          onClick={onCancel}
        >
          <Text
            className="flex place-items-center"
            variant="body"
            size="medium"
            color="brand"
          >
            {cancelText}
          </Text>
        </button>

        <button
          className="flex w-full cursor-pointer justify-center"
          onClick={onConfirm}
        >
          <Text
            className="flex place-items-center"
            variant="body"
            size="medium"
            color="tertiary"
          >
            {confirmText}
          </Text>
        </button>
      </div>
    </BaseDialog>
  )
}

export default ConfirmDialog
