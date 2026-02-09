import styles from './MainPage.module.css'
import { Outlet } from 'react-router-dom'
import { AppProvider } from '@/shared/model/app-context/AppContext'

export const MainPageLayout = () => {
  return (
    <AppProvider>
      <div className={styles.container}>
        <Outlet />
      </div>
    </AppProvider>
  )
}
