import { ReactNode } from 'react'
import styles from './PanelBodyWrapper.module.css'
import clsx from 'clsx'

export const PanelBodyWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <section className={clsx(styles['bodyPanelWrapper'], className)}>
      {children}
    </section>
  )
}
