import { ReactElement, useRef, useState } from 'react'
import { PanelHeader } from '@/shared/ui/PanelHeader/PanelHeader'
import { useQuery } from '@tanstack/react-query'
import { getAllData } from '@/shared/api/http'
import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './HallManagment.module.css'
import bucket from '@/shared/assets/bucket.png'
import { useDeleteHall } from '@/entities/hall/useDeleteHall'
import { Button } from '@/shared/ui/Button/Button'
import { Modal } from '@/shared/ui/Modal/Modal'
import { useCreateHall } from '@/entities/hall/useCreateHall'

export const HallManagment = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false)
  const [isOpenModalBooking, setIsOpenModalBooking] = useState(false)
  const inputValue = useRef<HTMLInputElement>(null)

  //TODO вынести это из функции, здесь этого не должно быть
  const { data } = useQuery({
    queryKey: ['halls'],
    queryFn: getAllData,
  })
  const { mutate: deleteHall } = useDeleteHall()
  const { mutate: createHall } = useCreateHall()

  const handleTogglePanel = () => {
    setIsOpenPanel(!isOpenPanel)
  }

  const handleCloseModal = () => setIsOpenModalBooking(false)
  return (
    <>
      <PanelHeader
        title="Управление залами"
        handleOpenPanel={handleTogglePanel}
        isOpenPanel={isOpenPanel}
      />

      {isOpenPanel && (
        <section className={styles['bodyPanelWrapper']}>
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
            >
              <>
                <div>
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
                    text="Добавить фильм"
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
        </section>
      )}
    </>
  )
}
