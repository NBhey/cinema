import { useQuery } from '@tanstack/react-query'
import { getAllData } from '../http'

export const useHallsQuery = () => {
  return useQuery({
    queryKey: ['halls'],
    queryFn: getAllData,
  })
}
