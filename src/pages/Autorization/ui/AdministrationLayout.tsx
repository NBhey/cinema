import { Outlet } from 'react-router-dom'
import styles from './AdministrationLayout.module.css'
import { useEffect } from 'react'

export const AdministrationLayout = () => {
  useEffect(() => {
    document.documentElement.classList.add(styles['administration'])
    return () => {
      document.documentElement.classList.remove(styles['administration'])
    }
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}
