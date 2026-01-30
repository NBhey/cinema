import { Link } from 'react-router'
import styles from './DayCard.module.css'

export const DayCard = ({
  day,
  isCurrentDay = false,
  dayOfWeek,
}: {
  day: number
  isCurrentDay?: boolean
  dayOfWeek: string
}) => {
  return (
    <Link
      className={`${styles.card}`}
      style={{
        display: isCurrentDay ? 'flex' : 'block',
        flexDirection: 'column',
      }}
    >
      {isCurrentDay && <span>{'Сегодня'}</span>}
      <div style={{ display: 'flex', flexDirection: isCurrentDay ? 'row' : 'column' }}>
        <span>{dayOfWeek}, </span>
        <span>{day}</span>
      </div>
    </Link>
  )
}
