import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './ConfirmStep.module.css'
import { useParams } from 'react-router-dom'
import { useSeanceFilm } from '@/features/SelectSeatsStep/lib/useSeanceFilm'

export const ConfirmStep = () => {
  const { date, hallName, seanceId } = useParams()
  const { film, seanceData, halls } = useSeanceFilm(seanceId as string)

  return (
    <section className={styles['wrapper']}>
      <div className={styles['headerConfirm']}>
        <Typography
          className={styles['titleConfirm']}
          as="h2"
          variant="heading-bolt"
        >
          Вы выбрали билеты
        </Typography>
      </div>
      <div className={styles['bodyConfirm']}></div>
    </section>
  )
}
