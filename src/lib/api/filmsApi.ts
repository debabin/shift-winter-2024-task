import { Film } from '@/types/films'
import { Schedule } from '../../types/scheldue'
import instance from './instance'

interface IGetAllFilms {
  succes: boolean
  films: Film[]
}

interface IGetFilm {
  succes: boolean
  film: Film
}

interface IGetScheldue {
  succes: boolean
  schedules: Schedule[]
}

export const getAllFilms = async (): Promise<IGetAllFilms> => {
  const res = await instance.get('cinema/today')
  return res.data
}
export const getFilm = async (id: string): Promise<IGetFilm> => {
  const res = await instance.get(`cinema/film/${id}`)
  return res.data
}

export const getScheldue = async (id: string): Promise<IGetScheldue> => {
  const res = await instance.get(`cinema/film/${id}/schedule`)
  return res.data
}
