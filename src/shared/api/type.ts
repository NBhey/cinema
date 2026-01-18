
type HallPlaces = 'standart' | 'vip' | 'taken' | 'disabled'


export interface Hall {
  id: number
  hall_name: string
  hall_rows: number
  hall_places: number
  hall_config: Array<HallPlaces[]>
  hall_price_standart: number
  hall_price_vip: number
  hall_open: number
}

export interface Films {
  id: number
  film_name: string
  film_duration: number
  film_origin: string
  film_poster: string
}

export interface Seances {
  id: number
  seance_filmid: number
  seance_hallid: number
  seance_time: string
}

export type AllDataFilm = {
  success: boolean
  result: {
    halls: Hall
    films: Films
    seances: Seances
  }
}