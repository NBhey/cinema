import { PanelBodyWrapper } from '@/shared/ui'
import useAdminPanelHeader from '../admin/lib/useAdminPanelHeader'
import { useHallsQuery } from '@/shared/api/hall/quieries'
import { useEffect, useState } from 'react'
import { Hall } from '@/shared/api/type'
import { ButtonHallList } from '../admin/ui/ButtonHallList/ButtonHallList'
import { ConfigurateRowAndPlace } from '../admin/ui/ConfigurateRowAndPlace/ConfigurateRowAndPlace'
import { ConfigurateHallScheme } from '../admin/ui/ConfigurateHallScheme/ConfigurateHallScheme'

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

  const hanfleChangeRow = (value: number) => {
    if (activeHall) {
      setActiveHall({
        ...activeHall,
        hallRows: value,
      })
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
            onChangeRow={hanfleChangeRow}
            // onChangePlace={() => {}}
          />
          <ConfigurateHallScheme
            row={activeHall?.hallRows}
            places={activeHall?.hallPlaces}
            scheme={activeHall?.hallConfig}
          />
        </PanelBodyWrapper>
      )}
    </>
  )
}
