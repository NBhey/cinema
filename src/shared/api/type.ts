type HallPlaces = 'standart' | 'vip' | 'taken' | 'disabled'

export interface Hall {
  id: number
  hallName: string
  hallRows: number
  hallPlaces: number
  hallConfig: Array<HallPlaces[]>
  hallPriceStandart: number
  hallPriceVip: number
  hallOpen: number
}

export interface Films {
  id: number
  filmName: string
  filmDuration: number
  filmOrigin: string
  filmPoster: string
  filmDescription: string
}

export interface Seances {
  id: number
  seanceFilmid: number
  seanceHallid: number
  seanceTime: string
}

export type AllDataFilm = {
  halls: Hall[]
  films: Films[]
  seances: Seances[]
}

export type Scheme = {
  result:Array<HallPlaces[]>
  success: boolean
}