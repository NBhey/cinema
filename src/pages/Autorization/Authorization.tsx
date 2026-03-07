import { BrandTitle } from '@/shared/ui'
import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './Authorization.module.css'

export const Authorization = () => {
  return (
    <header className={styles['header']}>
      <div>
        <BrandTitle />
        <Typography className={styles['subtitle']} as="p" variant="text-light">
          Администраторская
        </Typography>
      </div>
    </header>
  )
}
