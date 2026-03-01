import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './ConfirmStep.module.css'
import { useParams } from 'react-router-dom'
import { useSeanceFilm } from '@/features/SelectSeatsStep/lib/useSeanceFilm'

export const ConfirmStep = () => {
  const { hallName, seanceId } = useParams()
  const { film, seanceData, halls } = useSeanceFilm(seanceId as string)

  const selectedSeatsString = localStorage.getItem('selectedSeats')
  const selectedSeatsInfo: {
    date: string
    seats: Array<{ row: number; place: number }>
  } = selectedSeatsString ? JSON.parse(selectedSeatsString) : null

  const selectedSeats = selectedSeatsInfo?.seats.map((seat) => seat.place)

  console.log('halls', halls)
  return (
    <section className={styles['wrapper']}>
      <div className={styles['headerConfirm']}>
        <Typography
          className={styles['titleConfirm']}
          as="h2"
          variant="heading-bold"
        >
          Вы выбрали билеты
        </Typography>
      </div>
      <section className={styles['bodyConfirm']}>
        <Typography as="p" variant="text-regular">
          На фильм:{' '}
          <Typography as="span" variant="heading-sm">
            {film?.filmName}
          </Typography>
        </Typography>
        <Typography as="p" variant="text-regular">
          Места:{' '}
          <Typography as="span" variant="heading-sm">
            {selectedSeats.join(',')}
          </Typography>
        </Typography>
        <Typography as="p" variant="text-regular">
          В зале:{' '}
          <Typography as="span" variant="heading-sm">
            {hallName}
          </Typography>
        </Typography>
        <Typography as="p" variant="text-regular">
          Начало сеанса:{' '}
          <Typography as="span" variant="heading-sm">
            {seanceData?.seanceTime}
          </Typography>
        </Typography>
      </section>
    </section>
  )
}
