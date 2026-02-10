import { Seances } from '@/shared/api/type'
import styles from './FilmSessions.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'
import { NavLink, useParams } from 'react-router-dom'

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
  const { date } = useParams()

  const today = new Date().toLocaleDateString('en-CA')
  const selectedDate = date ?? today
  const isToday = selectedDate === today

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
                const [hh, mm] = time.split(':').map(Number)
                const now = new Date()
                const isPast =
                  hh < now.getHours() ||
                  (hh === now.getHours() && mm < now.getMinutes())

                if (isToday && isPast) {
                  return (
                    <span key={`${seance}-${time}-${position}`} className={styles.timeDisabled}>
                      {time}
                    </span>
                  )
                }
                return (
                  <NavLink
                    key={`${seance}-${time}-${position}`}
                    to={
                      selectedDate === today
                        ? `/${today}/halls/${seanceIdField[seance].hallid}/seances/${seanceIdField[seance].seanceId[position]}-${numberHall + 1}`
                        : `/${selectedDate}/halls/${seanceIdField[seance].hallid}/seances/${seanceIdField[seance].seanceId[position]}-${numberHall + 1}`
                    }
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
