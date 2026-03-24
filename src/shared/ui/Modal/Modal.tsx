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
  classNameBody?: string
  onClose: () => void
  describeContent?: string
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  isModal,
  className,
  title,
  classNameTitle,
  classNameBody,
  children,
  onClose,
  describeContent,
}) => (
  <Dialog.Root open={isOpen} modal={isModal}>
    <Dialog.Portal>
      <Dialog.Overlay
        aria-describedby={describeContent}
        className={styles['overlay']}
      />
      <Dialog.Content
        aria-describedby={describeContent}
        className={clsx(styles['content'], className)}
      >
        <Dialog.Title className={clsx(styles['title'], classNameTitle)}>
          {title}

          <Dialog.Close asChild>
            <button className={styles['btn-close']} onClick={onClose}>
              <img src={closeBtn} width={22} alt="close" />
              <span className={styles['scr-only']}> Закрыть </span>
            </button>
          </Dialog.Close>
        </Dialog.Title>

        <div className={clsx(styles['body'], classNameBody)}>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
