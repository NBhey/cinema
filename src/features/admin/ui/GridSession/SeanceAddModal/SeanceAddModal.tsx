import { Films, Hall } from '@/shared/api/type'
import { Modal } from '@/shared/ui/Modal/Modal'
import styles from './SeanceAddModal.module.css'
import { Button } from '@/shared/ui/Button/Button'

export const SeanceAddModal = ({
  isOpen,
  onClose,
  films,
  halls,
  selectedFilmId,
  selectedHallId,
}: {
  isOpen: boolean
  onClose: () => void
  films: Films[] | undefined
  halls: Hall[] | undefined
  selectedFilmId: string | number | null
  selectedHallId: string | number | null
}) => {
  return (
    <Modal isOpen={isOpen} isModal title="Добавление сеанса" onClose={onClose}>
      <>
        <label>
          <p>Название зала</p>
          <select name="hall" id="hall" className={styles['inputField']}>
            {halls?.map((hall) => {
              let hallId: string =
                typeof selectedHallId === 'string'
                  ? selectedHallId.slice(selectedHallId.indexOf('-') + 1)
                  : ''

              return (
                <option key={hall.id} selected={Number(hallId) === hall.id}>
                  {hall.hallName}
                </option>
              )
            })}
          </select>
        </label>

        <label>
          <p>Название фильма</p>
          <select name="film" id="film" className={styles['inputField']}>
            {films?.map((film) => {
              return (
                <option
                  key={film.id}
                  value={film.id}
                  selected={selectedFilmId === film.id}
                >
                  {film.filmName}
                </option>
              )
            })}
          </select>
        </label>

        <label htmlFor="time">
          <p>Время начала</p>
          <input
            type="time"
            name="time"
            id="time"
            value="00:00"
            className={styles['inputField']}
          />
        </label>

        <Button
          text="Добавить фильм"
          variant="standart"
          clickAction={() => {
            const film = document.querySelector<HTMLSelectElement>('#film')
            const hall = document.querySelector<HTMLSelectElement>('#hall')
            const time = document.querySelector<HTMLInputElement>('#time')

            console.log(film?.value, hall?.value, time?.value)
          }}
        ></Button>

        <Button
          clickAction={() => {
            onClose()
          }}
          text="Отменить"
          variant="standart"
        ></Button>
      </>
    </Modal>
  )
}
