import { useState } from 'react'

function getDaysInCurrentMonth() {
  const today = new Date()
  return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
}

function getRemainingDaysListForCalendar(daysInCurrentMonth: number) {
  let remainingDays = []
  const today = new Date().getDate()

  for (let i = today; i <= daysInCurrentMonth; i += 1) {
    remainingDays.push(i)
  }

  return remainingDays
}

const daysInCurrentMonth = getDaysInCurrentMonth()
const remainingDaysList = getRemainingDaysListForCalendar(daysInCurrentMonth)

export const Calendar = () => {
  const [daysListDisplay, setDaysListDisplay] = useState(
    remainingDaysList.slice(0, 6),
  )

  console.log(daysListDisplay)

  return <></>
}
