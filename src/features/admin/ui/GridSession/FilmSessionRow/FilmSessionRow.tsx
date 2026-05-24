import { AllDataFilm, Seances } from '@/shared/api/type'
import styles from './FilmSessionRow.module.css'

import { HallRow } from './HallRow/HallRow'

export type HallWithSeances = {
  id: number
  hallName: string
  seance: Seances[]
}

export const FilmSessionRow = ({
  data,
}: {
  data?: { success: boolean; result: AllDataFilm }
}) => {
  const { result } = data || { result: { halls: [], films: [], seances: [] } }

  const halls: HallWithSeances[] = result.halls.map((hall) => {
    return {
      id: hall.id,
      hallName: hall.hallName,
      seance: result.seances.filter((seance) => {
        return seance.seanceHallid === hall.id
      }),
    }
  })

  return (
    <ul className={styles['hallRowList']}>
      {halls.map((hall) => {
        return (
          <>
            <HallRow hall={hall} films={result.films} />
          </>
        )
      })}
    </ul>
  )
}
