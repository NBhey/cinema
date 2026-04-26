import { AllDataFilm } from '@/shared/api/type'
import styles from './FilmSessionRow.module.css'

const MINUTE_IN_DAY = 1440
const WIDTH = 100

function getPositionForFilmSeance(time: string) {
  const [hour, minute] = time.split(':')
  console.log(hour, minute)
  const allMinute = Number(hour) * 60 + Number(minute)

  return (allMinute * WIDTH) / MINUTE_IN_DAY + '%'
}

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
    <ul className={styles['hallRowList']}>
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
                    <p
                      className={styles['rowCard']}
                      style={{
                        left: getPositionForFilmSeance(filmInfo.seanceTime),
                      }}
                    >
                      {filmInfo.filmName}
                    </p>
                    <p
                      className={styles['rowTime']}
                      data-content={filmInfo.seanceTime}
                      style={{
                        left: getPositionForFilmSeance(filmInfo.seanceTime),
                      }}
                    />
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
