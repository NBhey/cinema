import { getScheme } from '@/shared/api/http'
import type { Scheme } from '@/shared/api/type'
import { PlaceStatus } from '@/features/SelectSeatsStep/model'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSeanceFilm } from '../lib/useSeanceFilm'

import styles from './SelectSeatsStep.module.css'

import screen from '@/shared/assets/screen.png'
import { TitleSelectSeatsStep } from './TitleSelectSeatsStep/TitleSelectSeatsStep'
import { Loader } from '@/shared/ui/Loader/Loader'
import { SchemeConfigurate } from './Scheme/SchemeConfigurate'
import { Button } from '@/shared/ui/Button/Button'

import taken from '@/shared/assets/taken.png'
import place from '@/shared/assets/vip_places.png'
import standart from '@/shared/assets/standart_places.png'
import booking from '@/shared/assets/booking.png'
import { Typography } from '@/shared/ui/Typography/Typography'

//TODO подумать о том, чтобы положить внутрь компонента переменную
let originalSheme: Scheme

const PlaceStatusImage = {
  [PlaceStatus.taken]: taken,
  [PlaceStatus.standart]: standart,
  [PlaceStatus.vip]: place,
  [PlaceStatus.booking]: booking,
  [PlaceStatus.disabled]: taken,
}

export const SelectSeatsStep = () => {
  const { date, hallName, seanceId } = useParams()
  const [scheme, setScheme] = useState<Scheme['result']>([])
  const { film, seanceData, halls } = useSeanceFilm(seanceId as string)
  const selectedSeatsRef = useRef<Array<Record<string, number | string>>>([])
  const originalSheme = useRef<Scheme>({ result: [], success: false })
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('selectedSeats')) {
      localStorage.removeItem('selectedSeats')
    }
  }, [])

  useEffect(() => {
    async function fetchScheme() {
      if (date) {
        originalSheme.current = await getScheme(Number(seanceId), date)
        setScheme(originalSheme.current.result)
        selectedSeatsRef.current = []
      }
    }

    fetchScheme()
  }, [seanceId, date])

  const handleChoosePlace = (
    indexRow: number,
    indexPlace: number,
    place: string,
  ) => {
    console.log(
      'ряд :',
      indexRow + 1,
      'место :',
      indexPlace + 1,
      'статус :',
      place,
    )
    let isBookingThisPlace

    for (let item of selectedSeatsRef.current) {
      if (item['row'] === indexRow + 1 && item['place'] === indexPlace + 1) {
        isBookingThisPlace = true
        break
      }
    }

    if (isBookingThisPlace) {
      selectedSeatsRef.current = selectedSeatsRef.current.filter((item) => {
        return !(
          item['row'] === indexRow + 1 && item['place'] === indexPlace + 1
        )
      })
    } else {
      selectedSeatsRef.current.push({
        row: indexRow + 1,
        place: indexPlace + 1,
        status: place,
      })
    }

    setScheme((prev) => {
      switch (place) {
        case 'disabled':
          return prev
        case 'standart':
          return prev.map((row, r) =>
            r === indexRow
              ? row.map((cell, c) =>
                  c === indexPlace
                    ? cell === 'standart'
                      ? 'booking'
                      : 'standart'
                    : cell,
                )
              : row,
          )
        case 'vip':
          return prev.map((row, r) =>
            r === indexRow
              ? row.map((cell, c) =>
                  c === indexPlace
                    ? cell === 'vip'
                      ? 'booking'
                      : 'vip'
                    : cell,
                )
              : row,
          )

        case 'booking':
          const newScheme = prev.map((el) => el.map((item) => item))
          newScheme[indexRow][indexPlace] =
            originalSheme.current?.result?.[indexRow]?.[indexPlace]!

          return newScheme
      }

      return prev
    })
  }

  const handleBooking = () => {
    if (selectedSeatsRef.current.length === 0) {
      alert('Вы не выбрали места')
      return
    }
    localStorage.setItem(
      'selectedSeats',
      JSON.stringify({ date, seats: selectedSeatsRef.current }),
    )
    navigate('confirm')
  }
  return (
    <section className={styles['wrapper']}>
      <TitleSelectSeatsStep
        film={film}
        seanceData={seanceData}
        hallName={hallName}
      />
      <div className={styles['scheme-container']}>
        <img
          style={{ maxWidth: 284, margin: '0 auto', display: 'block' }}
          src={screen}
          alt="экран"
        />
        <div className={styles['scheme']}>
          {scheme.length === 0 && <Loader color="#de9741" size={75} />}
          <SchemeConfigurate
            choosePlace={handleChoosePlace}
            configuration={scheme}
          />
        </div>

        <div className={styles['descriptionPlace']}>
          <div className={styles['descriptionTargetPlace']}>
            <img src={PlaceStatusImage.standart} alt="Свободно" />
            <Typography
              style={{ color: '#ffffff' }}
              variant="text-medium"
              as="span"
            >
              Свободно ({halls?.[0].hallPriceStandart} руб)
            </Typography>
          </div>
          <div className={styles['descriptionTargetPlace']}>
            <img src={PlaceStatusImage.vip} alt="Свободно VIP" />
            <Typography
              style={{ color: '#ffffff' }}
              variant="text-medium"
              as="span"
            >
              Свободно VIP ({halls?.[0].hallPriceVip} руб)
            </Typography>
          </div>
          <div className={styles['descriptionTargetPlace']}>
            <img src={PlaceStatusImage.disabled} alt="Занято" />
            <Typography
              style={{ color: '#ffffff' }}
              variant="text-medium"
              as="span"
            >
              Занято
            </Typography>
          </div>
          <div className={styles['descriptionTargetPlace']}>
            <img
              style={{ width: 24, height: 24 }}
              src={PlaceStatusImage.booking}
              alt="Выбрано"
            />
            <Typography
              style={{ color: '#ffffff' }}
              variant="text-medium"
              as="span"
            >
              Выбрано
            </Typography>
          </div>
        </div>
      </div>

      <div className={styles['booking-btn']}>
        <Button
          clickAction={handleBooking}
          text="Забронировать"
          variant="booking"
        />
      </div>
    </section>
  )
}
