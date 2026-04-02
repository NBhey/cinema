import { PanelBodyWrapper } from '@/shared/ui'
import useAdminPanelHeader from '../admin/lib/useAdminPanelHeader'
import { useHallsQuery } from '@/shared/api/hall/quieries'
import { useEffect, useState } from 'react'
import { Hall } from '@/shared/api/type'
import { ButtonHallList } from '../admin/ui/ButtonHallList/ButtonHallList'
import { ConfigurateRowAndPlace } from '../admin/ui/ConfigurateRowAndPlace/ConfigurateRowAndPlace'
import { ConfigurateHallScheme } from '../admin/ui/ConfigurateHallScheme/ConfigurateHallScheme'
import { Button } from '@/shared/ui/Button/Button'

export const ConfigurateHall = () => {
  const [activeHall, setActiveHall] = useState<Hall | null>(null)

  const { isPanelOpen, Header } = useAdminPanelHeader('Конфигурация залов')
  const { data } = useHallsQuery()
  const halls = data?.result.halls

  useEffect(() => {
    if (halls) {
      setActiveHall(halls[0])
    }
  }, [halls])

  const handleChangeRow = (value: number) => {
    if (activeHall) {
      setActiveHall({
        ...activeHall,
        hallRows: value,
      })
    }
  }

  const handleChangePlace = (value: number) => {
    if (activeHall) {
      setActiveHall({ ...activeHall, hallPlaces: value })
    }
  }

  const handleCancelAllChange = () => {
    console.log(activeHall)
    if (halls) {
      setActiveHall(
        halls.find((hall) => hall.id === activeHall?.id) || halls[0],
      )
    }
  }

  return (
    <>
      <Header />
      {isPanelOpen && (
        <PanelBodyWrapper>
          <ButtonHallList halls={halls} changeHall={setActiveHall} />

          <ConfigurateRowAndPlace
            row={activeHall?.hallRows}
            places={activeHall?.hallPlaces}
            onChangeRow={handleChangeRow}
            onChangePlaces={handleChangePlace}
          />

          <ConfigurateHallScheme
            row={activeHall?.hallRows}
            places={activeHall?.hallPlaces}
            scheme={activeHall?.hallConfig}
          />

          <Button
            clickAction={handleCancelAllChange}
            text="Отменить"
            variant="standart"
          />
        </PanelBodyWrapper>
      )}
    </>
  )
}
