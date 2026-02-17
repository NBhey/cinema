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
            <Loader color="#de9741" size={75} />
          ) : (
            <SchemeConfigurate configurateion={scheme} />
          )}
        </div>
      </div>
    </section>
  )
}
