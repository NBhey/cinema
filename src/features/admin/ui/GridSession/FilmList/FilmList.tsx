import { Films } from '@/shared/api/type'
import styles from './FilmList.module.css'

import { FilmCard } from './FilmCard/FilmCard'

export const FilmList = ({ films }: { films?: Films[] }) => {
  return (
    <ul className={styles['filmListWrapper']}>
      {films?.map((film, index) => {
        return <FilmCard key={film.id} film={film} index={index} />
      })}
    </ul>
  )
}
