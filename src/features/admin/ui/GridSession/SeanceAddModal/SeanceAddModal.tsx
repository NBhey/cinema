import { Films, Hall } from '@/shared/api/type'
import { Modal } from '@/shared/ui/Modal/Modal'

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
  console.log('SeanceAddModal', halls)
  return (
    <Modal isOpen={isOpen} isModal title="Добавление сеанса" onClose={onClose}>
      <>
        <label>
          <p>Название зала</p>
          <select name="hall" id="">
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
          <select name="" id="">
            {films?.map((film) => {
              return (
                <option key={film.id} selected={selectedFilmId === film.id}>
                  {film.filmName}
                </option>
              )
            })}
          </select>
        </label>

        <label htmlFor="">
          <p>Время начала</p>
          <input type="time" name="" id="" value="00:00" />
        </label>
      </>
    </Modal>
  )
}
