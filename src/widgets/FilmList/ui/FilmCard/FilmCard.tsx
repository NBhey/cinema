import { Seances, Films, Hall } from '@/shared/api/type'
import styles from './FilmCard.module.css'
import { FilmDescription } from './FilmDescription/FilmDescription'
import { FilmSessions } from './FilmSessions/FilmSessions'

type FilmCardProps = Films & { seances: Array<Seances> } & { halls: Array<Hall> }

export const FilmCard: React.FC<FilmCardProps> = ({
  filmDescription: description,
  filmDuration: duration,
  filmName: name,
  filmOrigin: country,
  filmPoster: poster,
  id,
  seances,
  halls
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
      <FilmSessions seances={seances} halls={halls}/>
    </section>
  )
}
