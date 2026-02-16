import { getAllData } from '@/shared/api/http'
import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  Dispatch,
  SetStateAction,
  ActionDispatch,
  useContext,
} from 'react'
import { initialState, State, stateReducer } from './reducer'

interface CTX {
  currentDate: Date
  dispatch: ActionDispatch<[action: { type: string; payload: {} }]>
  setCurrentDate: Dispatch<SetStateAction<Date>>
  state: State
}

export const AppContext = createContext<CTX | null>(null)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [state, dispatch] = useReducer(stateReducer, initialState)

  useEffect(() => {
    getAllData()
      .then((result) => {
        dispatch({
          type: 'UPDATE_ALL_STATE',
          payload: { isLoading: true, ...result, currentDate, setCurrentDate },
        })
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <AppContext.Provider
      value={{ dispatch, state, currentDate, setCurrentDate }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useData = () => {
  const data = useContext(AppContext)
  if (data && data.state) {
    return { state: data.state, dispatch: data.dispatch }
  }

  throw new Error('Данные не пришли')
}
