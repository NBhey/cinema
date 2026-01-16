import { FilmList } from '@/widgets/FilmList/ui/FilmList'
import { MainPageLayout } from './ui/layout/MainPageLayout'
import { Header } from '@/widgets/Header'
import { AppProvider } from '@/shared/model/app-context/AppContext'

export const MainPage = () => {
  return (
    <AppProvider>
      <MainPageLayout>
        <Header />
        <FilmList />
      </MainPageLayout>
    </AppProvider>
  )
}
