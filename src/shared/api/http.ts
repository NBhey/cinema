import { API_CONFIG } from './config'
import axios, { AxiosInstance } from 'axios'
import { AllDataFilm, AuthResponse, Scheme, Seances } from './type'
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
  delete: (url: string) => instance.delete(url),
}

export const getAllData = async () => {
  return await api.get<{ success: boolean; result: AllDataFilm }>('alldata')
}

export const getScheme = async (
  seanceId: Seances['id'],
  date: string,
): Promise<Scheme> => {
  return await api.get<Scheme>(`hallconfig?seanceId=${seanceId}&date=${date}`)
}

export const buyTicket = (parameters: {
  seanceId: number
  ticketDate: string
  tickets: string
}) => {
  const ticketResult = api
    .post('ticket', parameters)
    .then((response) => response)
    .catch((error) => error)

  return ticketResult
}

export const authenticateAdmin = async (parameters: {
  login: string
  password: string
}): Promise<AuthResponse> => {
  return await api.post('login', parameters)
}

// TODO Для админа(пока делаем только пользователя) возможно запросы для админа будут через танстак квери для тренировки

export const deleteHall = async (hallId: number) => {
  return await api.delete(`hall/${hallId}`)
}

export const createHall = async (parameters: { hallName: string }) => {
  return await api.post('hall', parameters)
}
