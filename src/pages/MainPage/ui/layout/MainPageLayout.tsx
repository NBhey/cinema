import { PropsWithChildren } from 'react'
import styles from './style.module.css'

export const MainPageLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>
}
