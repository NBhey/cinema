import { AllDataFilm } from '@/shared/api/type'

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
    }
  })

  const list = result?.films.map((film) => {
    if (result) {
      const seances = result.seances.filter((seance) => {
        return film.id === seance.seanceFilmid
      })
      const halls = result.halls.filter((hall) => {
        return seances.some((seance) => hall.id === seance.seanceHallid)
      })

      const sharedProps = { ...film, seances, halls }
      return sharedProps
    }
    return null
  })

  console.log(list)
  return <div></div>
}
