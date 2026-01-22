import { Seances } from '@/shared/api/type'
import  styles  from './FilmSessions.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'

type seanceIdField = Record<
  string,
  {
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
        seance_id: [seance.id],
        seance_filmid: seance.seance_filmid,
        seance_time: [seance.seance_time],
      }
    }
  })

  console.log(seanceIdField)
  console.log(Object.keys(seanceIdField))

  return (
    <div>
      {Object.keys(seanceIdField).map((seance, numberHall) => {
        console.log(seance)
        return (
          <div>
            <Typography as='p' variant='heading-sm' className={styles.hall}>{`Зал ${numberHall + 1}`}</Typography>
            <div className={styles.time_row}>
              {seanceIdField[seance].seance_time.map((time) => {
              return <span className={styles.time}>{time}</span>
            })}
            </div>
            
          </div>
        )
      })}
    </div>
  )
}
