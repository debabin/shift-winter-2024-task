export interface Schedule {
  date: string
  seances: Seance[]
}

export interface Seance {
  time: string
  hall: Hall
  payedTickets: any[]
}

export interface Hall {
  name: string
  places: Place[][]
}

export interface Place {
  price: number
  type: string
}

export interface IPlaceData {
  place: string
  row: string
  price: number
}
