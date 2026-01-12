import styles from './DayCard.module.css'

export const DayCard = ({
  day,
  currentDay = false,
  dayOfWeek,
}: {
  day: number
  currentDay?: boolean
  dayOfWeek: string
}) => {
  return (
    <a
      className={`${styles.card}`}
      style={{
        display: currentDay ? 'flex' : 'block',
        flexDirection: 'column',
      }}
    >
      {currentDay && <span>{'Сегодня'}</span>}
      <div style={{ display: 'flex', flexDirection: currentDay ? 'row' : 'column' }}>
        <span>{dayOfWeek}, </span>
        <span>{day}</span>
      </div>
    </a>
  )
}
