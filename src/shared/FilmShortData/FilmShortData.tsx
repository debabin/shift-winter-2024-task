import goldStar from '@/assets/images/goldStar.svg'
import greyStar from '@/assets/images/greyStar.svg'
import { range } from '@/lib/helpers/range/range'
import Image from 'next/image'
import { FC } from 'react'
import './filmShortData.scss'
interface IFilmShortData {
  title: string
  subtitle: string
  rating: string
}

const FilmShortData: FC<IFilmShortData> = ({ title, subtitle, rating }) => {
  return (
    <div>
      <p className="filmShortData__title">{title}</p>
      <p className="filmShortData__subtitle">{subtitle}</p>
      <div className="filmShortData__stars_wrap">
        {range(Math.round(Number(rating) / 2)).map(el => (
          <Image
            key={el}
            priority
            src={goldStar}
            height={24}
            width={24}
            alt="star"
          />
        ))}
        {range(Math.round(5 - Number(rating) / 2)).map(el => (
          <Image
            key={el}
            priority
            src={greyStar}
            height={24}
            width={24}
            alt="star"
          />
        ))}
      </div>
      <p className="filmShortData__rating">Kinopoisk 8.4</p>
    </div>
  )
}

export default FilmShortData
