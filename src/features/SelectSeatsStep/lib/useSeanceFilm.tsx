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
    return { film, seanceData }
  }, [data.state.result, seanceId])
}
