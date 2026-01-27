import { API_CONFIG } from './config'
import axios, { AxiosInstance } from 'axios'
import { AllDataFilm, Hall, Seances } from './type'

const instance:AxiosInstance = axios.create({
  baseURL: API_CONFIG.baseURL,
})

instance.interceptors.response.use((response) => {
  console.log('interceptors', response)
  return response
})

// Общий: у пользователя и админа
export const getAllData = async () => {
  const { data } = await instance.get<AllDataFilm>('alldata').then((res) => {
    return res
  })
  return data
}

// Для пользователя
export const getScheme = async (seanceId: Seances['id'], date: string) => {
  const { data } = await instance.get<Hall['hall_config']>(
    `hallconfig?seanceId=${seanceId}&date=${date}`,
  )

  return data
}

export const buyTicket = (parameters: {
  row: number
  place: number
  coast: number
}) => {
  const ticketResult = instance
    .post('ticket', parameters)
    .then((response) => response)
    .catch((error) => error)

  return ticketResult
}

// TODO Для админа(пока делаем только пользователя)
