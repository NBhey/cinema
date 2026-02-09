import './app/global.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'

import { BookingLayout } from '@/widgets/Booking/ui/BookingLayout'
import { SelectSeatsStep } from './features/SelectSeatsStep'
import { ConfirmStep } from './features/ConfirmStep'
import { AppProvider } from './shared/model/app-context/AppContext'
import { MainPageLayout } from './pages/MainPage/ui/layout/MainPageLayout'

function App() {
  /* TODO неверно оборачиваю роуты, AppProvider не должен так оборачивать их  
   создать отдельный лайаут под PublicLayout, так будет проще дальше работать с AdminLayout*/
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<MainPageLayout />}>
            <Route index element={<MainPage />} />
            <Route path=":date" element={<MainPage />} />
          </Route>
          <Route
            path="/:date/halls/:hallId/seances/:seanceId"
            element={<BookingLayout />}
          >
            <Route index element={<SelectSeatsStep />} />
            <Route path="confirm" element={<ConfirmStep />} />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default App
