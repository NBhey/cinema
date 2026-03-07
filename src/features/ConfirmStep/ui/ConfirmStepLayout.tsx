import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './ConfirmStep.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSeanceFilm } from '@/features/SelectSeatsStep/lib/useSeanceFilm'
import { ConfirmStepInfo } from './ConfirmStepInfo/ConfirmStepInfo'
import { buyTicket } from '@/shared/api/http'
import { Outlet } from 'react-router-dom'

export const ConfirmStepLayout = () => {
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
    const tickets = selectedSeatsInfo?.seats.map((seat) => ({
      row: Number(seat.row),
      place: Number(seat.place),
      coast: Number(seat.price),
    }))

    try {
      // TODO: заменить тип any на конкретный тип ответа от сервера
      const response: any = await buyTicket({
        seanceId: Number(seanceId),
        ticketDate: String(date),
        tickets: JSON.stringify(tickets),
      })
      const responseTickets = response.result.map((ticket: any) => {
        return ticket.id
      })
      navigate(`${responseTickets.join('&')}`)
      console.log('Ответ от сервера при бронировании билета:', response)
    } catch (error) {
      console.error('Ошибка при бронировании билета:', error)
    }
  }

  const value = {
    handleBookingClick,
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

        <Outlet context={value} />

        <Typography as="p" variant="text-medium">
          Приятного просмотра!
        </Typography>
      </div>
    </section>
  )
}
