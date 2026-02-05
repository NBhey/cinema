import './app/global.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { BookingPage } from './pages/BookingPage/BookingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:date" element={<MainPage />} />
        <Route
          path="/:date/halls/:hallId/seances/:seanceId"
          element={<BookingPage />}
        >
          <Route index element={<h1>Booking</h1>} />
          <Route path="confirm" element={<h1>Confirm</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
