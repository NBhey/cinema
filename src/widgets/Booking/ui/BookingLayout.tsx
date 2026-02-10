import { Link, Outlet } from 'react-router-dom'
import styles from './BookingLayout.module.css'
import { BrandTitle } from '@/shared/ui'

export const BookingLayout = () => {
  return (
    <div className={styles.bookingWrapper}>
      <header className={styles.bookingHeader}>
        <Link to="/">
          <BrandTitle />
        </Link>
      </header>

      <Outlet />
    </div>
  )
}
