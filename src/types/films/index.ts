export interface Film {
  id: string
  name: string
  originalName: string
  description: string
  releaseDate: string
  actors: Actor[]
  directors: Director[]
  runtime: number
  ageRating: string
  genres: string[]
  userRatings: UserRatings
  img: string
}

export interface Actor {
  id: string
  professions: string[]
  fullName: string
}

export interface Director {
  id: string
  professions: string[]
  fullName: string
}

export interface UserRatings {
  kinopoisk: string
  imdb: string
}
