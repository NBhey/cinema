import { PanelBodyWrapper } from '@/shared/ui'
import useAdminPanelHeader from '../../lib/useAdminPanelHeader'
import { Button } from '@/shared/ui/Button/Button'
import { useHallsQuery } from '@/shared/api/hall/quieries'
import { Modal } from '@/shared/ui/Modal/Modal'
import { useState } from 'react'

export const GridSession = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const { isPanelOpen, Header } = useAdminPanelHeader('Сетка сеансов')
  const { data } = useHallsQuery()

  console.log(data)

  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  return (
    <>
      <Header />
      {isPanelOpen && (
        <PanelBodyWrapper>
          <Button
            variant="standart"
            text="Добавить фильм"
            clickAction={handleOpenModal}
          />

          <Modal
            isOpen={isOpenModal}
            title="Добавление фильма"
            onClose={handleCloseModal}
            isModal
          >
            <form action="">
              <label htmlFor="file">
                <p>1</p>
                <br />
                <br />
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => {
                    console.log(e.target.files)
                  }}
                  style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clipPath: ' inset(50%)',
                    whiteSpace: 'nowrap',
                    borderWidth: 0,
                  }}
                />
              </label>
            </form>
          </Modal>
        </PanelBodyWrapper>
      )}
    </>
  )
}
