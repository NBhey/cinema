import { NavLink } from 'react-router'
import styles from './DayCard.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'

export const DayCard = ({
  day,
  isCurrentDay = false,
  dayOfWeek,
  currentDate,
}: {
  day: number
  isCurrentDay?: boolean
  dayOfWeek: string
  currentDate: Date
}) => {
  //TODO это глупый компонент, он не должен делать какую-либо логику,только отрисовать то, что ему сказано
  const formatDate = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(currentDate)

  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.card} ${isActive ? styles.active : ''}`
      }
      to={`${isCurrentDay ? '/' : formatDate}`}
    >
      {isCurrentDay && <Typography as='span' variant='text-light'>{'Сегодня'}</Typography>}
      <div
        style={{
          display: 'flex',
          flexDirection: isCurrentDay ? 'row' : 'column',
        }}
      >
        <Typography as='span' variant='text-light'>{dayOfWeek}, {'\u00A0'}</Typography>
    
        <Typography as='span' variant='text-light'>{day}</Typography>
      </div>
    </NavLink>
  )
}
