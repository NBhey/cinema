import { useState } from 'react'
import { PanelHeader } from '@/shared/ui/PanelHeader/PanelHeader'
import { useQuery } from '@tanstack/react-query'
import { getAllData } from '@/shared/api/http'
import { Typography } from '@/shared/ui/Typography/Typography'

export const HallManagment = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false)
  const { data, isLoading, error } = useQuery({
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
        <div>
          <Typography as="p" variant="text-regular">
            Доступные залы
          </Typography>
        </div>
      )}
    </>
  )
}
