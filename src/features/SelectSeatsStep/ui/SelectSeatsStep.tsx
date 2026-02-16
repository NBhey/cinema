import { getScheme } from '@/shared/api/http'
import type { Scheme } from '@/shared/api/type'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSeanceFilm } from '../lib/useSeanceFilm'

import styles from './SelectSeatsStep.module.css'

import disabled from '@/shared/assets/disabled_places.png'
import vip from '@/shared/assets/vip_places.png'
import standart from '@/shared/assets/standart_places.png'
import screen from '@/shared/assets/screen.png'
import { TitleSelectSeatsStep } from './TitleSelectSeatsStep/TitleSelectSeatsStep'

export const SelectSeatsStep = () => {
  const { date, hallName, seanceId } = useParams()
  const [scheme, setScheme] = useState<Scheme['result']>([])

  const { film, seanceData } = useSeanceFilm(seanceId as string)

  useEffect(() => {
    async function fetchScheme() {
      if (date) {
        const scheme = await getScheme(Number(seanceId), date)
        setScheme(scheme.result)
      }
    }

    fetchScheme()
  }, [seanceId, date])
  console.log(scheme)
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
          {scheme.length === 0 ? (
            <Skeleton
              style={{ marginBottom: '5px', width: '244px' }}
              count={10}
              baseColor="#de9741"
              highlightColor="#e6be89"
              duration={0.35}
              height={18.35}
            />
          ) : (
            <SchemeConfigurate configurateion={scheme} />
          )}
        </div>
      </div>
    </section>
  )
}
// TODO: вынести в константы  вынести компонент Scheme
enum PlaceStatus {
  disabled = 'disabled',
  standart = 'standart',
  vip = 'vip',
}

const SchemeConfigurate = ({
  configurateion,
}: {
  configurateion: Scheme['result']
}) => {
  return (
    <>
      {configurateion.map((row, indexRow) => {
        return (
          <p key={indexRow}>
            {row.map((place, indexPlace) => {
              if (place === PlaceStatus.disabled) {
                return (
                  <img
                    key={`${[...[indexRow, indexPlace]]}`}
                    onClick={() => {
                      console.log([indexRow, indexPlace])
                    }}
                    src={disabled}
                    alt={disabled}
                  />
                )
              }
              if (place === PlaceStatus.vip) {
                return (
                  <img
                    key={`${[...[indexRow, indexPlace]]}`}
                    onClick={() => {
                      console.log([indexRow, indexPlace])
                    }}
                    src={vip}
                    alt={vip}
                  />
                )
              }
              if (place === PlaceStatus.standart) {
                return (
                  <img
                    key={`${[...[indexRow, indexPlace]]}`}
                    onClick={() => {
                      console.log([indexRow, indexPlace])
                    }}
                    src={standart}
                    alt={standart}
                  />
                )
              }
              return null
            })}
          </p>
        )
      })}
    </>
  )
}
