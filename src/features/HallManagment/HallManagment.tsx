import { useState } from 'react'
import { PanelHeader } from '@/shared/ui/PanelHeader/PanelHeader'

export const HallManagment = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false)

  const handleTogglePanel = () => {
    setIsOpenPanel(!isOpenPanel)
  }
  return (
    <>
      <PanelHeader
        title="Управление залами"
        handleOpenPanel={handleTogglePanel}
        isOpenPanel
      />
    </>
  )
}
