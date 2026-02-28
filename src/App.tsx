import './app/global.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import 'react-loading-skeleton/dist/skeleton.css'
import { BookingLayout } from '@/widgets/Booking/ui/BookingLayout'
import { SelectSeatsStep } from './features/SelectSeatsStep'
import { ConfirmStep } from './features/ConfirmStep'
import { MainPageLayout } from './pages/MainPage/ui/layout/MainPageLayout'
import { DateGuard } from './pages/MainPage/ui/layout/DateGuard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<MainPage />} />

          <Route path=":date" element={<DateGuard />}>
            <Route index element={<MainPage />} />

            <Route
              path="halls/:hallName/seances/:seanceId"
              element={<BookingLayout />}
            >
              <Route index element={<SelectSeatsStep />} />
              <Route path="confirm" element={<ConfirmStep />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
