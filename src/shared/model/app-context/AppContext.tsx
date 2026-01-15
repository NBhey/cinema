import { getAllData } from '@/shared/api/http'
import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'
import { initialState, stateReducer } from './reducer'

export const AppContext = createContext({})

export const AppProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {}, [])

  const [currentDate, setCurrentDate] = useState(new Date())
  const [state, dispatch] = useReducer(stateReducer, initialState)

  dispatch({
    type: 'UPDATE_ALL_STATE',
    payload: getAllData(),
  })

  return (
    <AppContext.Provider value={{ dispatch, state, currentDate }}>
      {children}
    </AppContext.Provider>
  )
}
