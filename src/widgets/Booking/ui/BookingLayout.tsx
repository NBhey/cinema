import { Link, Outlet } from 'react-router-dom'
import styles from './BookingLayout.module.css'
import { BrandTitle } from '@/shared/ui'

export const BookingLayout = () => {
  return (
    <div className={styles.bookingWrapper}>
      <header>
        <Link to="/">
          <BrandTitle />
        </Link>
      </header>
      <section>
        <Outlet />
      </section>
    </div>
  )
}
