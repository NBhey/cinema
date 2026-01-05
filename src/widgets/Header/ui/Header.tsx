import { Calendar } from './Calendar/Calendar'
import { TitleBlock } from './TitleBlock/TitleBlock'

export const Header = () => {
  return (
    <header>
      <TitleBlock />
      <Calendar />
    </header>
  )
}
