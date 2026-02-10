import { getScheme } from '@/shared/api/http'
import { Scheme } from '@/shared/api/type'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSeanceFilm } from '../lib/useSeanceFilm'

import styles from './SelectSeatsStep.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'

export const SelectSeatsStep = () => {
  const { date, seanceId } = useParams()
  const [sheme, setScheme] = useState<Scheme['result']>([])
  console.log(seanceId)
  const { film, seanceData } = useSeanceFilm(
    seanceId?.slice(0, seanceId.indexOf('-')) as string,
  )

  const hall = seanceId?.charAt(seanceId.length - 1)

  useEffect(() => {
    async function fetchScheme() {
      const scheme = await getScheme(Number(seanceId), date!)
      setScheme(scheme.result)
    }

    fetchScheme()
  }, [seanceId, date])

  return (
    <section className={styles['wrapper']}>
      <div className={styles['title']}>
        <Typography variant="heading-sm" as={'h3'}>
          {film?.filmName}
        </Typography>
        <Typography variant="text-medium" as={'p'}>
          Начало сеанса - {seanceData?.seanceTime}
        </Typography>
        <Typography as={'h4'} variant="heading-sm">
          {hall}
        </Typography>
      </div>
    </section>
  )
}
