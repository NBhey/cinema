import { useData } from '@/shared/model/app-context/AppContext'
import styles from './FilmList.module.css'
import { FilmCard } from './FilmCard/FilmCard'
import { Loader } from '@/shared/ui/Loader/Loader'

export const FilmList: React.FC = () => {
  const { state } = useData()

  if (!state.isLoading) {
    return (
      <div
        style={{
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader size={65} />
      </div>
    )
  }

  const list = state.result?.films.map((film) => {
    if (state.result) {
      const seances = state.result.seances.filter((seance) => {
        return film.id === seance.seanceFilmid
      })
      const halls = state.result.halls.filter((hall) => {
        return seances.some((seance) => hall.id === seance.seanceHallid)
      })
       
      const sharedProps = { ...film, seances, halls }
      return <FilmCard key={film.id} {...sharedProps} />
    }
    return null
  })

  return <main className={styles['film-list']}>{list}</main>
}
