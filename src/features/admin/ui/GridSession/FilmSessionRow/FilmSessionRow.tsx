import { AllDataFilm } from '@/shared/api/type'
import styles from './FilmSessionRow.module.css'

const MINUTE_IN_DAY = 1440
const WIDTH = '100%'

export const FilmSessionRow = ({
  data,
}: {
  data?: { success: boolean; result: AllDataFilm }
}) => {
  const { result } = data || { result: { halls: [], films: [], seances: [] } }

  const halls = result.halls.map((hall) => {
    return {
      id: hall.id,
      hallName: hall.hallName,
      seance: result.seances.filter((seance) => {
        return seance.seanceHallid === hall.id
      }),
    }
  })

  return (
    <ul>
      {halls.map((hall) => {
        return (
          <li className={styles['hallItem']} key={hall.id}>
            <p>{hall.hallName}</p>
            <div className={styles['row']}>
              {hall.seance.map((seance) => {
                const film = result.films.find(
                  (film) => seance.seanceFilmid === film?.id,
                )

                const filmInfo = { ...seance, ...film }
                return (
                  <>
                    <span>{filmInfo.filmName}</span>
                    <span>{filmInfo.seanceTime}</span>
                  </>
                )
              })}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
