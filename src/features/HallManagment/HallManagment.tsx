import { useState } from 'react'
import { PanelHeader } from '@/shared/ui/PanelHeader/PanelHeader'
import { useQuery } from '@tanstack/react-query'
import { getAllData } from '@/shared/api/http'
import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './HallManagment.module.css'

export const HallManagment = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false)
  const { data } = useQuery({
    queryKey: ['halls'],
    queryFn: getAllData,
  })

  const handleTogglePanel = () => {
    setIsOpenPanel(!isOpenPanel)
  }
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
                return <li key={hall.id}>- {hall.hallName}</li>
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
