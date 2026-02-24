import { useData } from '@/shared/model/app-context/AppContext'
import { useMemo } from 'react'

export const useSeanceFilm = (seanceId: string) => {
  const data = useData()

  return useMemo(() => {
    const seanceData = data.state.result?.seances.find(
      (seance) => seance.id === Number(seanceId),
    )
    const film = data.state.result?.films.find(
      (film) => film.id === seanceData?.seanceFilmid,
    )
    const halls = data.state.result?.halls

    return { film, seanceData, halls }
  }, [data.state.result, seanceId])
}
