import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './ConfirmStep.module.css'
import { useParams } from 'react-router-dom'
import { useSeanceFilm } from '@/features/SelectSeatsStep/lib/useSeanceFilm'
import { Hall } from '@/shared/api/type'

export const ConfirmStep = () => {
  const { hallName, seanceId } = useParams()
  const { film, seanceData, halls } = useSeanceFilm(seanceId as string)

  const selectedSeatsString = localStorage.getItem('selectedSeats')
  const selectedSeatsInfo: {
    date: string
    seats: Array<{ row: number; place: number; status: 'standart' | 'vip' }>
  } = selectedSeatsString ? JSON.parse(selectedSeatsString) : null

  const selectedSeats = selectedSeatsInfo?.seats.map((seat) => seat.place)
  const currentHallInfo = halls?.find((hall) => hall.hallName === hallName)

  const cost = currentHallInfo
    ? selectedSeatsInfo.seats.reduce((acc, seat) => {
        if (seat.status === 'standart') {
          return (acc += currentHallInfo.hallPriceStandart)
        } else if (seat.status === 'vip') {
          return (acc += currentHallInfo.hallPriceVip)
        }
        return acc
      }, 0)
    : 0

  console.log('selectedSeatsInfo', selectedSeatsInfo)
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

        <Typography as="p" variant="text-regular">
          Стоимость:{' '}
          <Typography as="span" variant="heading-sm">
            {cost} рублей
          </Typography>
        </Typography>
      </section>
    </section>
  )
}
