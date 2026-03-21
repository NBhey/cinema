import { Dialog } from 'radix-ui'
import { clsx } from 'clsx'
import { ReactElement, FC } from 'react'
import styles from './Modal.module.css'
import closeBtn from '@/shared/assets/close.png'

interface ModalProps {
  isOpen: boolean
  isModal: boolean
  className?: string
  title: string
  classNameTitle?: string
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
    <Dialog.Portal>
      <Dialog.Overlay className={styles['overlay']} />
      <Dialog.Content className={clsx(styles['content'], className)}>
        <Dialog.Title className={clsx(styles['title'], classNameTitle)}>
          {title}
        </Dialog.Title>
        {children}

        <Dialog.Close asChild>
          <button className={styles['btn-close']}>
            <img src={closeBtn} width={22} alt="close" />
            <span className={styles['scr-only']}> Закрыть </span>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
