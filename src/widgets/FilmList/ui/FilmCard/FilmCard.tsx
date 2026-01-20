import { Seances, Films } from '@/shared/api/type'
import styles from './FilmCard.module.css'
import { FilmDescription } from './FilmDescription/FilmDescription'

type FilmCard = Films & { seances: Array<Seances> }

export const FilmCard: React.FC<FilmCard> = ({
  film_description: description,
  film_duration: duration,
  film_name: name,
  film_origin: country,
  film_poster: poster,
  id,
  seances,
}) => {
  return (
    <section className={styles.card}>
      <FilmDescription
        name={name}
        description={description}
        poster={poster}
        duration={duration}
        country={country}
      />
    </section>
  )
}
