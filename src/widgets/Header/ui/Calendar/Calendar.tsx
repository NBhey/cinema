import { useState } from 'react'
import { DayCard } from './DayCard'
import style from './Calendar.module.css'

const arrayDaysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

function checkDate(date: Date) {
  return (
    date.getFullYear() === new Date().getFullYear() &&
    date.getMonth() === new Date().getMonth() &&
    date.getDate() === new Date().getDate()
  )
}

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())

  const calendarList: Array<{
    day: number
    dayOfWeek: { dayOfWeek: number; dayOfWeekString: string }
    month: number
    year: number
    today: boolean
  }> = []

  const hasPrev = checkDate(startDate)

  let count = hasPrev ? 5 : 4

  for (let i = startDate.getDate(); i <= startDate.getDate() + count; i += 1) {
    const currentDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      i,
    )

    calendarList.push({
      day: currentDate.getDate(),
      dayOfWeek: {
        dayOfWeek: currentDate.getDay(),
        dayOfWeekString: arrayDaysOfWeek[currentDate.getDay()],
      },
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
      today: checkDate(currentDate),
    })
  }

  console.log(calendarList)

  const CardsList = calendarList.map((day) => {
    return (
      <DayCard
        key={String(new Date(day.year, day.month, day.day))}
        currentDay={day.today}
        day={day.day}
      ></DayCard>
    )
  })

  const nxtBtn = () => {
    return (
      <button
        onClick={() => {
          setStartDate((prevDate) => {
            return new Date(
              prevDate.getFullYear(),
              prevDate.getMonth(),
              prevDate.getDate() + 6,
            )
          })
        }}
        style={{ flexGrow: 1 }}
      >
        {'>'}
      </button>
    )
  }

  const prvBtn = () => {
    return (
      <button
        onClick={() => {
          setStartDate((prevDate) => {
            return new Date(
              prevDate.getFullYear(),
              prevDate.getMonth(),
              prevDate.getDate() - 6,
            )
          })
        }}
        style={{ flexGrow: 1 }}
      >
        {'<'}
      </button>
    )
  }

  return (
    <nav className={style.calendar}>
      {!hasPrev && prvBtn()}
      {CardsList}
      {nxtBtn()}
    </nav>
  )
}
