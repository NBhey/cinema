import { useState } from 'react'
import { DayCard } from './DayCard'
import style from './Calendar.module.css'
import { Button } from '@/shared/ui/Button/Button'

const arrayDaysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

function checkDate(date: Date): boolean {
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
        dayOfWeek={day.dayOfWeek.dayOfWeekString}
      ></DayCard>
    )
  })

  const prevCalendarList = () => {
    setStartDate((prevDate) => {
      return new Date(
        prevDate.getFullYear(),
        prevDate.getMonth(),
        prevDate.getDate() - 6,
      )
    })
  }

  const nextCalendarList = () => {
    setStartDate((prevDate) => {
      return new Date(
        prevDate.getFullYear(),
        prevDate.getMonth(),
        prevDate.getDate() + 6,
      )
    })
  }

  return (
    <nav className={style.calendar}>
      {!hasPrev && (
        <Button
          text={'<'}
          clickAction={prevCalendarList}
          style={{ flexGrow: 1 }}
          variant="calendar"
        />
      )}

      {CardsList}

      <Button
        text={'>'}
        clickAction={nextCalendarList}
        style={{ flexGrow: 1 }}
        variant="calendar"
      />
    </nav>
  )
}
