import FilmImg from '@/shared/FilmImg/FilmImg'
import FilmShortData from '@/shared/FilmShortData/FilmShortData'
import { Film } from '@/types/films'
import Link from 'next/link'
import { FC } from 'react'
import styles from './filmCard.module.scss'
interface IFilmCard {
  film: Film
}

const FilmCard: FC<IFilmCard> = ({ film }) => {
  return (
    <div className={styles.card}>
      <FilmImg url={film.img} />
      <FilmShortData
        title={film.name}
        subtitle={film.originalName}
        rating={film.userRatings.kinopoisk}
      />
      <Link href={`films/${film.id}`} passHref>
        <button className={styles.card__button}>Подробнее</button>
      </Link>
    </div>
  )
}

export default FilmCard
