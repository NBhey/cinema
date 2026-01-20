import { useData } from '@/shared/model/app-context/AppContext'

import { FilmCard } from './FilmCard/FilmCard'
import { Loader } from '@/shared/ui/Loader/Loader'

export const FilmList: React.FC = () => {
  const { state } = useData()

  console.log(state)

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
        return film.id === seance.seance_filmid
      })

      const sharedProps = { ...film, seances: seances }
      return <FilmCard key={film.id} {...sharedProps} />
    }
  })

  return <main style={{paddingTop:'40px'}}>{list}</main>
}
