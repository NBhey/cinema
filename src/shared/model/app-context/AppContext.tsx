import { useState, createContext, ReactNode } from 'react'

export const AppContext = createContext('')

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  return <AppContext.Provider value={'xyu'}>{children}</AppContext.Provider>
}
