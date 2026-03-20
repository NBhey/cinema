import { Dialog } from 'radix-ui'
import { clsx } from 'clsx'
import { ReactElement, FC } from 'react'
import styles from './Dialog.module.css'

interface ModalProps {
  isOpen: boolean
  isModal: boolean
  className: string
  title: string
  classNameTitle: string
  children: ReactElement
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  isModal,
  className,
  title,
  classNameTitle,
  children,
}) => (
  <Dialog.Root open={isOpen} modal={isModal}>
    <Dialog.Content className={clsx(styles['content'], className)}>
      <Dialog.Title className={classNameTitle}>{title}</Dialog.Title>
      {children}
    </Dialog.Content>
  </Dialog.Root>
)
