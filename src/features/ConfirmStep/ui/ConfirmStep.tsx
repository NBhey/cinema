import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './ConfirmStep.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSeanceFilm } from '@/features/SelectSeatsStep/lib/useSeanceFilm'
import QRCode from 'react-qr-code'
import { Button } from '@/shared/ui/Button/Button'
import { ConfirmStepInfo } from './ConfirmStepInfo/ConfirmStepInfo'
import { useState } from 'react'
import { buyTicket } from '@/shared/api/http'
import { Loader } from '@/shared/ui/Loader/Loader'

export const ConfirmStep = () => {
  const [showQR, setShowQR] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { hallName, seanceId, date } = useParams()
  const { film, seanceData, halls } = useSeanceFilm(seanceId as string)
  const navigate = useNavigate()
  const selectedSeatsString = localStorage.getItem('selectedSeats')
  const selectedSeatsInfo: {
    date: string
    seats: Array<{
      row: number
      place: number
      status: 'standart' | 'vip'
      price?: number
    }>
  } = selectedSeatsString ? JSON.parse(selectedSeatsString) : null

  const selectedSeats = selectedSeatsInfo?.seats.map((seat) => seat.place)
  const currentHallInfo = halls?.find((hall) => hall.hallName === hallName)

  const cost = currentHallInfo
    ? selectedSeatsInfo.seats.reduce((acc, seat) => {
        if (seat.status === 'standart') {
          seat.price = currentHallInfo.hallPriceStandart
          return (acc += currentHallInfo.hallPriceStandart)
        } else if (seat.status === 'vip') {
          seat.price = currentHallInfo.hallPriceStandart
          return (acc += currentHallInfo.hallPriceVip)
        }
        return acc
      }, 0)
    : 0

  const handleBookingClick = async () => {
    setIsLoading(true)

    const tickets = selectedSeatsInfo?.seats.map((seat) => ({
      row: Number(seat.row),
      place: Number(seat.place),
      coast: Number(seat.price),
    }))

    try {
      const response: any = await buyTicket({
        seanceId: Number(seanceId),
        ticketDate: String(date),
        tickets: JSON.stringify(tickets),
      })

      if (response.success) {
        setShowQR(true)
      }
    } catch (error) {
      console.error('Ошибка при бронировании билета:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const infoBlock = {
    film,
    selectedSeats,
    hallName,
    seanceData,
    cost,
  }

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

      <div className={styles['bodyConfirm']}>
        <ConfirmStepInfo {...infoBlock} />

        {showQR ? (
          <>
            {isLoading && <Loader margin="0 auto" size={55} />}
            <QRCode
              style={{ margin: '0 auto' }}
              size={186}
              value={'https://github.com/NBhey'}
            />
          </>
        ) : (
          <Button
            style={{ maxWidth: 337, width: '100%', marginBottom: '9px' }}
            text="Получить код бронирования"
            variant="booking"
            clickAction={handleBookingClick}
          />
        )}

        <Typography as="p" variant="text-medium">
          {' '}
          {showQR
            ? `Покажите QR-код нашему контроллеру для подтверждения бронирования.`
            : `После оплаты билет будет доступен в этом окне, а также придёт вам на почту.
           Покажите QR-код нашему контроллёру у входа в зал.`}
        </Typography>

        <Typography as="p" variant="text-medium">
          {' '}
          Приятного просмотра!
        </Typography>
      </div>
    </section>
  )
}
