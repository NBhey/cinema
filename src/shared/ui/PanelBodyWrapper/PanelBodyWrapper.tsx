import { ReactNode } from 'react'
import styles from './PanelBodyWrapper.module.css'

export const PanelBodyWrapper = ({ children }: { children: ReactNode }) => {
  return <section className={styles['bodyPanelWrapper']}>{children}</section>
}
