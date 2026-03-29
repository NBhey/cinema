import { FC } from 'react'
import image from '@/shared/assets/arrow.svg'
import styles from './PanelHeader.module.css'

interface PanelHeaderProps {
  title: string
  isPanelOpen: boolean
  handleOpenPanel: () => void
}

export const PanelHeader: FC<PanelHeaderProps> = ({
  title,
  isPanelOpen,
  handleOpenPanel,
}) => {
  return (
    <section className={styles['title']}>
      <h3>{title}</h3>
      <img
        className={isPanelOpen ? styles['image'] : styles['img_rotate']}
        onClick={handleOpenPanel}
        src={image}
        alt="стрелка"
      />
    </section>
  )
}
