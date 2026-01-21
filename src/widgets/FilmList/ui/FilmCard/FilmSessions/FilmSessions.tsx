import { Seances } from '@/shared/api/type'

type seanceIdField = Record<
  number,
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
  console.log(Object.keys(seanceIdField).length)

  return <></>
}
