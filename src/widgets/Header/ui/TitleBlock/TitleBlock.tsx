import { Button } from '@/shared/ui/Button/Button'
import styles from './style.module.css'

import { BrandTitle } from '@/shared/ui'

export const TitleBlock = () => {
  return (
    <div className={styles.title}>
      <BrandTitle />

      <Button text="войти" variant="enter" />
    </div>
  )
}
