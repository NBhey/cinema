import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './BrandTitle.module.css'

export const BrandTitle = () => {
  return (
    <>
      <Typography variant="heading-xl" as="p" className={styles.color}>
        Идем
        <Typography variant="heading-light" as="span">
          В
        </Typography>
        Кино
      </Typography>
    </>
  )
}
