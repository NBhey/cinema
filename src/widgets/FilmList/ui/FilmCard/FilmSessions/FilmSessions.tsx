import { Seances } from '@/shared/api/type'
import styles from './FilmSessions.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'
import { NavLink } from 'react-router'

type seanceIdField = Record<
  string,
  {
    hallid: number
    seanceId: number[]
    seanceFilmId: number
    seanceTime: string[]
  }
>

export const FilmSessions = ({ seances }: { seances: Array<Seances> }) => {
  const seanceIdField: seanceIdField = {}

  const sortedSeanceTime = seances.toSorted((a, b) => {
    return Number(a.seanceTime.slice(0, 2)) - Number(b.seanceTime.slice(0, 2))
  })
 

  sortedSeanceTime.forEach((seance) => {
    if (seanceIdField[seance.seanceHallid]) {
      seanceIdField[seance.seanceHallid].seanceId.push(seance.id)
      seanceIdField[seance.seanceHallid].seanceTime.push(seance.seanceTime)
    } else {
      seanceIdField[seance.seanceHallid] = {
        hallid: seance.seanceHallid,
        seanceId: [seance.id],
        seanceFilmId: seance.seanceHallid,
        seanceTime: [seance.seanceTime],
      }
    }
  })

  return (
    <div>
      {Object.keys(seanceIdField).map((seance, numberHall) => {
        return (
          <div key={numberHall}>
            <Typography as="p" variant="heading-sm" className={styles.hall}>
              {`Зал ${numberHall + 1}`}
            </Typography>

            <div className={styles.time_row}>
              {seanceIdField[seance].seanceTime.map((time, position) => {
                if (Number(time.slice(0, 2)) < new Date().getHours()) {
                  return (
                    <span key={time} className={styles.timeDisabled}>
                      {time}
                    </span>
                  )
                }
                return (
                  <NavLink
                    key={time}
                    to={`/halls/${seanceIdField[seance].hallid}/seances/${seanceIdField[seance].seanceId[position]}`}
                    className={styles.time}
                  >
                    {time}
                  </NavLink>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
