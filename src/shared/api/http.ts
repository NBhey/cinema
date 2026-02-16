import { API_CONFIG } from './config'
import axios, { AxiosInstance } from 'axios'
import { AllDataFilm, Scheme, Seances } from './type'
import camelcaseKeys from 'camelcase-keys'

const instance: AxiosInstance = axios.create({
  baseURL: API_CONFIG.baseURL,
})

instance.interceptors.response.use((response) => {
  const data = camelcaseKeys(response.data, { deep: true })
  return data
})

export const api = {
  get: <T>(url: string, config?: any) => instance.get<any, T>(url, config),
  post: <T>(url: string, body?: any, config?: any) =>
    instance.post<any, T>(url, body, config),
}

export const getAllData = async () => {
  return await api.get<AllDataFilm>('alldata')
}

export const getScheme = async (
  seanceId: Seances['id'],
  date: string,
): Promise<Scheme> => {
  return await api.get<Scheme>(`hallconfig?seanceId=${seanceId}&date=${date}`)
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
