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
 

  const [currentDate, setCurrentDate] = useState(new Date())
  const [state, dispatch] = useReducer(stateReducer, initialState)


 useEffect(() => {
  async function fetchData(){
    return  getAllData()
  }
  const getData = fetchData()
  console.log(getData) 
  dispatch({
    type: 'UPDATE_ALL_STATE',
    payload: {},
  })

}, [])

  return (
    <AppContext.Provider value={{ dispatch, state, currentDate }}>
      {children}
    </AppContext.Provider>
  )
}
