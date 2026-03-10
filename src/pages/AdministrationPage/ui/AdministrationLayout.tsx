import { Outlet } from 'react-router-dom'
import styles from './AdministrationLayout.module.css'
import { useEffect } from 'react'
import { BrandTitle } from '@/shared/ui'
import { Typography } from '@/shared/ui/Typography/Typography'

export const AdministrationLayout = () => {
  useEffect(() => {
    document.documentElement.classList.add(styles['administration'])
    return () => {
      document.documentElement.classList.remove(styles['administration'])
    }
  }, [])

  return (
    <div className={styles['wrapper']}>
      <header className={styles['header']}>
        <BrandTitle />
        <Typography className={styles['subtitle']} as="p" variant="text-light">
          Администраторская
        </Typography>
      </header>
      <Outlet />
    </div>
  )
}
