import styles from './FilmDescription.module.css'

interface FilmDescriptionProps {
  description: string
  country: string
  name: string
  poster: string
  duration: number
}

export const FilmDescription = ({
  poster,
  name,
  country,
  description,
  duration,
}: FilmDescriptionProps) => {
  return (
    <div className={styles.block}>
      <img className={styles.poster} src={poster} alt={name} />

      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>
          <span>{duration} минут</span>{' '}
          <span>{country}</span>
        </p>
      </div>
    </div>
  )
}
