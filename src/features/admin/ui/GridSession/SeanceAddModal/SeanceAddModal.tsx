import { Modal } from '@/shared/ui/Modal/Modal'
import { useEffect } from 'react'

export const SeanceAddModal = ({ isOpen, onClose, films }) => {
  useEffect(() => {
    console.log('я смонтирован')

    return () => {
      console.log('я размонтирован')
    }
  }, [])
  return (
    <Modal isOpen={isOpen} isModal title="Добавление сеанса" onClose={onClose}>
      <>
        <label>
          <select name="" id="">
            {films.map((film) => {
              return <option>{film.filmName}</option>
            })}
          </select>
        </label>
      </>
    </Modal>
  )
}
