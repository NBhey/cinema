import { PanelHeader } from '@/shared/ui/PanelHeader/PanelHeader'
import { useState } from 'react'

export default function useAdminPanelHeader(title: string) {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }

  return {
    isPanelOpen,
    setIsPanelOpen,
    Header: () => {
      return PanelHeader({
        title,
        isPanelOpen,
        handleOpenPanel: handleTogglePanel,
      })
    },
  }
}
