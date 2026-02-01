import { Button } from '@/shared/ui/Button/Button'
import styles from './style.module.css'

import { BrandTitle } from '@/shared/ui'
import { Link } from 'react-router'

export const TitleBlock = () => {
  return (
    <div className={styles.title}>
      <Link to="/">
        <BrandTitle />
      </Link>

      <Button text="войти" variant="enter" />
    </div>
  )
}
