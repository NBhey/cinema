import { Seances } from '@/shared/api/type'
import styles from './FilmSessions.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'
import { NavLink } from 'react-router'

type seanceIdField = Record<
  string,
  {
    hallid: number
    seance_id: number[]
    seance_filmid: number
    seance_time: string[]
  }
>

export const FilmSessions = ({ seances }: { seances: Array<Seances> }) => {
  const seanceIdField: seanceIdField = {}

  seances.forEach((seance) => {
    if (seanceIdField[seance.seance_hallid]) {
      seanceIdField[seance.seance_hallid].seance_id.push(seance.id)
      seanceIdField[seance.seance_hallid].seance_time.push(seance.seance_time)
    } else {
      seanceIdField[seance.seance_hallid] = {
        hallid: seance.seance_hallid,
        seance_id: [seance.id],
        seance_filmid: seance.seance_filmid,
        seance_time: [seance.seance_time],
      }
    }
  })

  console.log(seanceIdField)

  return (
    <div>
      {Object.keys(seanceIdField).map((seance, numberHall) => {
        return (
          <div key={numberHall}>
            <Typography as="p" variant="heading-sm" className={styles.hall}>
              {`Зал ${numberHall + 1}`}
            </Typography>

            <div className={styles.time_row}>
              {seanceIdField[seance].seance_time.map((time, position) => {
                if (Number(time.slice(0, 2)) < new Date().getHours()) {
                  return (
                    <span key={time} className={styles.time_disabled}>
                      {time}
                    </span>
                  )
                }
                return (
                  <NavLink
                    key={time}
                    to={`/halls/${seanceIdField[seance].hallid}/seances/${seanceIdField[seance].seance_id[position]}`}
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
