import { API_CONFIG } from './config'
import axios, { AxiosInstance } from 'axios'
import { AllDataFilm, Hall, Seances } from './type'
import camelcaseKeys from 'camelcase-keys'

const instance: AxiosInstance = axios.create({
  baseURL: API_CONFIG.baseURL,
})

instance.interceptors.response.use((response) => {
  const data = camelcaseKeys(response.data, { deep: true })

  return data
})

// Общий: у пользователя и админа
export const getAllData = async () => {
  return await instance.get<AllDataFilm>('alldata')
}

// Для пользователя
export const getScheme = async (seanceId: Seances['id'], date: string) => {
  const { data } = await instance.get<Hall['hallConfig']>(
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
