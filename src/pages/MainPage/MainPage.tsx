import { FilmList } from '@/widgets/FilmList/ui/FilmList'
import { MainPageLayout } from './ui/layout/MainPageLayout'
import { Header } from '@/widgets/Header'

export const MainPage = () => {
  return (
    <>
      <Header />
      <FilmList />
    </>
  )
}
