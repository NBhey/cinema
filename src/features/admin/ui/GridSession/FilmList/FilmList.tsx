import { Films } from '@/shared/api/type'
import styles from './FilmList.module.css'
import bucket from '@/shared/assets/bucket.png'
import { useDeleteFilm } from '@/entities/hall/useDeleteFilm'

const ColorBG = ['#8599FF', '#85FFD3', '#85FF89', '#CAFF85', '#85E2FF']

export const FilmList = ({ films }: { films?: Films[] }) => {
  const { mutate: deleteFilm } = useDeleteFilm()

  console.log(deleteFilm)

  return (
    <ul className={styles['filmListWrapper']}>
      {films?.map((film) => {
        return (
          <li key={film.id} className={styles['filmCard']}>
            <img
              className={styles['filmPoster']}
              src={film.filmPoster}
              alt={film.filmName}
            />

            <div
              className={styles['filmDescription']}
              style={{
                backgroundColor:
                  ColorBG[Math.floor(Math.random() * ColorBG.length)],
              }}
            >
              <p>{film.filmName}</p>
              <p>{film.filmDuration}</p>
              <div className={styles['delete-btn']}>
                <button onClick={() => deleteFilm(film.id)}>
                  <img src={bucket} width={12} height={12} alt="" />
                </button>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
