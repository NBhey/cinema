import { useRef, useState } from 'react'
import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './HallManagment.module.css'
import bucket from '@/shared/assets/bucket.png'
import { useDeleteHall } from '@/entities/hall/useDeleteHall'
import { Button } from '@/shared/ui/Button/Button'
import { Modal } from '@/shared/ui/Modal/Modal'
import { useCreateHall } from '@/entities/hall/useCreateHall'
import { useHallsQuery } from '@/shared/api/hall/quieries'
import useAdminPanelHeader from '../admin/lib/useAdminPanelHeader'
import { PanelBodyWrapper } from '@/shared/ui'

export const HallManagment = () => {
  const [isOpenModalBooking, setIsOpenModalBooking] = useState(false)
  const inputValue = useRef<HTMLInputElement>(null)

  const { isPanelOpen, Header } = useAdminPanelHeader('Управление залами')

  const { data } = useHallsQuery()
  const { mutate: deleteHall } = useDeleteHall()
  const { mutate: createHall } = useCreateHall()

  const handleCloseModal = () => setIsOpenModalBooking(false)
  return (
    <>
      <Header />

      {isPanelOpen && (
        <PanelBodyWrapper>
          <div className={styles['bodyPanel']}>
            <Typography as="p" variant="text-regular">
              Доступные залы:
            </Typography>

            <ul className={styles['listHall']}>
              {data?.result?.halls.map((hall) => {
                return (
                  <li key={hall.id} className={styles['itemHall']}>
                    - {hall.hallName}{' '}
                    <button
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        deleteHall(hall.id)
                      }}
                    >
                      <img src={bucket} width={12} alt="корзина" />
                    </button>
                  </li>
                )
              })}
            </ul>

            <Button
              className={styles['btn-createHall']}
              text="Создать зал"
              variant="standart"
              clickAction={() => {
                setIsOpenModalBooking(!isOpenModalBooking)
              }}
            />

            <Modal
              isModal
              isOpen={isOpenModalBooking}
              title="Добавление зала"
              onClose={handleCloseModal}
              classNameBody={styles['content']}
              describeContent="modal-hall-add"
            >
              <>
                <div id="modal-hall-add">
                  <Typography
                    as={'p'}
                    variant="text-light"
                    style={{ color: '#848484' }}
                  >
                    Название зала
                  </Typography>
                  <input
                    ref={inputValue}
                    type="text"
                    name="hall"
                    id="hall"
                    placeholder="Например, «Зал 1»"
                    className={styles['inputHall']}
                  />
                </div>

                <div className={styles['btn-block']}>
                  <Button
                    clickAction={() => {
                      if (typeof inputValue.current?.value !== 'string') {
                        return
                      }

                      createHall(inputValue.current.value)
                      handleCloseModal()
                    }}
                    text="Добавить зал"
                    variant="standart"
                  ></Button>
                  <Button
                    clickAction={handleCloseModal}
                    text="Отменить"
                    variant="standart"
                  ></Button>
                </div>
              </>
            </Modal>
          </div>
        </PanelBodyWrapper>
      )}
    </>
  )
}
