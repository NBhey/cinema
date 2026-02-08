import { getScheme } from '@/shared/api/http'
import { Scheme } from '@/shared/api/type'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSeanceFilm } from '../lib/useSeanceFilm'

export const SelectSeatsStep = () => {
  const { date, seanceId } = useParams()
  const [sheme, setScheme] = useState<Scheme['result']>([])

  const { film, seanceData } = useSeanceFilm(seanceId as string)
console.log(film)
  useEffect(() => {
    async function fetchScheme() {
      const scheme = await getScheme(Number(seanceId), date!)
      setScheme(scheme.result)
    }

    fetchScheme()
  }, [seanceId, date])

  return (
    <section>
      <h1>Select seats</h1>
    </section>
  )
}
