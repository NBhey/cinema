import { AllDataFilm, Hall } from '@/shared/api/type'
import styles from './HallRow.module.css'
import { HallWithSeances } from '../FilmSessionRow'
import { useDroppable } from '@dnd-kit/react'
import { Fragment } from 'react'

const MINUTE_IN_DAY = 1440
const WIDTH = 100

function getPositionForFilmSeance(time: string) {
  const [hour, minute] = time.split(':')
  const allMinute = Number(hour) * 60 + Number(minute)

  return (allMinute * WIDTH) / MINUTE_IN_DAY + '%'
}

export const HallRow = ({
  hall,
  films,
}: {
  hall: HallWithSeances
  films: AllDataFilm['films']
}) => {
  const { isDropTarget, ref } = useDroppable({
    id: `hall-${hall.id}`,
  })

  return (
    <li className={styles['hallItem']} key={hall.id} ref={ref}>
      <p>{hall.hallName}</p>
      <div className={styles['row']}>
        {hall.seance.map((seance, index) => {
          const film = films.find((film) => seance.seanceFilmid === film?.id)
          const filmInfo = { ...seance, ...film }
          return (
            <Fragment key={`${filmInfo.id}-${index}`}>
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
            </Fragment>
          )
        })}
      </div>
    </li>
  )
}
