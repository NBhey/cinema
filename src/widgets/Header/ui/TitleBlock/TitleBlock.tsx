import { Button } from '@/shared/ui/Button/Button'
import styles from './style.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'

export const TitleBlock = () => {
  return (
    <div className={styles.title}>
      <Typography variant="heading-xl" as="p"className={styles.color}>
        Идем
        <Typography variant="heading-light" as="span">
          В
        </Typography>
        Кино
      </Typography>

      <Button text="войти" />
    </div>
  )
}
