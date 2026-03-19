import { Dialog } from 'radix-ui'
import { clsx } from 'clsx'

export const Modal = ({
  isOpen,
  isModal,
  className,
  title,
  classNameTitle,
  children,
}) => (
  <Dialog.Root open={isOpen} modal={isModal}>
    <Dialog.Content className={className}>
      <Dialog.Title className={classNameTitle}>{title}</Dialog.Title>
      {children}
    </Dialog.Content>
  </Dialog.Root>
)
