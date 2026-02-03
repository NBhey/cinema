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
  currentDate: string
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.card} ${isActive ? styles.active : ''}`
      }
      to={`${isCurrentDay ? '/' : currentDate}`}
    >
      {({ isActive }) => (
        <>
          {isCurrentDay && (
            <Typography
              as="span"
              variant="text-light"
              style={{
                ...(isActive
                  ? { fontWeight: 700, fontSize: '15px', lineheight: '14px' }
                  : {}),

                color:
                  dayOfWeek === 'Сб' || dayOfWeek === 'Вс'
                    ? '#FF0000'
                    : '#000000',
              }}
            >
              {'Сегодня'}
            </Typography>
          )}

          <div
            style={{
              display: 'flex',
              flexDirection: isCurrentDay ? 'row' : 'column',
              color:
                dayOfWeek === 'Сб' || dayOfWeek === 'Вс'
                  ? '#FF0000'
                  : '#000000',
            }}
          >
            <Typography
              as="span"
              variant="text-light"
              style={
                isActive
                  ? { fontWeight: 700, fontSize: '15px', lineheight: '14px' }
                  : {}
              }
            >
              {dayOfWeek}, {'\u00A0'}
            </Typography>

            <Typography
              as="span"
              variant="text-light"
              style={
                isActive
                  ? { fontWeight: 700, fontSize: '15px', lineheight: '14px' }
                  : {}
              }
            >
              {day}
            </Typography>
          </div>
        </>
      )}
    </NavLink>
  )
}
