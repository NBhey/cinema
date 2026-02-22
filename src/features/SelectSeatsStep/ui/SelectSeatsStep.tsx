import { getScheme } from '@/shared/api/http'
import type { Scheme } from '@/shared/api/type'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSeanceFilm } from '../lib/useSeanceFilm'

import styles from './SelectSeatsStep.module.css'

import screen from '@/shared/assets/screen.png'
import { TitleSelectSeatsStep } from './TitleSelectSeatsStep/TitleSelectSeatsStep'
import { Loader } from '@/shared/ui/Loader/Loader'
import { SchemeConfigurate } from './Scheme/SchemeConfigurate'
import { Button } from '@/shared/ui/Button/Button'
let originalSheme: Scheme
export const SelectSeatsStep = () => {
  const { date, hallName, seanceId } = useParams()
  const [scheme, setScheme] = useState<Scheme['result']>([])
  const [seats, setSeats] = useState<number[][]>([])
  const { film, seanceData } = useSeanceFilm(seanceId as string)

  useEffect(() => {
    async function fetchScheme() {
      if (date) {
        originalSheme = await getScheme(Number(seanceId), date)
        console.log(originalSheme)
        setScheme(originalSheme.result)
      }
    }

    fetchScheme()
  }, [seanceId, date])

  const handleChoosePlace = (
    indexRow: number,
    indexPlace: number,
    place: string,
  ) => {
    console.log('ряд :', indexRow + 1, 'место :', indexPlace + 1)
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
            originalSheme?.result?.[indexRow]?.[indexPlace]!

          return newScheme
      }

      return prev
    })
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
      </div>

      <div className={styles['booking-btn']}>
        <Button text="Забронировать" variant="booking" />
      </div>
    </section>
  )
}
