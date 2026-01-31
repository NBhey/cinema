import './app/global.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path=":date" element={<MainPage />}></Route>
        </Route>
        <Route
          path="/halls/:hallId/seances/:seancesId"
          element={<h1>1</h1>}
        ></Route>
      </Routes>
    </Router>
  )
}

export default App
