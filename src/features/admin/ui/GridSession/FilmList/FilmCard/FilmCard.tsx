import { useDeleteFilm } from '@/entities/film/useDeleteFilm'
import styles from './FilmCard.module.css'
import bucket from '@/shared/assets/bucket.png'
import { Films } from '@/shared/api/type'
import { useDraggable } from '@dnd-kit/react'

const ColorBG = ['#8599FF', '#85FFD3', '#85FF89', '#CAFF85', '#85E2FF']

export const FilmCard = ({ film, index }: { film: Films; index: number }) => {
  const { id } = film
  const { mutate: deleteFilm } = useDeleteFilm()
  const { ref, isDragging } = useDraggable({
    id,
    type: 'item',
  })

  return (
    <li
      key={id}
      className={styles['filmCard']}
      ref={ref}
      data-dragging={isDragging}
    >
      <img
        className={styles['filmPoster']}
        src={film.filmPoster}
        alt={film.filmName}
      />

      <div
        className={styles['filmDescription']}
        style={{
          backgroundColor: ColorBG[index],
        }}
      >
        <p>{film.filmName}</p>
        <p>{film.filmDuration} минут</p>
        <div className={styles['delete-btn']}>
          <button onClick={() => deleteFilm(film.id)}>
            <img src={bucket} width={12} height={12} alt="" />
          </button>
        </div>
      </div>
    </li>
  )
}
