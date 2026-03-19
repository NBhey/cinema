import { useState } from 'react'
import { PanelHeader } from '@/shared/ui/PanelHeader/PanelHeader'
import { useQuery } from '@tanstack/react-query'
import { getAllData } from '@/shared/api/http'
import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './HallManagment.module.css'
import bucket from '@/shared/assets/bucket.png'
import useDeleteHall from '@/entities/hall/useDeleteHall'
import { Button } from '@/shared/ui/Button/Button'
import { Dialog } from 'radix-ui'

export const HallManagment = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false)
  const { data } = useQuery({
    queryKey: ['halls'],
    queryFn: getAllData,
  })

  const handleTogglePanel = () => {
    setIsOpenPanel(!isOpenPanel)
  }

  const { mutate: deleteHall } = useDeleteHall()
  console.log(Dialog)
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
            />
          </div>

          <Modal />
        </section>
      )}
    </>
  )
}

const Modal = ({
  isOpen,
  isModal,
  className,
  title,
  classNameTitle,
  children,
}) => (
  <Dialog.Root open={isOpen} modal={isModal} className={className}>
    <Dialog.Title className={classNameTitle}>{title}</Dialog.Title>
    <Dialog.Content>{children}</Dialog.Content>
  </Dialog.Root>
)
