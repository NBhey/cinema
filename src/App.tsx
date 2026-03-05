import './app/global.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import 'react-loading-skeleton/dist/skeleton.css'
import { BookingLayout } from '@/widgets/Booking/ui/BookingLayout'
import { SelectSeatsStep } from './features/SelectSeatsStep'
import { ConfirmStepLayout } from './features/ConfirmStep'
import { MainPageLayout } from './pages/MainPage/ui/layout/MainPageLayout'
import { DateGuard } from './pages/MainPage/ui/layout/DateGuard'
import { ConfirmStepBtn, ConfirmStepQr } from './features/ConfirmStep/ui'
import { Authorization } from './pages/Autorization/Authorization'
import { AdministrationLayout } from './pages/Autorization/ui/AdministrationLayout'

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
              <Route path="confirm" element={<ConfirmStepLayout />}>
                <Route index element={<ConfirmStepBtn />} />
                <Route path=":ticket" element={<ConfirmStepQr />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route element={<AdministrationLayout />}>
          <Route path="/login" element={<Authorization />} />
          {/* <Route path="/admin" element={} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
