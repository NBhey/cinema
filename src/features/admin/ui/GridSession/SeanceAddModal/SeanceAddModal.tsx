import { Films } from '@/shared/api/type'
import { Modal } from '@/shared/ui/Modal/Modal'

export const SeanceAddModal = ({
  isOpen,
  onClose,
  films,
  selectedFilmId,
}: {
  isOpen: boolean
  onClose: () => void
  films: Films[] | undefined
  selectedFilmId: string | number | null
}) => {
  return (
    <Modal isOpen={isOpen} isModal title="Добавление сеанса" onClose={onClose}>
      <>
        <label>
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
      </>
    </Modal>
  )
}
