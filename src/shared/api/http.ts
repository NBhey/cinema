import { API_CONFIG } from './config'
import axios from 'axios'

const instance = axios.create({
  baseURL: API_CONFIG.baseURL,
})


type HallPlaces = 'standart' | 'vip' | 'taken' | 'disabled'

interface Hall {
  id: number
  hall_name: string
  hall_rows: number
  hall_places: number
  hall_config: Array<HallPlaces[]>
  hall_price_standart: number
  hall_price_vip: number
  hall_open: number
}

interface Films {
  id: number
  film_name: string
  film_duration: number
  film_origin: string
  film_poster: string
}

interface Seances {
  id: number
  seance_filmid: number
  seance_hallid: number
  seance_time: string
}

type AllData = {
  halls: Hall
  films: Films
  seances: Seances
}
// Общий: у пользователя и админа
export const getAllData = async () => {
  const {data} = await instance.get<AllData>('alldata').then(res=>{
    return res
  })
  console.log(data)
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
