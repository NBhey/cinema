import styles from './DayCard.module.css'

export const DayCard = ({
  day,
  currentDay = false,
}: {
  day: number
  currentDay?: boolean
}) => {
  return <a className={styles.card}>
    {currentDay && "Сегодня"}
    {day}
  </a>
}
