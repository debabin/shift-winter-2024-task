import arrowBack from '@/assets/images/arrowBack.svg'
import { getFilm } from '@/lib/api/filmsApi'
import FilmImg from '@/shared/FilmImg/FilmImg'
import FilmShortData from '@/shared/FilmShortData/FilmShortData'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Description from './_components/Description/Description'
import Scheldue from './_components/Scheldue/Scheldue'
import './film.scss'

interface IFilmPage {
  params: {
    id: string
  }
}

const FilmPage: FC<IFilmPage> = async ({ params }) => {
  const { film } = await getFilm(params.id)
  return (
    <section className="film__section">
      <Link href="/" className="film__back_link">
        <div>
          <Image priority src={arrowBack} width={24} height={24} alt="arrow" />
          <p>Назад</p>
        </div>
      </Link>
      <div className="film__container">
        <FilmImg url={film.img} />

        <div className="film__data">
          <FilmShortData
            title={film.name}
            subtitle={film.originalName}
            rating={film.userRatings.kinopoisk}
          />
          <Description data={film.description} />
        </div>
      </div>
      <p className="film__scheldue_title">Расписание</p>
      <Scheldue id={params.id} />
    </section>
  )
}

export default FilmPage
